import { Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 500px;
  height: 100%;
  width: 100%;
  margin-right: 20px;
`;

const Canvas = styled.div`
  width: 450px;
  height: 500px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${grey[50]};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  transition: all ease-in-out 0.5s;
  &:hover {
    cursor: pointer;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform: scale(1.02);
    transition: all ease-in-out 0.7s;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const MiniTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: flex-start;
`;
const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  align-items: flex-end;
  justify-content: flex-end;
`;

const ThumbHalf = (props) => {
  return (
    <>
      {props.theme === "light" ? (
        <Container>
          <Canvas>
            <Wrapper>
              {props.miniTitle && (
                <MiniTitleWrapper>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontFamily: "Noto Sans KR",
                      color: blueGrey[600],
                    }}
                  >
                    {props.miniTitle}
                  </Typography>
                </MiniTitleWrapper>
              )}

              <TitleWrapper>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontFamily: "Noto Sans KR",
                    color: blueGrey[900],
                  }}
                >
                  {props.title}
                </Typography>
              </TitleWrapper>
              <ImgWrapper>
                <img src={props.img} width={props.imgWidth} />
              </ImgWrapper>
            </Wrapper>
          </Canvas>
        </Container>
      ) : (
        <Container>
          <Canvas style={{ backgroundColor: blueGrey[900] }}>
            <Wrapper>
              <MiniTitleWrapper>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontFamily: "Noto Sans KR",
                    color: blueGrey[100],
                  }}
                >
                  {props.miniTitle}
                </Typography>
              </MiniTitleWrapper>
              <TitleWrapper>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontFamily: "Noto Sans KR",
                    color: grey[200],
                  }}
                >
                  {props.title}
                </Typography>
              </TitleWrapper>
              <ImgWrapper>
                <img src={props.img} width={props.imgWidth} />
              </ImgWrapper>
            </Wrapper>
          </Canvas>
        </Container>
      )}
    </>
  );
};

export default ThumbHalf;
