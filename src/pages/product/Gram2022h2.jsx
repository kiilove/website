import { blueGrey } from "@mui/material/colors";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  ZoomOut,
  Zoom,
  FadeOut,
} from "react-scroll-motion";

import { useParallax, ParallaxProvider } from "react-scroll-parallax";

import styled from "styled-components";
import { ImgBox, ItemBox, ItemRow } from "../../styles/Commons";
import { GridentText, GridentText2, Typotext } from "../../styles/Typotext";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

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
`;

const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
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

const ComponentRow = styled.div`
  display: flex;
`;

const Gram2022h2 = () => {
  return (
    <Container>
      <Wrapper>
        <ComponentContainer>
          <ComponentWrapper
            style={{ maxWidth: "none", padding: "0", gap: "30px" }}
          >
            <ComponentRow>
              <ItemBox style={{ margin: "30px 0px" }}>
                <Typotext
                  size="50px"
                  style={{ fontWeight: 600, color: blueGrey[900] }}
                >
                  LG 그램 2022 New
                </Typotext>
              </ItemBox>
            </ComponentRow>
            <ComponentRow
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ItemBox
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "30px 0px",
                }}
              >
                <ImgBox
                  src="/img/product/laptop/lg/detail/gram/gram2.png"
                  width="50%"
                />
              </ItemBox>
            </ComponentRow>
            <ComponentRow>
              <ItemBox>
                <Typotext
                  size="40px"
                  style={{ fontWeight: 600, color: blueGrey[900] }}
                >
                  이제 새로운 LG 그램을 만나야 할 시간
                </Typotext>
              </ItemBox>
            </ComponentRow>
            <ComponentRow>
              <ItemBox>
                <Typotext
                  size="40px"
                  style={{ fontWeight: 600, color: blueGrey[900] }}
                >
                  여전히 놀라운 가벼움.
                </Typotext>
              </ItemBox>
            </ComponentRow>
            <ComponentRow>
              <ItemBox>
                <Typotext
                  size="40px"
                  style={{ fontWeight: 600, color: blueGrey[900] }}
                >
                  더 놀라운 아름다움.
                </Typotext>
              </ItemBox>
            </ComponentRow>
            <ComponentRow>
              <ItemBox>
                <Typotext
                  size="40px"
                  style={{ fontWeight: 600, color: blueGrey[900] }}
                >
                  강력해진 퍼포먼스.
                </Typotext>
              </ItemBox>
            </ComponentRow>
            <ComponentRow>
              <ItemBox>
                <Typotext
                  size="40px"
                  style={{ fontWeight: 600, color: blueGrey[900] }}
                >
                  어디 한번 빠져 보실까요?.
                </Typotext>
              </ItemBox>
            </ComponentRow>
            <ComponentRow
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                margin: "30px 0px",
              }}
            >
              <ItemBox
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImgBox
                  src="/img/product/laptop/lg/detail/gram/gram1.png"
                  width="50%"
                />
              </ItemBox>
            </ComponentRow>
            <ComponentRow
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                margin: "30px 0px",
              }}
            >
              <ItemBox
                style={{
                  backgroundColor: blueGrey[900],
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <ItemRow style={{ marginTop: "200px" }}>
                  <Typotext
                    size="45px"
                    style={{ color: "white", fontWeight: 500 }}
                  >
                    새로운 표준의 주인이 되세요.
                  </Typotext>
                </ItemRow>
                <ItemRow style={{ margin: "150px 0px", gap: "150px" }}>
                  <ItemBox
                    style={{
                      flexDirection: "column",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ImgBox
                      src="/img/etc/evoi5.png"
                      width="150px"
                      style={{ marginBottom: "50px" }}
                    />
                    <GridentText size="30px" style={{ fontWeight: 700 }}>
                      4코어 프로세서
                    </GridentText>
                    <GridentText size="30px" style={{ fontWeight: 700 }}>
                      4.7GHz 동작속도
                    </GridentText>
                    <GridentText size="30px" style={{ fontWeight: 700 }}>
                      인텔® Iris® Xᵉ 그래픽
                    </GridentText>
                    <GridentText size="30px" style={{ fontWeight: 700 }}>
                      시스템과 하나된 메모리 16G
                    </GridentText>
                  </ItemBox>
                  <ItemBox
                    style={{
                      flexDirection: "column",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ImgBox
                      src="/img/etc/evoi7.png"
                      width="150px"
                      style={{ marginBottom: "50px" }}
                    />
                    <GridentText2 size="30px" style={{ fontWeight: 700 }}>
                      4코어 프로세서
                    </GridentText2>
                    <GridentText2 size="30px" style={{ fontWeight: 700 }}>
                      4.7GHz 동작속도
                    </GridentText2>
                    <GridentText2 size="30px" style={{ fontWeight: 700 }}>
                      인텔® Iris® Xᵉ 그래픽
                    </GridentText2>
                    <GridentText2 size="30px" style={{ fontWeight: 700 }}>
                      시스템과 하나된 메모리 16G
                    </GridentText2>
                  </ItemBox>
                </ItemRow>
              </ItemBox>
            </ComponentRow>
          </ComponentWrapper>
        </ComponentContainer>
      </Wrapper>
    </Container>
  );
};

export default Gram2022h2;
