import React from "react";
import { Image } from "@nodegui/react-nodegui";
import path from "path";
import { AspectRatioMode } from "@nodegui/nodegui";

const rootDir = path.resolve(__dirname, "../..");
const assetUrl = path.resolve(rootDir, "src/assets/icons");

type WeatherIconProps = {
  icon: string;
  [key: string]: any;
};
export const WeatherIcon = React.memo<WeatherIconProps>(props => {
  const iconId = props.icon || "na";
  const imageUrl = `${path.resolve(assetUrl, `${iconId}.png`)}`;
  return (
    <Image
      {...props}
      src={imageUrl}
      aspectRatioMode={AspectRatioMode.KeepAspectRatio}
    />
  );
});
