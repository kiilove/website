import { blueGrey } from "@mui/material/colors";
import styled from "styled-components";
import Scene1 from "./scenes/Scene1";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: inherit;
`;

const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const ComponentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  background-color: inherit;
  box-sizing: border-box;
  padding: 30px;
`;

const Gram2022h2Index = () => {
  return (
    <Container>
      <Wrapper>
        <ComponentContainer>
          <ComponentWrapper style={{ maxWidth: "none", padding: "0px" }}>
            <Scene1 />
          </ComponentWrapper>
        </ComponentContainer>
      </Wrapper>
    </Container>
  );
};

export default Gram2022h2Index;
