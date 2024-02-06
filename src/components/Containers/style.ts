import styled from "styled-components";

export const ContainerStyle = styled.div`
  width: 12rem;
  position: relative;
  padding: 2rem;
`;

export const ContainerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const ButtonTop = styled.button`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;
export const ButtonBottom = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;
export const ButtonLeft = styled.button`
  position: absolute;
  top: 50%;
  left: -50px;
  transform: translateY(-50%);
  z-index: 10;
`;
export const ButtonRight = styled.button`
  position: absolute;
  top: 50%;
  right: -50px;
  transform: translateY(-50%);
  z-index: 10;
`;
