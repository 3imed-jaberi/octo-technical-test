import React from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
// import { useHistory } from 'react-router-dom'
import makeStyles from '@material-ui/core/styles/makeStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import withPagination from '../../hoc/withPagination'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 750,
    backgroundColor: theme.palette.background.paper,
  },
}))

function UsersList({ data }) {
  const classes = useStyles()
  // use history to redirect to details in the future
  // const history = useHistory()

  return (
    <List dense className={classes.root}>
      {data.length === 0 ? (
        <ListItem button>
          <ListItemText primary="No Users -- Empty .." />
        </ListItem>
      ) : (
        data.map(({ id, name }) => (
          <ListItem key={id} button>
            <ListItemText primary={name} />
          </ListItem>
        ))
      )}
    </List>
  )
}

UsersList.propTypes = {
  data: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
    }).isRequired
  ).isRequired,
}

export default withPagination(UsersList)
