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
import ExploreCareerAIPage from "./pages/ExploreCareerAI/ExploreCareerAIPage";
import CertificationPage from "./pages/CertificationPage/CertificationPage";
import CereerPage from "./pages/CereerPage/CereerPage";
import CareerAllPage from "./pages/CarrerAllPage/CareerAllPage";
import FeaturedTopics from "./pages/FeaturedTopics/FeaturedTopics";
import { SkillsReportPage } from "./pages/SkillsReportPage/SkillsReportPage";
import CaseStudyPage from "./pages/CaseStudyPage/CaseStudyPage";
import TransformationStoriesPage from "./pages/TransformationStoriesPage/TransformationStoriesPage";

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
        {
          path: "personal-development",
          element: <ExploreCareerAIPage />,
        },
        {
          path: "certification",
          element: <CertificationPage />,
          children: [
            {
              path: ":certificationId",
              element: <CertificationPage />,
            },
          ],
        },
        {
          path: "career",
          element: <CereerPage />,
        },
        {
          path: "career-accelerators",
          element: <CareerAllPage />,
        },
        {
          path: "featured-topics",
          element: <FeaturedTopics />,
        },
        {
          path: "reports",
          element: <SkillsReportPage />,
        },
        {
          path: "case-study",
          element: <CaseStudyPage />,
        },
        {
          path: "stories",
          element: <TransformationStoriesPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
