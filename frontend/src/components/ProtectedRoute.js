import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("username")) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: props.location
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;