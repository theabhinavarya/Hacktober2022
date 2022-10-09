import React, { useState, useEffect } from "react";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import BookMarks from "./components/BookMarks/BookMarks";
import Definition from "./components/Definition/Definition";
import Grid from "@mui/material/Grid";
const App = () => {
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || {}
  );

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (word, definitions) =>
    setBookmarks((oldBookmarks) => ({ ...oldBookmarks, [word]: definitions }));
  const removeBookmark = (word) =>
    setBookmarks((oldBookmarks) => {
      const temp = { ...oldBookmarks };
      delete temp[word];
      return temp;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        justifyContent="center"
        container
        sx={{
          padding: 2,
          mt: { xs: 0, sm: 2 },
        }}
      >
        <Grid item xs={12} sm={8} md={5} lg={3}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/bookmarks"
                element={<BookMarks bookmarks={bookmarks} />}
              ></Route>
              <Route
                path="/search/:word"
                element={
                  <Definition
                    bookmarks={bookmarks}
                    addBookmarks={addBookmark}
                    removeBookmarks={removeBookmark}
                  />
                }
              ></Route>
            </Routes>
          </Router>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
