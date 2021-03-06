import { blueGrey } from "@mui/material/colors";
import { useEffect } from "react";

import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

import styled from "styled-components";
import { ImgBox, ItemBox, ItemRow } from "../../styles/Commons";
import { GridentText, GridentText2, Typotext } from "../../styles/Typotext";

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

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const fadeUpAtView = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.6,
    },
  },
};

const fadeUpContainer = {
  offscreen: {
    opacity: 0,
    y: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.35,
    },
  },
  viewport: {
    once: true,
  },
};

const fadeUpItem = {
  offscreen: { opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};

const Gram2022h2 = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  console.log(scale);

  useEffect(() => {
    if (inView) {
      controls.start("onscreen");
    }

    if (!inView) {
      controls.start("offscreen");
    }
  }, [controls, inView]);

  return (
    <Container>
      <Wrapper>
        <ComponentContainer>
          <ComponentWrapper
            style={{ maxWidth: "none", padding: "0", gap: "30px" }}
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <ComponentRow style={{ width: "100%" }}>
                <motion.div variants={item} style={{ width: "100%" }}>
                  <ItemBox
                    style={{
                      margin: "30px 0px",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <Typotext
                      variants={item}
                      size="50px"
                      style={{ fontWeight: 600, color: blueGrey[900] }}
                    >
                      LG ?????? 2022 New
                    </Typotext>
                  </ItemBox>
                </motion.div>
              </ComponentRow>
            </motion.div>
            <ComponentRow
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "50px",
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
              <ItemBox
                style={{
                  width: "100%",

                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <motion.div
                  ref={ref}
                  initial="offscreen"
                  animate={controls}
                  viewport={{ once: true }}
                  whileInView="onscreen"
                  variants={fadeUpContainer}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <motion.div
                    variants={fadeUpItem}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typotext
                      size="40px"
                      style={{ fontWeight: 600, color: blueGrey[500] }}
                    >
                      ?????? ????????? LG ????????? ????????? ??? ??????
                    </Typotext>
                  </motion.div>
                  <motion.div
                    variants={fadeUpItem}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typotext
                      size="40px"
                      style={{ fontWeight: 600, color: blueGrey[500] }}
                    >
                      ????????? ????????? ?????????.
                    </Typotext>
                  </motion.div>
                  <motion.div
                    variants={fadeUpItem}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typotext
                      size="40px"
                      style={{ fontWeight: 600, color: blueGrey[500] }}
                    >
                      ??? ????????? ????????????.
                    </Typotext>
                  </motion.div>
                  <motion.div
                    variants={fadeUpItem}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typotext
                      size="40px"
                      style={{ fontWeight: 600, color: blueGrey[500] }}
                    >
                      ???????????? ????????????.
                    </Typotext>
                  </motion.div>
                  <motion.div
                    variants={fadeUpItem}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <GridentText
                      size="40px"
                      style={{ fontWeight: 600, color: blueGrey[500] }}
                    >
                      ?????? ?????? ?????? ?????????????.
                    </GridentText>
                  </motion.div>
                </motion.div>
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
                    ????????? ????????? ????????? ?????????.
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
                      width="250px"
                      style={{ marginBottom: "50px" }}
                    />
                    <GridentText size="30px" style={{ fontWeight: 700 }}>
                      4?????? ????????????
                    </GridentText>
                    <GridentText size="30px" style={{ fontWeight: 700 }}>
                      4.7GHz ????????????
                    </GridentText>
                    <GridentText size="30px" style={{ fontWeight: 700 }}>
                      ???????? Iris?? X??? ?????????
                    </GridentText>
                    <GridentText size="30px" style={{ fontWeight: 700 }}>
                      ???????????? ????????? ????????? 16G
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
                      width="250px"
                      style={{ marginBottom: "50px" }}
                    />
                    <GridentText2 size="30px" style={{ fontWeight: 700 }}>
                      4?????? ????????????
                    </GridentText2>
                    <GridentText2 size="30px" style={{ fontWeight: 700 }}>
                      4.7GHz ????????????
                    </GridentText2>
                    <GridentText2 size="30px" style={{ fontWeight: 700 }}>
                      ???????? Iris?? X??? ?????????
                    </GridentText2>
                    <GridentText2 size="30px" style={{ fontWeight: 700 }}>
                      ???????????? ????????? ????????? 16G
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
