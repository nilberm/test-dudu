import styled from "styled-components";

interface gridContainerProps {
  scenarioSelected: string;
}

export const GridContainers = styled.div<gridContainerProps>`
  display: grid;
  grid-gap: 1rem;

  .container-0 {
    grid-area: a0;
  }

  .container-1 {
    grid-area: a1;
  }
  .container-2 {
    grid-area: a2;
  }
  .container-3 {
    grid-area: a3;
  }
  .container-4 {
    grid-area: a4;
  }
  .container-5 {
    grid-area: a5;
  }
  .container-6 {
    grid-area: a6;
  }
  .container-7 {
    grid-area: a7;
  }
  .container-8 {
    grid-area: a8;
  }

  /* Ajuste do grid com base na seleção */

  ${(props) =>
    props.scenarioSelected === "0" &&
    `
    grid-template-areas:
    "a0 a1 a2"
    "a3 a4 a5"
    "a6 a7 a8";
  `}

  ${(props) =>
    props.scenarioSelected === "1" &&
    `
    grid-template-areas:
    "a0 a0 a2"
    "a3 a4 a5"
    "a6 a7 a8";

  `} 

${(props) =>
    props.scenarioSelected === "2" &&
    `
    grid-template-areas:
    "a0 a0 a0"
    "a3 a4 a5"
    "a6 a7 a8";

  `}

${(props) =>
    props.scenarioSelected === "3" &&
    `
    grid-template-areas:
    "a0 a1 a2"
    "a0 a4 a5"
    "a6 a7 a8";

  `}

${(props) =>
    props.scenarioSelected === "4" &&
    `
    grid-template-areas:
    "a0 a1 a2"
    "a0 a4 a5"
    "a0 a7 a8";

  `}
`;

export const ContainerContent = styled.div`
  display: grid;
`;
