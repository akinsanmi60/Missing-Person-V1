import DeathPage from "pages/deathsearch";
import BirthPage from "pages/birthsearch/birth";
import HomePage from "pages/home";
import MissingPage from "pages/missingPerson/missing";

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
    element: MissingPage,
    path: "/question",
  },
};

export default ROUTESWITHLAYER;
