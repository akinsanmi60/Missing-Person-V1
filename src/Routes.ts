import React from "react";
import HomePage from "pages/home";

const DeathPage = React.lazy(() => import("pages/searchDeadPerson"));
const MissingPage = React.lazy(
  () => import("pages/searchMissingPerson/missing"),
);
const IdentifiedPage = React.lazy(
  () => import("pages/searchFoundPerson/index"),
);
const Question = React.lazy(() => import("pages/faq"));
const ContactPage = React.lazy(() => import("pages/contact/"));
const AboutPage = React.lazy(() => import("pages/about/index"));
const SettingPage = React.lazy(() => import("pages/settingsPage/index"));
const PersonPage = React.lazy(() => import("pages/personPage"));

// User-App Routes
const AddFoundPage = React.lazy(() => import("pages/addFound"));
const AddMissingPage = React.lazy(() => import("pages/addMissing"));

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

  IdentifiedPage: {
    id: "5",
    element: IdentifiedPage,
    path: "/identified_person",
  },
  ContactPage: {
    id: "6",
    element: ContactPage,
    path: "/contact",
  },
  PressPage: {
    id: "7",
    element: ContactPage,
    path: "/press",
  },
  AboutPage: {
    id: "8",
    element: AboutPage,
    path: "/about",
  },
  QuestionPage: {
    id: "9",
    element: Question,
    path: "/question",
  },
  PersonPage: {
    id: "9",
    element: PersonPage,
    path: "/users/:id",
  },
};

export default ROUTESWITHLAYER;

export const APPROUTES = {
  AddMissingPage: {
    id: "1",
    element: AddMissingPage,
    path: "add_missing_person",
  },
  AddFoundPage: {
    id: "2",
    element: AddFoundPage,
    path: "add_found_person",
  },
  SettingPage: {
    id: "3",
    element: SettingPage,
    path: "profile_settings",
  },
};
