import styled from 'styled-components/native';

export const ChartContainer = styled.View`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  position: relative;
`;

export const ChartHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Chip = styled.View`
  background: rgba(37, 167, 219, 1);
  border-radius: 20px;
  align-items: center;
  padding: 5px;
`;

export const ChartFooter = styled.View``;

export const ModalBody = styled.Modal`
  background-color: #000;
  border-radius: 10px;
  width: 100px;
  height: 80px;
`;
