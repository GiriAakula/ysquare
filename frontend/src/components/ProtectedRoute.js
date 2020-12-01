import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // console.log(auth.isAuthenticated());
        // if (auth.isAuthenticated()) {
        //   return <Component {...props} />;
        // } else {
        //   return (
        //     <Redirect
        //       to={{
        //         pathname: "/",
        //         state: props.location
        //       }}
        //     />
        //   );
        // }
      }}
    />
  );
};

export default ProtectedRoute;