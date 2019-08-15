import React from "react";
import { View, Text } from "@nodegui/react-nodegui";
import { dateFormatter } from "../utils/helpers";

type PlaceDateProps = {
  place: string;
  date: Date;
};
export const PlaceDate: React.FC<PlaceDateProps> = props => {
  return (
    <View style={containerStyle}>
      <Text style={placeStyle}>{props.place}</Text>
      <Text style={dateStyle}>{dateFormatter(props.date)}</Text>
    </View>
  );
};

const placeStyle = `
    flex: 1;
    font-size: 20px; 
    qproperty-alignment: 'AlignCenter';
    color: white;
`;

const dateStyle = `
    flex: 1;
    font-size: 12px;
    qproperty-alignment: 'AlignCenter';
    color: white;
`;

const containerStyle = `
    flex: 1;
`;
