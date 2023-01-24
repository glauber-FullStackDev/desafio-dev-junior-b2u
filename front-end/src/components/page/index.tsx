import { Card } from "../Card";
import * as S from "./styles";

interface IdCardProps {
  state: { idState: string };
  setState: React.Dispatch<React.SetStateAction<{ idState: string }>>;
}

export const Home = ({ state, setState }: IdCardProps) => {
  return (
    <S.Container>
      <Card state={state} setState={setState} />
    </S.Container>
  );
};
