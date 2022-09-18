import { FaBuilding, FaHome, FaPenAlt } from "react-icons/fa";

export const userNavigation = [
  {
    id: "1",
    path: "add_missing_person",
    title: "Add Missing Person",
  },
  {
    id: "2",
    path: "add_found_person",
    title: "Add Found Person",
  },
  {
    id: "3",
    path: "profile_settings",
    title: "Setting",
  },
];

export const staffNavigation = [
  {
    path: "staff_dashboard",
    icon: <FaHome />,
    title: "home",
  },
  {
    path: "staff_deadperson",
    icon: <FaPenAlt />,
    title: "Application",
  },
  {
    path: "staff_foundperson",
    icon: <FaPenAlt />,
    title: "Application",
  },
  {
    path: "staff_missingperson",
    icon: <FaPenAlt />,
    title: "Application",
  },
  {
    path: "staff_setting",
    icon: <FaBuilding />,
    title: "Settings",
  },
];

export const adminNavigation = [
  {
    path: "admin_dashboard",
    icon: <FaHome />,
    title: "home",
  },
  {
    path: "admin_deadperson",
    icon: <FaPenAlt />,
    title: "Application",
  },
  {
    path: "admin_foundperson",
    icon: <FaPenAlt />,
    title: "Application",
  },
  {
    path: "admin_missingperson",
    icon: <FaPenAlt />,
    title: "Application",
  },
  {
    path: "admin_setting",
    icon: <FaBuilding />,
    title: "Settings",
  },
  {
    path: "admin_stafflist",
    icon: <FaBuilding />,
    title: "Settings",
  },
];
