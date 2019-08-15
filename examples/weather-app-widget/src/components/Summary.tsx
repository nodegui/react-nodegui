import React from "react";
import { View, Text } from "@nodegui/react-nodegui";

type SummaryProps = {
  title: string;
  description: string;
};
//https://doc.qt.io/qt-5/04-qdoc-commands-textmarkup.html
export const Summary: React.FC<SummaryProps> = props => {
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{`<b>${props.title}</b>: <i>${
        props.description
      }</i>.`}</Text>
    </View>
  );
};

const containerStyle = `
    align-items: 'center';
`;

const textStyle = `
  color: white;
`;
