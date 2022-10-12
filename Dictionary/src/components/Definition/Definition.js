import React, { useEffect, useState } from "react";
import {
  Stack,
  Typography,
  Box,
  IconButton,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import { Fragment } from "react";
import { useTheme } from "@mui/material";
import axios from "axios";
import {
  ArrowBack,
  BookmarkAdded,
  BookmarkBorder,
  PlayArrow,
} from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";

const Definition = ({ bookmarks, addBookmarks, removeBookmarks }) => {
  const navigate = useNavigate();
  const { word } = useParams();
  const [definitions, setDefinitions] = useState([]);

  const [exist, setExist] = useState(true);
  const [audio, setAudio] = useState(null);
  const theme = useTheme();

  const isBookmarked = Object.keys(bookmarks).includes(word);
  const updateState = (data) => {
    setDefinitions(data);
    const phonetics = data[0].phonetics;
    if (!phonetics.length) return;
    const url = phonetics[0].audio.replace("//ssl", "https://ssl");
    setAudio(new Audio(url));
  };
  useEffect(() => {
    const fetchDefination = async () => {
      try {
        console.log(word);
        const res = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        updateState(res.data);
      } catch (err) {
        setExist(false);
      }
    };
    if (!isBookmarked) fetchDefination();
    else updateState(bookmarks[word]);
  }, []);
  if (!exist)
    return (
      <Box sx={{ ...theme.mixins.alignInCenter }}>
        <Typography>Word not found</Typography>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            mt: 2,
          }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </Box>
    );
  if (!definitions.length)
    return (
      <Box sx={{ ...theme.mixins.alignInCenter }}>
        <CircularProgress />
      </Box>
    );
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <IconButton sx={{ color: "white" }} onClick={() => navigate(-1)}>
          <ArrowBack />
        </IconButton>
        <IconButton
          sx={{ color: "white" }}
          onClick={() =>
            isBookmarked
              ? removeBookmarks(word)
              : addBookmarks(word, definitions)
          }
        >
          {isBookmarked ? <BookmarkAdded /> : <BookmarkBorder />}
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          background: "#FFF",
          borderRadius: 2,
          marginTop: 3,
          px: 4,
          py: 5,
          color: "black",
        }}
      >
        <Typography sx={{ textTransform: "capitalize" }} variant="h5">
          {word}
        </Typography>
        {audio && (
          <IconButton
            onClick={() => audio.play()}
            sx={{
              borderRadius: 2,
              p: 1,
              color: "#000",
              background: "#FFF",
            }}
          >
            <PlayArrow />
          </IconButton>
        )}
      </Stack>
      {definitions.map((definition, idx) => (
        <Fragment key={idx}>
          <Divider sx={{ display: idx === 0 ? "none" : "block", my: 3 }} />
          {definition.meanings.map((meaning) => (
            <Box
              key={Math.random()}
              style={{
                boxShadow: "0px 10px 25px rgba(0,0,0,0.05",
                backgroundColor: "#322544",
                padding: 15,
                borderRadius: 2,
                marginTop: 3,
              }}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                }}
                variant="subtitles"
              >
                {meaning.partOfSpeech}
              </Typography>
              {meaning.definitions.map((def, idx) => (
                <Typography
                  sx={{ my: 1 }}
                  variant="body2"
                  color="GrayText"
                  key={idx}
                >
                  {meaning.definitions.length > 1 && `${idx + 1}.`}
                  {def.definition}
                </Typography>
              ))}
            </Box>
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default Definition;
