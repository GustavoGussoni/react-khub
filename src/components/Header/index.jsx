import { BttSecondary } from "../Button";
import { Header } from "./style";

export const CompHeader = ({ onClick, text }) => {
  return (
    <Header>
      <h1>Kenzie Hub</h1>
      <BttSecondary
        colorBg="--grey2"
        onClick={onClick}
        color="--grey3"
        fontColor="--grey0"
      >
        {text}
      </BttSecondary>
    </Header>
  );
};
