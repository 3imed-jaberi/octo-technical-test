/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react'
import {
  arrayOf,
  shape,
  string,
  oneOfType,
  elementType,
  bool,
} from 'prop-types'
import { nanoid } from '@reduxjs/toolkit'
import { Route } from 'react-router-dom'

/**
 * This is router loader is so helpful when we have public and protected routes.
 */
function Loader({ routes, RouteComponent }) {
  return routes.map(({ component: Component, path, exact }) => (
    <RouteComponent
      key={nanoid()}
      path={path}
      exact={exact}
      component={Component}
    />
  ))
}

Loader.defaultProps = {
  RouteComponent: Route,
}

Loader.propTypes = {
  RouteComponent: elementType,
  routes: arrayOf(
    shape({
      path: oneOfType([
        string.isRequired,
        arrayOf(string.isRequired).isRequired,
      ]).isRequired,
      component: elementType.isRequired,
      exact: bool.isRequired,
    })
  ).isRequired,
}

export default Loader
