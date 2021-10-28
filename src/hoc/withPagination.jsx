import React from 'react'
import PropTypes from 'prop-types'
import Pagination from '../components/Pagination'

function withPagination(Component) {
  function ComponentWrapper({ paginationProps, ...props }) {
    return (
      <center>
        <Component {...props} />
        <Pagination {...paginationProps} />
      </center>
    )
  }

  ComponentWrapper.defaultProps = {
    paginationProps: {},
    props: {},
  }

  ComponentWrapper.propTypes = {
    paginationProps: PropTypes.objectOf(PropTypes.any),
    props: PropTypes.objectOf(PropTypes.any),
  }

  return ComponentWrapper
}

export default withPagination
