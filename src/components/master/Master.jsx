import React from "react";
import AppNavBar from "./AppNavBar";
import Footer from "./Footer";
import { isLogin } from "@/utility/CookieHelper";

const Master = (props) => {
  let Login = isLogin();
  return (
    <>
      <AppNavBar isLogin={Login} />
      {props.children}
      <Footer />
    </>
  );
};

export default Master;
