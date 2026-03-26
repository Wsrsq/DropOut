import { createHashRouter } from "react-router";
import { IndexPage } from ".";
import { HomeView } from "./home-view";
import instanceRoute from "./instances/routes";
import { SettingsPage } from "./settings";

const router = createHashRouter([
  {
    path: "/",
    Component: IndexPage,
    children: [
      {
        index: true,
        Component: HomeView,
      },
      {
        path: "settings",
        Component: SettingsPage,
      },
      instanceRoute,
    ],
  },
]);

export default router;
