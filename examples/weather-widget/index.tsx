import { Renderer, Window } from "../../src/index";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { QMainWindow, WidgetAttribute, WindowType } from "@nodegui/nodegui";
import { getCurrentWeather } from "./services/weather";
import { WeatherIcon } from "./components/WeatherIcon";

const windowAttribures = [
  WidgetAttribute.WA_TranslucentBackground
  // WidgetAttribute.WA_NoSystemBackground
  // WidgetAttribute.WA_TransparentForMouseEvents
];
const windowFlags: WindowType[] = [
  // WindowType.FramelessWindowHint
];

const App = () => {
  const winRef = useRef<QMainWindow>(null);
  const [weather, setWeather] = useState({
    icon: "na"
  });
  useEffect(() => {
    if (winRef.current) {
      winRef.current.resize(800, 450);
    }
    getWeather();
  }, []);

  const getWeather = useCallback(async () => {
    try {
      const data = await getCurrentWeather();
      const weatherData = data.weather[0];
      setWeather({ icon: "01d" });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Window
      id="win"
      attributes={windowAttribures}
      windowFlags={windowFlags}
      ref={winRef}
    >
      <WeatherIcon icon={weather.icon} />
    </Window>
  );
};

const styleSheet = `
 
`;

Renderer.render(<App />, {
  onRender: () => {
    console.log("Yo");
  },
  enableDevtools: true
});
