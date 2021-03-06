import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../../data";
import { Button, Paper, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${grey[500]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.4;
  z-index: 2;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 30px;
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -20}vw);
`;

const Slide = styled.div`
  width: 480px;
  height: 500px;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${grey["A100"]};
  margin: 0px 10px;
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

const SlideWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

const SlideTitle = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SlideHidden = styled.div`
  width: 315px;
  height: 300px;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Image = styled.img`
  height: 180px;
`;

const ColorWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-bottom: 10px;
`;

const ColorItem = styled.div`
  width: 22px;
  height: 22px;
  border: 0.5px solid ${grey[400]};
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 2px;
  cursor: pointer;
`;

const FooterWrapper = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;
`;

const FooterPriceWrapper = styled.div`
  display: flex;
`;

const FooterActionWrapeer = styled.div`
  display: flex;
`;

const ItemSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (props) => {
    if (props === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      {slideIndex === 0 ? (
        <></>
      ) : (
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <KeyboardArrowLeftIcon sx={{ fontSize: 52, color: grey[100] }} />
        </Arrow>
      )}

      <Wrapper slideIndex={slideIndex}>
        <SlideHidden></SlideHidden>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <SlideWrapper>
              <SlideTitle>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontFamily: "Noto Sans KR",
                    color: blueGrey[900],
                  }}
                >
                  {item.title}
                </Typography>
              </SlideTitle>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>

              <ColorWrapper>
                {item.color.map((item2, index) => (
                  <>
                    <ColorItem color={item2} />
                  </>
                ))}
              </ColorWrapper>
              <FooterWrapper>
                <FooterPriceWrapper>
                  <Typography variant="body">
                    {item.price.toLocaleString()}??? ??????
                  </Typography>
                </FooterPriceWrapper>
                <FooterActionWrapeer>
                  <Button variant="outlined">????????????</Button>
                </FooterActionWrapeer>
              </FooterWrapper>
            </SlideWrapper>
          </Slide>
        ))}
      </Wrapper>
      {slideIndex === sliderItems.length - 2 ? (
        <></>
      ) : (
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <KeyboardArrowRightIcon sx={{ fontSize: 52, color: grey[100] }} />
        </Arrow>
      )}
    </Container>
  );
};

export default ItemSlider;
