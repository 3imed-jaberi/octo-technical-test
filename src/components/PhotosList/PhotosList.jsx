import React from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
// import { useHistory } from 'react-router-dom'
import makeStyles from '@material-ui/core/styles/makeStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import withPagination from '../../hoc/withPagination'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 750,
    backgroundColor: theme.palette.background.paper,
  },
}))

function PhotosList({ data }) {
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
        data.map(({ id, title, url }) => (
          <ListItem key={id} button>
            <ListItemAvatar>
              <Avatar alt={title} src={url} />
            </ListItemAvatar>
            <ListItemText primary={title} />
          </ListItem>
        ))
      )}
    </List>
  )
}

PhotosList.propTypes = {
  data: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      url: string.isRequired,
    }).isRequired
  ).isRequired,
}

export default withPagination(PhotosList)
