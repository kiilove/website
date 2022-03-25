import React, { createRef, useRef } from "react";
import styled from "styled-components";
import RadioButtonGroup from "react-custom-radio-buttons-group";
import { useEffect, useState } from "react";
import {
  Button,
  ButtonBase,
  debounce,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { blue, blueGrey, grey, lightBlue } from "@mui/material/colors";
import StickBox from "react-sticky-box";
import { OptionData, OptionItemData } from "../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
`;

const InfoWrapper = styled.div`
  display: flex;
`;
const ImgContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
const optionItemData = OptionItemData;
const optionData = OptionData;
const Order = () => {
  const [options, setOptions] = useState([OptionData]);

  const optionRef = useRef(optionItemData.map(() => createRef()));

  const handleRef = (index) => {
    console.log(optionRef.current[index]);
  };

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <StickBox offsetTop={20} offsetBottom={20}>
            <ImgBox>
              <img src="/img/product/pc/lg/b80gv_2022.png" width="280px" />
            </ImgBox>
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
              LG Tower B60GV
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
              사용자 맞춤 구성하기
            </Typography>
            <Typography variant="body" sx={{ marginTop: 1 }}>
              {JSON.stringify(options)}
            </Typography>
            <Typography variant="body" sx={{ marginTop: 1 }}>
              Intel Core i5 10400
            </Typography>
            <Typography variant="body" sx={{ marginTop: 1 }}>
              DDR4 8G 메모리
            </Typography>
            <Typography variant="body" sx={{ marginTop: 1 }}>
              256G SSD(NVMe) 저장공간
            </Typography>
            <Typography variant="body" sx={{ marginTop: 1 }}>
              1TB HDD(SATA) 추가 저장공간
            </Typography>
            <Typography variant="body" sx={{ marginTop: 1 }}>
              Intel Graphic GPU
            </Typography>
            <Typography variant="body" sx={{ marginTop: 1 }}>
              DVD Super Multi Drive
            </Typography>
            <Typography variant="body" sx={{ marginTop: 1 }}>
              108키 한영 키보드 / USB 마우스
            </Typography>
            <Typography variant="body" sx={{ marginTop: 1 }}>
              USB 2.0 포트 2개, USB 3.0 포트 4개
            </Typography>

            <Stack>
              <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
            </Stack>
            {optionItemData.map((item, index) => (
              <OptionItemWrapper>
                <input
                  type="radio"
                  id={`options_${item.refGroup}_${item.idx}`}
                  name={`options_${item.refGroup}`}
                  ref={optionRef.current[index]}
                  value={item.value}
                  onChange={console.log("OK")}
                  onClick={(e) => {
                    console.log(e.target.id);
                  }}
                  style={{ display: "none" }}
                  defaultChecked={index === 0}
                />
                <OptionItem htmlFor={`options_${item.refGroup}_${item.idx}`}>
                  <label
                    style={{
                      fontWeight: 700,
                      fontFamily: "Noto Sans KR",
                      color: blueGrey[900],
                    }}
                  >
                    {item.title}
                  </label>
                </OptionItem>
              </OptionItemWrapper>
            ))}
          </SelectWrapper>
        </SelectContainer>
      </Wrapper>
      <InfoWrapper>1</InfoWrapper>
    </Container>
  );
};

export default Order;
