import React from "react";
import { View, Text } from "@nodegui/react-nodegui";

type TempProps = {
  now: number;
  min: number;
  max: number;
};
export const TemperatureBox: React.FC<TempProps> = props => {
  return (
    <View style={temperatureBoxStyle}>
      <Text style={currentTempStyle}>{`${props.now} <sup>o</sup>C`}</Text>
      <View style={smallBox}>
        <Text style={smallInfo}>{`${props.min} <sup>o</sup>C / ${
          props.max
        } <sup>o</sup>C`}</Text>
      </View>
    </View>
  );
};

const currentTempStyle = `
    font-size: 20px; 
    width: 100px;
    qproperty-alignment: AlignCenter;
    color: white;
`;

const temperatureBoxStyle = `
    border-right: 1px solid white;
    flex: 1;
    align-items: 'center';
    justify-content: 'center';
`;

const smallBox = `
    flex-direction: 'row';
    align-items: 'center';
    justify-content: 'center';
`;

const smallInfo = `
    width: 150px;
    color: white;
    qproperty-alignment: AlignCenter;
`;
