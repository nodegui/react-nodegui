import React from "react";
import { SplitView } from "./SplitView";
import styled from "styled-components";

const Image = styled.img`
  max-height: 300px;
  padding-bottom: 40px;
`;

export const CreateNativeApps = () => {
  const ColumnOne = () => {
    return <Image src="/img/demo.png" />;
  };
  const ColumnTwo = () => {
    return (
      <div>
        <h3>
          Create native apps for Windows, MacOs and Linux using React and CSS
        </h3>

        <p>
          lets you create truly native apps and doesn't compromise on your
          users' experience. It provides a core set of platform agnostic native
          widgets that map directly to the platform’s native UI building blocks.
        </p>

        <p>
          React NodeGui widgets are built on top of{" "}
          <a href="https://www.qt.io/" target="_blank">
            Qt
          </a>{" "}
          which is a mature dekstop apps framework. React NodeGui components are
          extremely customizable just like in the web but does{" "}
          <strong>NOT</strong> use a Web browser under the hood.
        </p>
      </div>
    );
  };
  return (
    <SplitView
      columnTwoClass={"text"}
      columnOne={<ColumnOne />}
      columnTwo={<ColumnTwo />}
    />
  );
};
