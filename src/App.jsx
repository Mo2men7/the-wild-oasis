import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  background: #eee;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Heading as="h1">The Wild Oasis</Heading>
          <div>
            <Heading as="h2">Form</Heading>
            <Heading as="h3">Check in and out</Heading>
            <form>
              <Input type="number" placeholder="nUuUmber" />
              <Button onClick={() => alert("lol")}>Check in</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("lol")}
              >
                Check out
              </Button>
            </form>
          </div>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
