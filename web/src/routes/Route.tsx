import { ReactNode } from "react";
import {
  Route as ReactDomRoute,
  RouteProps as ReactDomRouteProps,
} from "react-router-dom";

interface RouteProps extends ReactDomRouteProps {
  children: ReactNode;
}

export function Route({ children, ...rest }: RouteProps): JSX.Element {
  return (
    <ReactDomRoute
      {...rest}
      render={() => {
        return children;
      }}
    />
  );
}
