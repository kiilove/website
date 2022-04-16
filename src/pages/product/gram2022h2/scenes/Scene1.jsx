import React from "react";
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { Container, Wrapper } from "../../layouts/CommonStyled";
import { Typotext } from "../../../../styles/Typotext";
import { blueGrey } from "@mui/material/colors";
import { Opacity } from "@mui/icons-material";
import { ImgBox, ItemBox } from "../../../../styles/Commons";

const Scene1 = () => {
  return (
    <Container>
      <Wrapper>
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1.6,
            },
          }}
        >
          <Typotext
            size="50px"
            style={{ fontWeight: 600, color: blueGrey[100] }}
          >
            LG 그램 2022
          </Typotext>
        </motion.div> */}
        <motion.div style={{ width: "100%" }}>
          <ItemBox
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              margin: "0px 0px",
            }}
          >
            <video
              autoplay="autoplay"
              muted="muted"
              src="/video/pc_gram16_w_kv.webm"
              width="100%"
            />
          </ItemBox>
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default Scene1;
