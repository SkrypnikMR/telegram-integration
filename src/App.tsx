import React from "react";

import MainHeader from "Components/Main/Header";
import Content from "Components/Main/Content";
import Comments from "Components/Main/Comments";
import { FlexCol } from "Components/Shared";

import "./App.css";

export default function App() {
  return (
    <FlexCol
      className="base-wrapper"
      maxWidth="100vw"
      height="100vh"
      justifyContent="flex-start"
    >
      <MainHeader />
      <Content />
      <Comments />
    </FlexCol>
  );
}
