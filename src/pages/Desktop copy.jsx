import React from "react";
import {
  blueGrey,
  grey,
  orange,
  deepOrange,
  yellow,
  lightGreen,
  cyan,
} from "@mui/material/colors";
import CallIcon from "@mui/icons-material/Call";

import styled from "styled-components";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ModelSlider from "../components/ModelSlider";
import ThumbHalf from "../components/Desktop/ThumbHalf";
import ItemSlider from "../components/Desktop/ItemSlider";
import ThumbHalfCustom from "../components/Desktop/ThumbHalfCustom";
import { sliderItems } from "../data";
import AccSlider from "../components/AccSlider";
import { mobile } from "../responsive";
import { Typotext } from "../styles/Typotext";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background-color: whitesmoke;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  margin-top: 30px;
  box-sizing: border-box;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  ${mobile({ flexDirection: "column", height: "100%", alignItems: "center" })}
`;

const TitleItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex: ${(props) => (props.flex ? props.flex : 1)};
`;

const TitleHelpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const TitleHelpIcon = styled.div``;
const TitleHelpText = styled.div``;
const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 500px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  justify-content: flex-start;
  align-items: flex-start;

  ${mobile({ overflowX: "scroll" })}
`;
const MenuItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 160px;
  height: 100%;
  color: ${grey[800]};
  font-size: 18px;
  font-weight: 500;
  font-family: "Noto Sans KR";
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: ${grey[700]};
  }

  ${mobile({ fontSize: "15px", justifyContent: "center", marginTop: "20px" })}
`;

const AllModelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px auto;
  margin-top: 40px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

const ModelTitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const ModelCardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  ${mobile({ flexDirection: "column" })}
`;

const ModelCardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  justify-content: fle;

  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;

const MenuData = [
  {
    id: 1,
    title: "????????????.",
    subTitle: "????????? ????????? ??????????",
    components: <ModelSlider />,
    isSlider: true,
  },
  {
    id: 2,
    title: "????????? ?????????",
    subTitle: "?????? ???????????? ????????? ?????????",
    components: (
      <>
        <div>
          <ThumbHalf
            theme={"light"}
            miniTitle={"?????? ?????? ??????"}
            title={"??????????????? ?????? ??????????"}
            img={"/img/etc/recommand.png"}
            imgWidth={"400px"}
          />
        </div>
        <div>
          <ThumbHalf
            theme={"dark"}
            miniTitle={"????????? ??????"}
            title={"??? ????????? ????????? ???????????????!"}
            img={"/img/etc/pc_custom_illust.png"}
            imgWidth={"300px"}
          />
        </div>
      </>
    ),
    isSlider: false,
  },
  {
    id: 3,
    title: "????????? ????????????",
    subTitle: "????????? ????????? ????????? ?????????",
    components: (
      <div>
        <ThumbHalfCustom
          bgColor={"#f7ae0b"}
          title={"???????????? ????????? ?????????!"}
          titleColor={grey["A200"]}
          img={"/img/etc/performance.png"}
          imgWidth={"100%"}
          imgHeight={"100%"}
          imgTopMargin={"50px"}
        />
      </div>
    ),
    isSlider: false,
  },
  {
    id: 4,
    title: "?????? ??????",
    subTitle: "?????? ????????? ?????? ???????????? ??????",
    components: (
      <div>
        <ThumbHalf
          theme={"light"}
          miniTitle={"?????? ?????? ??????"}
          title={"????????? ?????? ??????????????? ??????!"}
          img={"/img/etc/multiComputer.png"}
          imgWidth={"350px"}
        />
      </div>
    ),
    isSlider: false,
  },
  {
    id: 5,
    title: "????????????",
    subTitle: "",
    components: <ModelSlider />,
    isSlider: true,
  },
];
const Desktop = () => {
  console.log(sliderItems);
  return (
    <Container sx={{ fontFamily: "Noto Sans KR" }}>
      <Grid container>
        <Grid item xs={12}>
          <TitleWrapper>
            <TitleContainer>
              <TitleItem flex={3}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontFamily: "Noto Sans KR",
                    color: blueGrey[900],
                  }}
                >
                  ???????????? ????????????
                </Typography>
              </TitleItem>
              <TitleItem flex={2}>
                <TitleHelpContainer
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    <Avatar
                      src="/img/avatar/salesman.png"
                      sx={{ marginRight: 2, width: 46, height: 46 }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{
                        fontWeight: 500,
                        fontFamily: "Noto Sans KR",
                        color: blueGrey[900],
                      }}
                    >
                      ?????? ????????? ???????????????????
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{
                        fontWeight: 300,
                        fontFamily: "Noto Sans KR",
                        color: cyan[600],
                      }}
                    >
                      ???????????? ???????????????????????? ????????????
                    </Typography>
                  </Box>
                </TitleHelpContainer>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    <CallIcon
                      variant="rounded"
                      sx={{
                        marginRight: 2,
                        width: 26,
                        height: 26,
                        color: blueGrey[500],
                      }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{
                        fontWeight: 500,
                        fontFamily: "Noto Sans KR",
                        color: blueGrey[900],
                      }}
                    >
                      ?????? ????????? ????????????????
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{
                        fontWeight: 300,
                        fontFamily: "Noto Sans KR",
                        color: cyan[600],
                      }}
                    >
                      ???????????????
                    </Typography>
                  </Box>
                </Box>
              </TitleItem>
            </TitleContainer>
          </TitleWrapper>
        </Grid>
        <Grid item xs={12}>
          <MenuWrapper>
            <MenuContainer>
              <MenuItem>????????????</MenuItem>
              <MenuItem>????????? ?????????</MenuItem>
              <MenuItem>????????? ????????????</MenuItem>
              <MenuItem>?????? ??????</MenuItem>
              <MenuItem>????????????</MenuItem>
            </MenuContainer>
          </MenuWrapper>
        </Grid>
        <Grid item xs={12}>
          <AllModelWrapper>
            <ModelTitleWrapper
              width={"100%"}
              height={"100%"}
              maxWidth={"1200px"}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
            >
              <Typotext
                size={"22px"}
                gutterBottom
                style={{
                  fontWeight: 700,
                  color: blueGrey[900],
                }}
              >
                ?????? ??????.
              </Typotext>
              <Typotext
                size={"22px"}
                gutterBottom
                style={{
                  fontWeight: 700,
                  color: blueGrey[500],
                  marginLeft: 2,
                }}
              >
                ????????? ????????? ??????????
              </Typotext>
            </ModelTitleWrapper>
            <ModelCardWrapper>
              <ModelCardContainer>
                <ModelSlider />
              </ModelCardContainer>
            </ModelCardWrapper>
          </AllModelWrapper>
        </Grid>
        <Grid item xs={12}>
          <AllModelWrapper>
            <ModelTitleWrapper
              width={"100%"}
              height={"100%"}
              maxWidth={"1200px"}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              marginBottom={4}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[900],
                }}
              >
                ????????? ?????????.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[500],
                  marginLeft: 2,
                }}
              >
                ?????? ???????????? ????????? ?????????
              </Typography>
            </ModelTitleWrapper>
            <ModelCardWrapper
              width={"100%"}
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <ModelCardContainer>
                <>
                  <div>
                    <ThumbHalf
                      theme={"light"}
                      miniTitle={"?????? ?????? ??????"}
                      title={"??????????????? ?????? ??????????"}
                      img={"/img/etc/recommand.png"}
                      imgWidth={"400px"}
                    />
                  </div>
                  <div>
                    <ThumbHalf
                      theme={"dark"}
                      miniTitle={"????????? ??????"}
                      title={"??? ????????? ????????? ???????????????!"}
                      img={"/img/etc/pc_custom_illust.png"}
                      imgWidth={"300px"}
                    />
                  </div>
                </>
              </ModelCardContainer>
            </ModelCardWrapper>
          </AllModelWrapper>
        </Grid>
        <Grid item xs={12}>
          <AllModelWrapper>
            <Box
              width={"100%"}
              height={"100%"}
              maxWidth={"1200px"}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              marginBottom={4}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[900],
                }}
              >
                ????????? ????????????.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[500],
                  marginLeft: 2,
                }}
              >
                ????????? ????????? ????????? ?????????
              </Typography>
            </Box>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  width: "100%",
                  height: "100%",
                  maxWidth: "1200px",
                }}
              >
                <div>
                  <ThumbHalfCustom
                    bgColor={"#f7ae0b"}
                    title={"???????????? ????????? ?????????!"}
                    titleColor={grey["A200"]}
                    img={"/img/etc/performance.png"}
                    imgWidth={"100%"}
                    imgHeight={"100%"}
                    imgTopMargin={"50px"}
                  />
                </div>
              </Box>
            </Box>
          </AllModelWrapper>
        </Grid>
        <Grid item xs={12}>
          <AllModelWrapper>
            <Box
              width={"100%"}
              height={"100%"}
              maxWidth={"1200px"}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              marginBottom={4}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[900],
                }}
              >
                ????????????.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[500],
                  marginLeft: 2,
                }}
              >
                ?????? ????????? ?????? ???????????? ??????
              </Typography>
            </Box>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  width: "100%",
                  height: "100%",
                  maxWidth: "1200px",
                }}
              >
                <div>
                  <ThumbHalf
                    theme={"light"}
                    miniTitle={"?????? ?????? ??????"}
                    title={"????????? ?????? ??????????????? ??????!"}
                    img={"/img/etc/multiComputer.png"}
                    imgWidth={"350px"}
                  />
                </div>
              </Box>
            </Box>
          </AllModelWrapper>
        </Grid>
        <Grid item xs={12}>
          <AllModelWrapper>
            <Box
              width={"100%"}
              height={"100%"}
              maxWidth={"1200px"}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              marginBottom={4}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[900],
                }}
              >
                ????????????.
              </Typography>
            </Box>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  width: "100%",
                  height: "100%",
                }}
              >
                <AccSlider />
              </Box>
            </Box>
          </AllModelWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Desktop;
