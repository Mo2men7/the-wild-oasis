import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: purple;
`;

const StyledApp = styled.main`
  background: #eee;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Input type="number" placeholder="nUuUmber" />
        <Button onClick={() => alert("lol")}>LOL</Button>
      </StyledApp>
    </>
  );
}

export default App;
