"use client";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import cartStore from "../../store/CartStore.js";
import wishStore from "../../store/WishStore.js";

const AppNavBar = (props) => {
  const [key, SetKey] = useState("");
  const { CartCount, CartListRequest } = cartStore();
  const { WishCount, WishListRequest } = wishStore();

  useEffect(() => {
    (async () => {
      if (props.isLogin) {
        await CartListRequest();
        await WishListRequest();
      }
    })();
  }, []);

  return (
    <>
      <div className="container-fluid text-white p-2 bg-success">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-6">
              <span>
                <span className="f-12">
                  <i className="bi bi-envelope"></i> Support@PlanB.com{" "}
                </span>
                <span className="f-12 mx-2">
                  <i className="bi bi-envelope"></i> 01774688159{" "}
                </span>
              </span>
            </div>
            <div className="col-md-6">
              <span className="float-end">
                <span className="bodySmal mx-2">
                  <i className="bi bi-whatsapp"></i>
                </span>
                <span className="bodySmal mx-2">
                  <i className="bi bi-youtube"></i>
                </span>
                <span className="bodySmal">
                  <i className="bi bi-facebook"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-white sticky-top shadow-sm py-3"
      >
        <Container>
          <Navbar.Brand href="">
            <img
              className="img-fluid"
              src="/images/plainb-logo.svg"
              alt=""
              width="96px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="btn ms-2 btn-light position-relative" href="/">
                <i className="bi bi-house"></i> Home
              </Link>
              <Link
                href={`${props.isLogin ? "/user/cart" : "/user/login"}`}
                type="button"
                className="btn ms-2 btn-light position-relative"
              >
                <i className="bi text-dark bi-bag"></i> Cart{" "}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {CartCount}
                </span>
              </Link>
              <Link
                href={`${props.isLogin ? "/user/wish" : "/user/login"}`}
                type="button"
                className="btn ms-4 btn-light position-relative"
              >
                <i className="bi text-dark bi-heart"></i> Wish{" "}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  {WishCount}
                </span>
              </Link>
              <Link
                href={`${props.isLogin ? "/user/order/list" : "/user/login"}`}
                type="button"
                className="btn ms-4 btn-light position-relative"
              >
                <i className="bi text-dark  bi-truck"></i> Order
              </Link>
            </Nav>
            <Nav>
              <div className="input-group">
                <input
                  onChange={(e) => SetKey(e.target.value)}
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />

                <Link
                  style={{ pointerEvents: key.length === 0 ? "none" : "" }}
                  href={`/product/by-search?key=${key}`}
                  className={
                    key.length === 0 ? "btn btn-dark" : "btn btn-outline-dark"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ width: 24, height: 24 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </Link>
              </div>

              <Link
                href={`${props.isLogin ? "/user/profile" : "/user/login"}`}
                type="button"
                className="btn ms-4 btn-outline-success position-relative"
              >
                <i className="bi text-dark bi-person"></i>
              </Link>

              {props.isLogin ? (
                <a
                  type="button"
                  className="btn ms-3 btn-success d-flex"
                  href="/api/user/logout"
                >
                  Logout
                </a>
              ) : (
                <Link
                  type="button"
                  className="btn ms-3 btn-success d-flex"
                  href="/user/login"
                >
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavBar;
