import { Drawer, Stack } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import jncoreWhite from "../img/logo/jncoreWhite.png";
import { mobile } from "../responsive";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { MenuArray } from "../data";
import DrawMenu from "./DrawMenu";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  text-decoration: none;
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  ${mobile({ display: "none" })}
`;

const MobileMenuWrapper = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  ${mobile({
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
  })}
`;

const MenuItem = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${grey[100]};
  font-size: 0.95rem;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    color: ${grey[50]};
    font-weight: 600;
  }
  ${mobile({ flex: 1 })}
`;

const Header = () => {
  const [menuDrawer, setMenuDrawer] = useState({
    top: false,
    bottom: false,
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuDrawer({ ...menuDrawer, [anchor]: open });
  };

  console.log(menuDrawer);
  return (
    <Container>
      <Stack
        width={"100%"}
        sx={{ backgroundColor: blueGrey[900] }}
        alignItems={"center"}
      >
        <MenuWrapper>
          <Link to="/" style={{ textDecoration: "none" }}>
            <MenuItem style={{ justifyContent: "flex-start" }}>
              <img src={jncoreWhite} width="50px" />
            </MenuItem>
          </Link>
          {MenuArray.map((item, index) => (
            <Link to={item.url} style={{ textDecoration: "none" }}>
              <MenuItem id={item.id}>{item.title}</MenuItem>
            </Link>
          ))}
          <Link to="/" style={{ textDecoration: "none" }}>
            <MenuItem style={{ justifyContent: "flex-end" }}>
              <PermIdentityOutlinedIcon sx={{ fontSize: 34 }} />
            </MenuItem>
          </Link>
        </MenuWrapper>
        <MobileMenuWrapper>
          <MenuItem style={{ justifyContent: "flex-start" }}>
            <MenuIcon onClick={toggleDrawer("top", true)} />

            <Drawer
              anchor={"top"}
              open={menuDrawer["top"]}
              onClose={toggleDrawer("top", false)}
            >
              <DrawMenu
                anchor={"top"}
                toggleDrawer={toggleDrawer}
                setMenuDrawer={setMenuDrawer}
                menuDrawer={menuDrawer}
              />
            </Drawer>
          </MenuItem>
          <MenuItem>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={jncoreWhite} width="50px" />
            </Link>
          </MenuItem>
          <MenuItem style={{ justifyContent: "flex-end" }}>
            <PermIdentityOutlinedIcon sx={{ fontSize: 28 }} />
          </MenuItem>
        </MobileMenuWrapper>
      </Stack>
    </Container>
  );
};

export default Header;
