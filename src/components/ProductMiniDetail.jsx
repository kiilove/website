import { Button, IconButton, Stack, Typography } from "@mui/material";
import { blueGrey, grey, lightBlue, blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 100%;
  font-family: "Noto Sans KR";
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100px;
  margin-top: 20px;
  margin-left: 10px;
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

const ActionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

const FavoriteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  box-sizing: border-box;
  margin-top: 20px;
`;

const ColorItem = styled.div`
  width: 25px;
  height: 25px;
  border: 0.5px solid ${grey[400]};
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 2px;
  cursor: pointer;
`;

const SelectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px !important;
  height: 40px;
  border-radius: 10px;
  background-color: ${blue[500]};
  font-family: "Noto Sans KR";
  font-size: 16px;
  color: white;
  transition: all ease-in-out 0.35s;

  &:hover {
    cursor: pointer;
    background-color: ${blue[700]};
  }
`;
const ProductMiniDetail = (props) => {
  return (
    <Container>
      <ImgWrapper>
        <img src={props.imgUrl} width="150px" />
      </ImgWrapper>
      <ColorWrapper>
        <Typography>블랙</Typography>
        <Stack spacing={1} direction={"row"} marginTop={1}>
          <ColorItem color="black"></ColorItem>
          <ColorItem color="black"></ColorItem>
        </Stack>
      </ColorWrapper>
      <SpecWrapper>
        <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 2 }}>
          Intel i5(4코어 8쓰레드 2.4GHz)
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
        <Typography
          variant="h5"
          sx={{ marginTop: 3, fontWeight: 700, color: blueGrey[800] }}
        >
          1,350,000원
        </Typography>
      </SpecWrapper>
      <ActionWrapper>
        <Link to="/orderPage" style={{ textDecoration: "none" }}>
          <SelectButton>선택</SelectButton>
        </Link>
      </ActionWrapper>
      <FavoriteWrapper>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              혹시 아직 고민되시나요?
            </Typography>
            <Typography variant="body2">
              이 제품을 목록에 추가후 나중에 다시 살펴보세요.
            </Typography>
          </Stack>
          <Box sx={{ width: 30 }}>
            <IconButton>
              <TurnedInNotIcon
                sx={{
                  fontSize: 25,
                  fontWeight: "light",
                  color: lightBlue[300],
                }}
              />
            </IconButton>
          </Box>
        </Stack>
      </FavoriteWrapper>
      <FavoriteWrapper>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "30px",
              }}
            >
              <Box>
                <ShoppingCartOutlinedIcon
                  sx={{
                    fontWeight: "light",
                    color: lightBlue[700],
                  }}
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box>
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    재고:
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    구매가능
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </FavoriteWrapper>
      <FavoriteWrapper>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "30px",
              }}
            >
              <Box>
                <HomeWorkOutlinedIcon
                  sx={{
                    fontWeight: "light",
                    color: lightBlue[700],
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    도착:
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    2022-03-30 ~ 2022-03-30
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </FavoriteWrapper>
    </Container>
  );
};

export default ProductMiniDetail;
