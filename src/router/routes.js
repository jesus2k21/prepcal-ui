import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Start = () => import(/* webpackChunkName: "start" */"@/pages/Start.vue");
const Summary = () => import(/* webpackChunkName: "common" */ "@/pages/Summary.vue");
const Categories = () => import(/* webpackChunkName: "common" */ "@/pages/Categories.vue"); 
const Settings = () => import(/* webpackChunkName: "common" */ "@/pages/Settings.vue"); 
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "start",
        name: "start",
        component: Start
      },
      {
        path: "summary",
        name: "summary",
        component: Summary
      },
      {
        path: "categories",
        name: "categories",
        component: Categories
      },
      {
        path: "settings",
        name: "settings",
        component: Settings
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
