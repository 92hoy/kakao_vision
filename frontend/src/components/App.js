import React, { Component } from "react";
// UI
import { NavLink, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import Home from "./Home";
import MoimList from "../containers/MoimList";
import Header from "./Headers";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));
const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Business", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];
export default function Blog() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className="App">
          <Header title="Blog" sections={sections} />
          <div className="content-wrapper">
            <ul>
              <li>
                <NavLink exact to="/">
                  홈으로
                </NavLink>
              </li>
              <li>
                <NavLink to="/moim">모임 리스트</NavLink>
              </li>
            </ul>
            <Switch>
              <Route exact path="/moim" component={MoimList} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
