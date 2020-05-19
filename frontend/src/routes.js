/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";
import Performance from "views/Performance.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Main View",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/list",
    name: "Funds list",
    icon: "nc-icon nc-bank",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/performance",
    name: "Per-Fund Performance ",
    icon: "nc-icon nc-bank",
    component: Performance,
    layout: "/admin"
  },
];
export default routes;
