import React, {useRef} from "react";
import { Box, Typography, FilledInput, IconButton } from "@mui/material";
import img from "../../images/dictionary-log.png";
import SearchIcon from "@mui/icons-material/Search";
import BookMarkIcon from "@mui/icons-material/BookmarkAddOutlined";
import { useNavigate, Link } from "react-router-dom";
const Home = () => {
  const wordRef = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(wordRef.current.value);
    const trimmedWord = wordRef.current.value.trim().toLowerCase();

    if (!trimmedWord) return;
    navigate(`/search/${trimmedWord}`);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <img src={img} alt="Dictionary" width={100} height={100} />
      <Typography
        variant="h2"
        sx={{
          marginTop: "10px",
        }}
      >
        Dictionary
      </Typography>
      <Typography>Get Meanings of words</Typography>
      <Box sx={{ width: "360px"}}>
        <form onSubmit={handleSubmit}>
          <FilledInput
            inputRef={wordRef}
            placeholder="Search Word"
            sx={{
              my: 5,
              width : '100%',
              borderRadius: "5px",
              border: "2px solid white",
              "& .MuiFilledInput-input": {
                p: 2,
              },
            }}
            startAdornment={<SearchIcon />}
          />
        </form>
      </Box>

      <IconButton
        to="/bookmarks"
        component={Link}
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          padding: 2,
          "&:hover": {
            backgroundColor: "rgb(0, 230, 64)",
          },
        }}
      >
        <BookMarkIcon />
      </IconButton>
    </Box>
  );
};

export default Home;
