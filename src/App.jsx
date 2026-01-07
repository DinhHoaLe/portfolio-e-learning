import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ErrorPage from "./pages/Error/ErrorPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import MainLayout from "./components/Main/MainLayout";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ListingPage from "./pages/ListingPage/ListingPage";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "detail/:id",
          element: <DetailPage />,
        },
        {
          path: "login",
          element: <LogInPage />,
        },
        {
          path: "signup",
          element: <SignUpPage />,
        },
        {
          path: "search",
          element: <SearchPage />,
        },
        {
          path: "topic",
          element: <ListingPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
