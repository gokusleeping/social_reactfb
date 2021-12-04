// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// export default function () {
//   return < />;
// }

// import { lazy, Suspense } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import * as ROUTES from "./api/constants/routes";
// const Login = lazy(() => import("./login"));
// const SignUp = lazy(() => import("./Signup"));

// export default function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path={ROUTES.LOGIN} component={Login} />
//         <Route path={ROUTES.SIGN_UP} component={SignUp} />
//       </Switch>
//     </Router>
//   );
// }
import { useRouter } from "next/router";
import useEffect from "react";
const router = useRouter();
const HomePage = () => {
  useEffect(() => {
    router.push("/Login");
  }, []);
  return <div />;
};

export default HomePage;
