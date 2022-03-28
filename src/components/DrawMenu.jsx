import { blueGrey, grey } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";
import jncoreWhite from "../img/logo/jncoreWhite.png";
import { MenuArray } from "../data";
import { Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { Box } from "@mui/system";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${blueGrey[900]};
  overflow: hidden;
`;

const MenuWrapper = styled.div`
  display: flex;
`;

const MenuItem = styled.div``;

const DrawMenu = ({ anchor, toggleDrawer }) => {
  return (
    <Container>
      <Stack
        width={"100%"}
        height={"100%"}
        sx={{
          backgroundColor: blueGrey[900],
          overflow: "hidden",
          boxSizing: "border-box",
          paddingX: "15px",
          justifyContent: "flex-start",
        }}
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          sx={{
            width: "100%",
            padding: "15px",
            height: "40px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flex: 1,
            }}
          >
            <HighlightOffOutlinedIcon
              sx={{ fontSize: 25, color: grey[100] }}
              onClick={toggleDrawer(anchor, false)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <img
              src={jncoreWhite}
              width="50px"
              style={{ marginRight: "8px" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flex: 1,
            }}
          ></Box>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            width: "100%",
            padding: "15px",
            height: "40px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <input
              type="text"
              placeholder="검색"
              style={{
                borderRadius: "10px",
                backgroundColor: blueGrey[600],
                border: `1px solid ${grey[400]}`,
                width: "80%",
                height: "20px",
                color: "white",
                fontSize: "17px",
                padding: "5px",
                "&:focus": { border: "none", outline: "none" },
                "::-webkit-input-placeholder": { color: "white" },
              }}
            />
          </Box>
        </Stack>
        {MenuArray.map((item, index) => (
          <Link to={item.url} style={{ textDecoration: "none", width: "100%" }}>
            <Stack
              direction={"row"}
              sx={{
                width: "100%",
                height: "60px",
                justifyContent: "center",
              }}
              key={item.id}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "60px",
                  flex: 1,
                  borderBottom: `1px solid ${grey[700]}`,
                }}
                onClick={toggleDrawer(anchor, false)}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: grey[400],
                    fontSize: 17,
                    fontFamily: "Noto Sans KR",
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Stack>
          </Link>
        ))}
      </Stack>
    </Container>
  );
};

export default DrawMenu;
