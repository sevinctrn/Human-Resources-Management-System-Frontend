import Employer from "./pages/users/Employer";
import Candidate from "./pages/users/Candidate";


export const routes = [
  {
    path: "/employers",
    exact: true,
    component: <Employer />,
    title: "Employer",
    isHeaderElement: true,
  },
  {
    path: "/candidates",
    exact: true,
    component: <Candidate/>,
    title: "Candidate",
    isHeaderElement: true,
  },
 
  
];