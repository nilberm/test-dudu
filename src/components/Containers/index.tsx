import {
  ButtonBottom,
  ButtonLeft,
  ButtonRight,
  ButtonTop,
  ContainerContent,
  ContainerStyle,
} from "./style";

interface ContainerProps {
  children?: React.ReactNode;
  position?: number;
}
export default function Container(props: ContainerProps) {
  const { position, children } = props;

  const renderButtons = () => {
    switch (position) {
      case 0:
        return (
          <>
            <ButtonLeft>Left</ButtonLeft>
            <ButtonBottom>Bottom</ButtonBottom>
          </>
        );
      case 1:
        return (
          <>
            <ButtonRight>Right</ButtonRight>
            <ButtonLeft>Left</ButtonLeft>
            <ButtonBottom>Bottom</ButtonBottom>
          </>
        );
      case 2:
        return (
          <>
            <ButtonRight>Right</ButtonRight>
            <ButtonBottom>Bottom</ButtonBottom>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ContainerStyle>
      {renderButtons()}
      <ContainerContent>{children}</ContainerContent>
    </ContainerStyle>
  );
}
