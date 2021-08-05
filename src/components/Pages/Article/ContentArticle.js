import {
  Button,
  createMuiTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import CustomPagination from "./CustomPage";
import "./ContentArticle.css";
import Horror from "./Pages/Horror";
import Moral from "./Pages/Moral";
import Romance from "./Pages/Romance";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const ContentArticle = () => {
  const [numOfPages, setNumOfPages] = useState();
  const [type, setType] = useState();
  const [page, setPage] = useState();

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#00000",
      },
    },
  });

  return (
    <div>
      Hello article
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, newValue) => {
          // setType(newValue);
          // setPage(1);
        }}
        style={{ paddingBottom: 5 }}
      >
        <Tab style={{ width: "33.33%" }} label="Romance" />
        <Tab style={{ width: "33.33%" }} label="Horror" />
        <Tab style={{ width: "33.33%" }} label="Morals" />
      </Tabs>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default ContentArticle;
