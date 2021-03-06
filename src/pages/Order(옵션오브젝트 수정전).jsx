import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { debounce, Divider, Stack, Typography } from "@mui/material";
import { blueGrey, grey, lightBlue } from "@mui/material/colors";
import StickBox from "react-sticky-box";
import { ModelSpec, OptionData, OptionItemData, RadarData } from "../data";
import OrderFooter from "./OrderFooter";
import { Box } from "@mui/system";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { mobile } from "../responsive";
import { useParams } from "react-router-dom";
import { Typotext } from "../styles/Typotext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 114.5%;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin-top: 50px;
  ${mobile({ flexDirection: "column", boxSize: "border-box", width: "95%" })}
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;
const ImgContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const SpecWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin-top: 20px;
  margin-left: 10px;
`;
const SpecItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  width: 100%;
`;
const SelectContainer = styled.div`
  display: flex;
  flex: 1;
`;

const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

const OptionItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input[type="radio"]:checked + label {
    border: 2px solid ${lightBlue[700]};
  }
`;

const OptionItem = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 70px;
  background-color: white;
  border: ${(props) =>
    props.selected ? `0.5px solid ${grey[300]}` : `0.5px solid ${grey[300]}`};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: 700;
  font-family: "Noto Sans KR";
  color: ${blueGrey[900]};
  &:hover {
    border: 0.5px solid ${grey[700]};
  }
`;

const DetailImgBox = styled.img`
  ${mobile({ width: "100%" })}
`;
const BottomMenuContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 30px;
  background-color: ${grey[100]};
`;

const BottomMenuWrapper = styled.div`
  position: relative;
  width: 1000px;
  height: 150px;
  display: flex;
`;

const optionItemData = OptionItemData;
const optionData = OptionData;
const Order = () => {
  const { modelId, modelPrice } = useParams();
  const modelSpec = ModelSpec.filter(
    (model) => model.id === Number(modelId)
  ).slice(0, 1);
  const [initialPrice, setInitialPrice] = useState(() => Number(modelPrice));
  const [optionsObj, setOptionsObj] = useState({ options_1: 0 });
  const [optionsObjId, setOptionsObjId] = useState({ options_1_id: 0 });
  const [totalPrice, setTotalPrice] = useState(() => Number(modelPrice));
  const [sumOptionsPrice, setSumOptionsPrice] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = debounce(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, 500);

  const calOptionsPrice = () => {
    setSumOptionsPrice(() => Object.values(optionsObj).reduce((a, b) => a + b));
  };

  useEffect(() => {
    calOptionsPrice();
  }, [optionsObj]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    setTotalPrice(() => initialPrice + sumOptionsPrice);
  }, [sumOptionsPrice]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(optionsObj);
  return (
    <>
      <Container>
        <Wrapper>
          <ImgContainer>
            <StickBox offsetTop={20} offsetBottom={20}>
              <ImgBox>
                <img src={modelSpec[0].img} width="280px" />
              </ImgBox>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginY: 3,
                  color: lightBlue[900],
                }}
              >
                ???????????????
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginY: 3,
                  color: lightBlue[900],
                }}
              ></Box>
            </StickBox>
          </ImgContainer>
          <SelectContainer>
            <SelectWrapper>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[900],
                }}
              >
                {modelSpec[0].modelName}
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[900],
                }}
              >
                ????????? ?????? ????????????
              </Typography>

              <SpecWrapper>
                {modelSpec[0].spec.map((item, index) => (
                  <SpecItem key={index}>
                    <Typotext
                      size="15px"
                      style={{
                        fontWeight: 300,
                        color: blueGrey[800],
                        marginLeft: "10px",
                      }}
                    >
                      {item.title}
                    </Typotext>
                  </SpecItem>
                ))}
              </SpecWrapper>

              <Stack>
                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
              </Stack>

              {modelSpec[0].options.map((item, index) => (
                <OptionWrapper id={index}>
                  <Typography
                    variant="body"
                    sx={{
                      fontWeight: 700,
                      fontFamily: "Noto Sans KR",
                      color: blueGrey[900],
                    }}
                  >
                    {item.groupTitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 300,
                      fontFamily: "Noto Sans KR",
                      color: lightBlue[700],
                      marginTop: 1,
                      marginBottom: 2,
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    {item.subComment}
                  </Typography>
                  {item.options.map((option, idx) => (
                    <OptionItemWrapper>
                      <input
                        type="radio"
                        id={`options_${option.idx}`}
                        name={`options_${item.id}`}
                        value={option.value}
                        style={{ display: "none" }}
                        defaultChecked={idx === 0}
                        onChange={(e) => {
                          setOptionsObj({
                            ...optionsObj,
                            ["options_" + item.id]: Number(e.target.value),
                          });
                        }}
                      />
                      <OptionItem htmlFor={`options_${option.idx}`}>
                        {option.title} + {Number(option.value).toLocaleString()}
                        ???
                      </OptionItem>
                    </OptionItemWrapper>
                  ))}
                </OptionWrapper>
              ))}
            </SelectWrapper>
          </SelectContainer>
        </Wrapper>
        <Stack width={"100%"} sx={{ marginY: 2 }}>
          <Divider />
        </Stack>
        <InfoWrapper>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginY: 5,
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontFamily: "Noto Sans KR", fontWeight: 500 }}
            >
              ?????? ??????
            </Typography>
          </Box>
          <DetailImgBox
            src="/img/product/pc/lg/b80gv_2022_info.png"
            width="900px"
          />
        </InfoWrapper>
        <OrderFooter totalPrice={totalPrice} />
      </Container>
    </>
  );
};

export default Order;
