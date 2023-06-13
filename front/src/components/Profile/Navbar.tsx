// @ts-nocheck

import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/AuthReducer";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#397261",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "1rem",
  width: "40%",
  maxWidth: "500px",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Navbar = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Search>
          <InputBase placeholder="유저 스토리 검색" />
        </Search>
        <Icons>
          <Badge badgeContent={1} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src={user?.profile} />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
