import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Grid,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { getTodoData, setDbSearchResultsData } from "../Data/Db";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  marginLeft: 0,
  position: "relative",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "10ch",
    },
    [theme.breakpoints.up("sm")]: {
      width: "10ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  const [todoData, setTodoData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setTodoData(getTodoData);
  });

  const SearchTodo = (e) => {
    e.preventDefault();
    var searchInput = document.getElementById("search").value;
    console.log(searchInput);
    var searchItems = [];
    searchItems = todoData.filter((todo) =>
      todo.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(searchItems);
    setDbSearchResultsData(searchItems);
    navigate("/SearchDetails");
  };

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              TODO App
            </Typography>
            <Typography
              sx={{ display: { xs: "none", sm: "block" } }}
              ml={5}
              variant="h6"
            >
              <Link href="/" sx={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </Typography>
            <Typography
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              ml={5}
              variant="h6"
            >
              <Link
                href="/Create"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Create
              </Link>
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                id="search"
              />
              <Button
                variant="contained"
                sx={{ "&:hover": { backgroundColor: "darkblue" } }}
                onClick={(e) => SearchTodo(e)}
              >
                Search
              </Button>
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
