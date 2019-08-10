import React from "react";
import { Image } from "../../../src/index";
import path from "path";
import { AspectRatioMode } from "@nodegui/nodegui";

const assetUrl =
  "/Users/atulr/Project/personal/react-desktop/examples/weather-widget/assets/icons";

type WeatherIconProps = {
  icon: string;
};
export const WeatherIcon = React.memo<WeatherIconProps>(props => {
  const iconId = props.icon || "na";
  const imageUrl = `${path.resolve(assetUrl, `${iconId}.png`)}`;
  return (
    <Image src={imageUrl} aspectRatioMode={AspectRatioMode.KeepAspectRatio} />
  );
});
