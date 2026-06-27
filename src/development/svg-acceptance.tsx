import fs from "fs";
import os from "os";
import path from "path";
import React from "react";
import { Renderer } from "../renderer";
import { appContainer } from "../reconciler";
import {
  Circle,
  Path,
  Rect,
  Svg,
  SvgText,
  Text,
  Window,
} from "../index";
import { RNSvg, createSvgElement } from "../components/Svg/RNSvg";

type Resolve = () => void;
type Reject = (reason?: unknown) => void;

const failures: string[] = [];
const warnings: string[] = [];
const originalWarn = console.warn;

console.warn = (...args: unknown[]) => {
  warnings.push(args.map(String).join(" "));
  originalWarn(...args);
};

function closeAllWindows() {
  for (const widget of Array.from(appContainer)) {
    if ((widget as any).close) {
      (widget as any).close();
    }
    appContainer.delete(widget);
  }
}

function assert(condition: unknown, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

function finishTest(
  name: string,
  error: unknown,
  resolve: Resolve,
  reject: Reject
) {
  closeAllWindows();
  if (error) {
    const message = error instanceof Error ? error.message : String(error);
    failures.push(`${name}: ${message}`);
    reject(error);
    return;
  }
  console.log(`${name}: PASS`);
  resolve();
}

function runRenderTest(
  name: string,
  element: React.ReactElement,
  verify?: () => void,
  timeoutMs = 5000
) {
  return new Promise<void>((resolve, reject) => {
    let settled = false;
    const timer = setTimeout(() => {
      if (!settled) {
        settled = true;
        finishTest(name, new Error("Timed out"), resolve, reject);
      }
    }, timeoutMs);

    Renderer.render(element, {
      onRender: () => {
        if (settled) {
          return;
        }
        setTimeout(() => {
          if (settled) {
            return;
          }
          try {
            verify && verify();
            settled = true;
            clearTimeout(timer);
            finishTest(name, null, resolve, reject);
          } catch (error) {
            settled = true;
            clearTimeout(timer);
            finishTest(name, error, resolve, reject);
          }
        }, 0);
      },
    });
  });
}

async function verifyRootImport() {
  await runRenderTest(
    "root-import",
    <Window>
      <Text>ok</Text>
    </Window>
  );
}

async function verifyReadmeShapes() {
  const svgRef = React.createRef<RNSvg>();
  await runRenderTest(
    "readme-helper-shapes",
    <Window>
      <Svg ref={svgRef} width={160} height={120} viewBox="0 0 160 120">
        <Rect x={10} y={10} width={140} height={100} rx={12} fill="#20242a" />
        <Circle cx={80} cy={60} r={28} fill="#61dafb" />
        <Path
          d="M68 60l9 9 18-22"
          fill="none"
          stroke="#20242a"
          strokeWidth={8}
        />
      </Svg>
    </Window>,
    () => {
      const svg = svgRef.current!.toSvgString();
      assert(svg.includes("<rect "), "Missing rect in README helper output");
      assert(svg.includes("<circle "), "Missing circle in README helper output");
      assert(svg.includes("<path "), "Missing path in README helper output");
    }
  );
}

async function verifyLowercaseRect() {
  const svgRef = React.createRef<RNSvg>();
  await runRenderTest(
    "lowercase-rect",
    <Window>
      <Svg ref={svgRef} width={100} height={100} viewBox="0 0 100 100">
        {React.createElement("rect", {
          x: 0,
          y: 0,
          width: 100,
          height: 100,
          fill: "#00aa00",
        })}
      </Svg>
    </Window>,
    () => {
      const svg = svgRef.current!.toSvgString();
      assert(svg.includes('fill="#00aa00"'), "Lowercase rect was not serialized");
    }
  );
}

async function verifySvgText() {
  const svgRef = React.createRef<RNSvg>();
  await runRenderTest(
    "svg-text-helper",
    <Window>
      <Svg ref={svgRef} width={120} height={100} viewBox="0 0 120 100">
        <SvgText x={10} y={40} fill="#111111">
          ok
        </SvgText>
      </Svg>
    </Window>,
    () => {
      const svg = svgRef.current!.toSvgString();
      assert(svg.includes(">ok</text>"), "SvgText content missing");
    }
  );
}

async function verifySvgContent() {
  const content =
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><circle cx='20' cy='20' r='18' fill='#3366ff'/></svg>";
  await runRenderTest(
    "content-prop",
    <Window>
      <Svg width={40} height={40} content={content} />
    </Window>
  );
}

async function verifySvgBuffer() {
  const buffer = Buffer.from(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><rect x='5' y='5' width='30' height='30' fill='#ff8800'/></svg>"
  );
  await runRenderTest(
    "buffer-prop",
    <Window>
      <Svg width={40} height={40} buffer={buffer} />
    </Window>
  );
}

async function verifySvgSrc() {
  const svgPath = path.join(os.tmpdir(), "react-nodegui-svg-source.svg");
  fs.writeFileSync(
    svgPath,
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><path d='M5 20 L20 5 L35 20 L20 35 Z' fill='#22aa66'/></svg>"
  );
  try {
    await runRenderTest(
      "src-prop",
      <Window>
        <Svg width={40} height={40} src={svgPath} />
      </Window>
    );
  } finally {
    fs.rmSync(svgPath, { force: true });
  }
}

async function verifyAdjacentText() {
  const svgRef = React.createRef<RNSvg>();
  await runRenderTest(
    "adjacent-text",
    <Window>
      <Svg ref={svgRef} width={120} height={40} viewBox="0 0 120 40">
        <SvgText x={0} y={20}>
          {"hello "}
          {"world"}
        </SvgText>
      </Svg>
    </Window>,
    () => {
      const svg = svgRef.current!.toSvgString();
      assert(svg.includes(">hello world</text>"), "Adjacent text did not serialize");
    }
  );
}

async function verifyMixedTspan() {
  const svgRef = React.createRef<RNSvg>();
  await runRenderTest(
    "mixed-tspan",
    <Window>
      <Svg ref={svgRef} width={160} height={40} viewBox="0 0 160 40">
        <SvgText x={0} y={20}>
          {"hello "}
          {React.createElement("tspan", { fill: "#f00" }, "there")}
          {" friend"}
        </SvgText>
      </Svg>
    </Window>,
    () => {
      const svg = svgRef.current!.toSvgString();
      assert(svg.includes("hello "), "Mixed tspan leading text missing");
      assert(
        svg.includes('<tspan fill="#f00">there</tspan>'),
        "Mixed tspan child missing"
      );
      assert(svg.includes(" friend</text>"), "Mixed tspan trailing text missing");
    }
  );
}

async function verifyMixedTextUpdate() {
  return new Promise<void>((resolve, reject) => {
    const svgRef = React.createRef<RNSvg>();
    let initialRender = true;
    let timeout = setTimeout(() => {
      finishTest("mixed-text-update", new Error("Timed out"), resolve, reject);
    }, 5000);

    class App extends React.Component<{}, { leading: string }> {
      state = { leading: "hello " };

      componentDidMount() {
        setTimeout(() => this.setState({ leading: "goodbye " }), 0);
      }

      componentDidUpdate() {
        try {
          const svg = svgRef.current!.toSvgString();
          assert(svg.includes("goodbye "), "Updated leading text missing");
          assert(!svg.includes("hello "), "Stale leading text still present");
          assert(
            svg.includes('<tspan fill="#f00">there</tspan>'),
            "Updated mixed tspan child missing"
          );
          clearTimeout(timeout);
          finishTest("mixed-text-update", null, resolve, reject);
        } catch (error) {
          clearTimeout(timeout);
          finishTest("mixed-text-update", error, resolve, reject);
        }
      }

      render() {
        return (
          <Window>
            <Svg ref={svgRef} width={180} height={40} viewBox="0 0 180 40">
              <SvgText x={0} y={20}>
                {this.state.leading}
                {React.createElement("tspan", { fill: "#f00" }, "there")}
                {" friend"}
              </SvgText>
            </Svg>
          </Window>
        );
      }
    }

    Renderer.render(<App />, {
      onRender: () => {
        if (initialRender) {
          initialRender = false;
          return;
        }
      },
    });
  });
}

function verifyReorderMove() {
  const root = new RNSvg();
  root.setProps({ width: 100, height: 40, viewBox: "0 0 100 40" }, {});
  const a = createSvgElement("rect", { id: "a" });
  const b = createSvgElement("rect", { id: "b" });
  root.appendChild(a);
  root.appendChild(b);
  root.insertBefore(b, a);

  const svg = root.toSvgString();
  const countA = svg.split('id="a"').length - 1;
  const countB = svg.split('id="b"').length - 1;

  assert(countA === 1, "Reorder duplicated child a");
  assert(countB === 1, "Reorder duplicated child b");
  assert(
    svg.indexOf('id="b"') < svg.indexOf('id="a"'),
    "Reorder did not move child before sibling"
  );
  console.log("reorder-move: PASS");
}

async function main() {
  try {
    await verifyRootImport();
    await verifyReadmeShapes();
    await verifyLowercaseRect();
    await verifySvgText();
    await verifySvgContent();
    await verifySvgBuffer();
    await verifySvgSrc();
    await verifyAdjacentText();
    await verifyMixedTspan();
    await verifyMixedTextUpdate();
    verifyReorderMove();

    assert(warnings.length === 0, `Unexpected warnings: ${warnings.join(" | ")}`);
    console.log("svg-acceptance: PASS");
    process.exit(0);
  } catch (error) {
    const message = error instanceof Error ? error.stack || error.message : String(error);
    console.error("svg-acceptance: FAIL");
    console.error(message);
    if (failures.length > 0) {
      console.error(failures.join("\n"));
    }
    process.exit(1);
  } finally {
    closeAllWindows();
  }
}

void main();
