import React from 'react';
import {Pressable} from 'react-native';
import {Svg, Rect, Text} from 'react-native-svg';

export const ChartTooltip = ({ tooltip, handleVisibleTootilp }) => {

  return (
    <Pressable onPressIn={handleVisibleTootilp}>
      <Svg>
        <Rect
          x={tooltip.x}
          y={tooltip.y}
          width="80"
          height="30"
          fill="black"
        />
        <Text
          x={tooltip.x + 40}
          y={tooltip.y + 23}
          fill="white"
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle">
          {tooltip.value}
        </Text>
      </Svg>
    </Pressable>
  );
};
