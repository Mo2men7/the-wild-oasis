import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
  background: #eee;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Form</Heading>
        <Heading as="h3">Check in and out</Heading>
        <Input type="number" placeholder="nUuUmber" />
        <Button onClick={() => alert("lol")}>LOL</Button>
      </StyledApp>
    </>
  );
}

export default App;
