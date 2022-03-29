import { Button, IconButton, Stack, Typography } from "@mui/material";
import { blueGrey, grey, lightBlue, blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typotext } from "../styles/Typotext";
import { ModelMiniSpec, ModelSpec } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-evenly;
  ${mobile({
    width: "100%",
    marginRight: "0px",
    justifyContent: "center",
    flexDirection: "column",
  })}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;
  ${mobile({
    marginBottom: "30px",
  })}
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
const SpecItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  width: 100%;
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
  width: 290px !important;
  height: 40px;
  border-radius: 10px;
  background-color: ${blue[500]};
  font-family: "Noto Sans KR";
  font-size: 15px;
  color: white;
  transition: all ease-in-out 0.35s;

  &:hover {
    cursor: pointer;
    background-color: ${blue[700]};
  }
`;
const ProductMiniDetail = (props) => {
  const modelData = ModelSpec.filter(
    (models) => models.category === props.category
  );
  console.log(modelData);

  return (
    <Container>
      {modelData.length > 0 && (
        <>
          {modelData.map((item, index) => (
            <Wrapper>
              <ImgWrapper>
                <img src={item.img} width="150px" />
              </ImgWrapper>
              {item.color.map((item, index) => (
                <ColorWrapper>
                  <Typography>{item.title}</Typography>
                  <Stack spacing={1} direction={"row"} marginTop={1}>
                    <ColorItem color={item.code}></ColorItem>
                  </Stack>
                </ColorWrapper>
              ))}

              <SpecWrapper>
                {item.spec.map((item, index) => (
                  <SpecItem key={index}>
                    {item.isThumb ? (
                      <Typotext
                        size="15px"
                        style={{
                          fontWeight: 500,
                          fontSize: "20px",
                          color: blueGrey[800],
                          marginBottom: "20px",
                        }}
                      >
                        {item.title}
                      </Typotext>
                    ) : (
                      <Typotext
                        size="15px"
                        style={{
                          fontWeight: 100,
                          color: blueGrey[600],
                          marginLeft: "10px",
                        }}
                      >
                        {item.title}
                      </Typotext>
                    )}
                  </SpecItem>
                ))}
                <SpecItem
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Typotext
                    size="25px"
                    style={{
                      fontWeight: 700,
                      color: blueGrey[800],
                      marginTop: "20px",
                    }}
                  >
                    {Number(item.price).toLocaleString()}원
                  </Typotext>
                </SpecItem>
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
            </Wrapper>
          ))}
        </>
      )}
    </Container>
  );
};

export default ProductMiniDetail;
