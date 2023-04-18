import React from 'react';
import {View} from 'react-native';
import {Svg, Rect, Text} from 'react-native-svg';

export const ChartTooltip = ({ tooltip }) => {

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      <Svg>
        <Rect
          x={tooltip.x - 15}
          y={tooltip.y + 10}
          width="200"
          height="30"
          fill="black"
        />
        <Text
          x={tooltip.x + 50}
          y={tooltip.y + 30}
          fill="white"
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle">
          {tooltip.value}
        </Text>
      </Svg>
    </View>
  );
};
