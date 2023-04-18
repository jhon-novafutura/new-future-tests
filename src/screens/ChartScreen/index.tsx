import React, {useState} from 'react';
import {Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
// import {TChartTest} from './types';
import {
  ChartContainer,
  ChartHeader,
  Chip,
  ChartFooter
} from './styles';
import {lineData, chartConfig, styles} from './data';
import {ChartTooltip} from './Tooltip';

export const ChartTest = () => {
  const [parentWidth, setParentWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [tooltip, setTooltip] = useState({
    x: 0,
    y: 0,
    value: 0
  });

  function handleVisibleTootilp(
    x: number,
    y: number,
    value: number,
    dataset: any
  ) {
    setIsVisible(!isVisible);
    setTooltip({
      x: x,
      y: y,
      value: value
    });
    console.log(dataset.data);
    console.log(isVisible);
  }

  console.log(tooltip);
  return (
    <ChartContainer
      onLayout={({nativeEvent}) => setParentWidth(nativeEvent.layout.width)}>
      <ChartHeader>
        <Text style={{ fontSize: 14, fontWeight: 600 }}>
          Renda Fixa
        </Text>
        <Chip>
          <Text style={{ fontSize: 12, color: '#fff' }}>12%</Text>
        </Chip>
      </ChartHeader>
      <LineChart
        bezier
        data={lineData}
        width={parentWidth}
        style={styles}
        height={119}
        chartConfig={chartConfig}
        withDots={true}
        withInnerLines={false}
        withOuterLines={false}
        withVerticalLabels={false}
        withHorizontalLabels={false}
        decorator={() => isVisible && <ChartTooltip tooltip={tooltip} handleVisibleTootilp={handleVisibleTootilp} />}
        onDataPointClick={({value, x, y, dataset}) =>
          handleVisibleTootilp(value, x, y, dataset)
        }
      />
      <ChartFooter>
        <Text style={{ fontSize: 20, fontWeight: 600 }}>R$ 2000,00</Text>
        <Text style={{ fontSize: 14 }}>20% do patrimônio</Text>
      </ChartFooter>
    </ChartContainer>
  );
};
