import React, { useRef } from "react";
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
import { OptionData } from "../data";

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
`;

const OptionItem = styled.button`
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
  &:hover {
    border: 0.5px solid ${grey[700]};
    cursor: pointer;
  }
`;

const Order = () => {
  const [options, setOptions] = useState([OptionData]);
  const OptionRef = useRef([]);

  const handleRef = (props) => {
    console.log(OptionRef.current[props].value);
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
            {OptionData.map((item, index) => (
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
                {item.options.map((items, index2) => (
                  <OptionItemWrapper id={items.index2}>
                    <OptionItem
                      name={items.idx}
                      value={items.value}
                      ref={OptionRef[index2]}
                      // onClick={() =>
                      //   console.log(
                      //     item.options.map((item, index) => item.checked)
                      //   )
                      // }
                      onClick={handleRef(index2)}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontFamily: "Noto Sans KR",
                          color: blueGrey[900],
                        }}
                      >
                        {items.title}
                      </Typography>
                    </OptionItem>
                  </OptionItemWrapper>
                ))}
              </OptionWrapper>
            ))}
          </SelectWrapper>
        </SelectContainer>
      </Wrapper>
      <InfoWrapper>1</InfoWrapper>
    </Container>
  );
};

export default Order;
