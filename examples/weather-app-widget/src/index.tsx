import {
  Renderer,
  Window,
  View,
  Button,
  useEventHandler
} from "@nodegui/react-desktop";
import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  QMainWindow,
  WidgetAttribute,
  WindowType,
  QApplication,
  QPushButtonEvents
} from "@nodegui/nodegui";
import os from 'os';
import { getCurrentWeather } from "./utils/weather";
import { WeatherIcon } from "./components/WeatherIcon";
import { TemperatureBox } from "./components/TemperatureBox";
import { Summary } from "./components/Summary";
import { PlaceDate } from "./components/PlaceDate";

const App = () => {
  const winRef = useRef<QMainWindow>(null);
  const [weather, setWeather] = useState<WeatherData>(defaultState);
  useEffect(() => {
    if (winRef.current) {
      const win = winRef.current;
      initWindow(win);
    }
    getWeather();
  }, []);

  const getWeather = useCallback(async () => {
    try {
      const data = await getCurrentWeather();
      setWeather(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const summary = weather.weather[0] || {};
  const refreshHandler = useEventHandler(
    {
      [QPushButtonEvents.clicked]: async () => {
        setWeather(defaultState);
        await getWeather();
      }
    },
    []
  );
  const quitHandler = useEventHandler(
    {
      [QPushButtonEvents.clicked]: () => {
        QApplication.instance().quit();
      }
    },
    []
  );

  return (
    <Window id="win" ref={winRef} styleSheet={stylesheet}>
      <View id="container">
        <WeatherIcon icon={summary.icon} id="image" />
        <View id="details">
          <Summary title={summary.main} description={summary.description} />
          <View style={midBox}>
            <TemperatureBox
              now={weather.main.temp}
              max={weather.main.temp_max}
              min={weather.main.temp_min}
            />
            <PlaceDate place={weather.name} date={new Date()} />
          </View>
          <View style={buttonBox}>
            <Button on={refreshHandler} text={"Refresh"} />
            <Button on={quitHandler} text={"Close"} />
          </View>
        </View>
      </View>
    </Window>
  );
};

const stylesheet = `
  #win {
    background-color: transparent;
  }
  #container {
    height: '100%';
  }
  #details {
    flex: 1;
    padding: 10px;
    justify-content: 'space-around';
    background-color: qlineargradient( x1:0 y1:0, x2:0 y2:1, stop:0 rgba(32,65,106,0.6), stop:1 rgba(8,8,8,0.6));
    border-radius: 5px;
  }
  #image {
    flex: 2;
    qproperty-alignment: 'AlignCenter';
    margin-right: '10%';
  }
`;

const midBox = `
    margin-vertical: 10px;
    flex-direction: 'row';
`;

const buttonBox = `
    flex-direction: 'row';
    justify-content: 'center';
`;

const initWindow = (win: QMainWindow) => {
  win.hide(); //https://forum.qt.io/topic/60642/framelesswindowhint-fails-at-runtime-on-mainwindow
  win.resize(300, 300);

  win.setWindowFlag(WindowType.FramelessWindowHint, true);
  win.setWindowFlag(WindowType.Widget, true);
  if (os.platform() === "darwin") {
    win.setAttribute(WidgetAttribute.WA_TranslucentBackground, true);
  }
  win.show();
};

type Weather = {
  main: string;
  description: string;
  icon: string;
};
type WeatherData = {
  weather: Weather[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  name: string;
};

const defaultState = {
  weather: [],
  main: {
    temp: 0,
    temp_min: 0,
    temp_max: 0
  },
  name: "NA"
};

Renderer.render(<App />, {
  onRender: () => {
    console.log("Yo");
  },
  enableDevtools: true
});
