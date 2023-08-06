import { styled } from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #0765a7;
`;

export const LoadingContainer = styled.View`
  display: flex;
  background-color: #0765a7;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const BottomWhite = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  background-color: #fff;
  z-index: -1;
`;
