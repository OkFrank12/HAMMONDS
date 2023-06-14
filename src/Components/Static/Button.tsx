import styled from "styled-components";

interface iBtn {
  bg?: string;
  clr?: string;
  jcc?: string;
  w?: string;
  title?: string;
}

const Button: React.FC<iBtn> = ({ title, bg, clr, w, jcc }) => {
  return (
    <div>
      <Container bg={`${bg}`} clr={`${clr}`} w={`${w}`} jcc={`${jcc}`}>
        <Main>{title}</Main>
      </Container>
    </div>
  );
};

export default Button;

const Container = styled.div<{
  bg: string;
  w: string;
  clr: string;
  jcc: string;
}>`
  width: ${({ w }) => w};
  transition: all 500ms ease-in-out;
  height: 40px;
  color: ${({ clr }) => clr};
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: ${({ jcc }) => jcc};
  border-radius: 20px;
  align-items: center;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Main = styled.div``;
