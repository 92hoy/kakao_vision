import React, { Component } from "react";
// UI
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Home from "./Home";
import MoimList from "../containers/MoimList";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Header from "./Headers";
import Footer from "./Footer";
import post1 from "./blog-post1.md";
import post2 from "./blog-post2.md";
import post3 from "./blog-post3.md";

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Business", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];
const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const posts = [post1, post2, post3];

export default function Main() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className="App">
          <Header title="Woo Eun Sun" sections={sections} />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
          </main>

          <div className="content-wrapper" hidden>
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

      <Footer
        title="Woo Eun-sun Studio"
        description=" Photographer, Retoucher"
      />
    </React.Fragment>
  );
}
