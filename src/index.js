import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PamDetail from "./pages/PamDetail";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import PostPalm from "./pages/PostPalm";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }, //홈 화면
      { path: "posts/:id", element: <PamDetail /> }, //팜플렛 세부정보
      { path: "signup", element: <SignUp /> }, //회원가입
      { path: "login", element: <Login /> }, //로그인
      { path: "mypage/:id", element: <MyPage /> }, //마이페이지
      { path: "postpalm", element: <PostPalm /> }, //팜플렛 쓰기
      { path: "search", element: <Search /> }, //검색
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
