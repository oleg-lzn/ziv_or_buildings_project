// routes.js
const routesLeft = [
  {
    name: "Main",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
    children: [
      { name: "Welcome", path: "/about/welcome" },
      { name: "About Us", path: "/about/us" },
      { name: "History", path: "/about/history" },
    ],
  },
  {
    name: "Commercial",
    path: "/commercial",
    children: [
      { name: "Commercial Ziv", path: "/commercial/ziv" },
      { name: "Commercial Or", path: "/commercial/or" },
    ],
  },
];

const routesRight = [
  {
    name: "Dining",
    path: "/dining",
    children: [
      { name: "Cafe", path: "/dining/cafe" },
      { name: "Restaurant", path: "/services/restaurant" },
    ],
  },
  {
    name: "Events",
    path: "/events",
  },
  {
    name: "Retail",
    path: "/retail",
  },
  {
    name: "Contacts",
    path: "/contacts",
  },
];

export { routesLeft, routesRight };
