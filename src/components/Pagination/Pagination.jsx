import React from 'react'
import PropTypes from 'prop-types'
import MuiPagination from '@material-ui/lab/Pagination'
import makeStyles from '@material-ui/core/styles/makeStyles'
import _ from 'lodash'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
      display: 'flex',
    },
  },
}))

function Pagination({ itemsCount, pageSize, onPageChange }) {
  const classes = useStyles()
  const pagesCount = Math.ceil(itemsCount / pageSize)
  if (pagesCount === 1) return null
  const pages = _.range(1, pagesCount + 1)

  return (
    <MuiPagination
      className={classes.root}
      count={pages.length}
      color="secondary"
      onChange={(e, page) => {
        onPageChange(page)
      }}
    />
  )
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export default Pagination
