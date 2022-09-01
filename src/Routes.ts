import React from "react";
import HomePage from "pages/home";

const DeathPage = React.lazy(() => import("pages/deathsearch"));
const BirthPage = React.lazy(() => import("pages/birthsearch/birth"));
const MissingPage = React.lazy(() => import("pages/missingPerson/missing"));
const Question = React.lazy(() => import("pages/faq"));

const ROUTESWITHLAYER = {
  HomePage: {
    id: "1",
    element: HomePage,
    path: "/",
  },
  DeathPage: {
    id: "2",
    element: DeathPage,
    path: "/dead_bodies",
  },

  MissingPage: {
    id: "3",
    element: MissingPage,
    path: "/missing_person",
  },
  BirthPage: {
    id: "4",
    element: BirthPage,
    path: "/birth",
  },
  IdentifiedPage: {
    id: "5",
    element: DeathPage,
    path: "/identified_person",
  },
  ContactPage: {
    id: "6",
    element: DeathPage,
    path: "/contact",
  },
  PressPage: {
    id: "7",
    element: BirthPage,
    path: "/press",
  },
  AboutPage: {
    id: "8",
    element: DeathPage,
    path: "/about",
  },
  QuestionPage: {
    id: "9",
    element: Question,
    path: "/question",
  },
};

export default ROUTESWITHLAYER;
