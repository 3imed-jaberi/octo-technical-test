import React from 'react'
import PropTypes from 'prop-types'
import { useHistory, useLocation } from 'react-router-dom'
import format from 'date-fns/format'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import { menuItemsConfig } from './config'

const drawerWidth = 275

const useStyles = makeStyles((theme) => ({
  page: {
    background: '#f9f9f9',
    width: '100%',
    padding: theme.spacing(3),
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active: {
    background: '#f4f4f4',
  },
  title: {
    padding: theme.spacing(2),
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  date: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  avatar: {
    marginLeft: theme.spacing(2),
  },
}))

function Layout({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar
        position="fixed"
        className={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today, {format(new Date(), 'do MMMM Y')}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Menu NavBar
          </Typography>
        </div>
        <List>
          {menuItemsConfig.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
