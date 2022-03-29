import { blueGrey, grey } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";
import jncoreWhite from "../img/logo/jncoreWhite.png";
import { MenuArray } from "../data";
import { Divider, Stack, TextField, Typography } from "@mui/material";
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
              "&:hover": { cursor: "pointer" },
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
            {/* <input
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
              }}/> */}
            <TextField
              fullWidth
              inputProps={{
                placeholder: "검색",
                style: {
                  color: grey[100],
                },
              }}
              sx={{
                "& .MuiInputBase-input": {
                  color: "white",
                  borderRadius: "20px",
                  fontSize: "15px",
                  borderColor: "red",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: grey[800],
                    borderRadius: "20px",
                  },
                  "&:hover": {
                    "& fieldset": {
                      borderColor: grey[700],
                    },
                  },
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& fieldset": {
                    borderColor: grey[600],
                  },
                },
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
