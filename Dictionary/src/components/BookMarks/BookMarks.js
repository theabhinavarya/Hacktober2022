import React from "react";
import { Stack, IconButton, Typography, Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

const BookMarks = ({ bookmarks }) => {
  return (
    <>
      <Stack direction="row" alignItems="center" sx={{ mb: 2 }}>
        <IconButton to="/" component={Link} sx={{ color: "white", mx: 1 }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h6">Bookmarks</Typography>
      </Stack>

      {!!Object.keys(bookmarks).length ? (
        Object.keys(bookmarks).map((b, idx) => (
          <Box
            key={idx}
            to={`/search/${b}`}
            component={Link}
            sx={{
              padding: 2,
              cursor: "pointer",
              backgroundColor: "white",
              borderRadius: 1,
              textTransform: "capitalize",
              display: "block",
              textDecoration: "none",
            }}
          >
            {b}
          </Box>
        ))
      ) : (
        <Typography sx={{ mt: 5 }} align="center">
          No Bookmarks
        </Typography>
      )}
    </>
  );
};
export default BookMarks;
