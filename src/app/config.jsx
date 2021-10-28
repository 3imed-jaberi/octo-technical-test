import React, { lazy } from 'react'
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import PhotoAlbumOutlinedIcon from '@material-ui/icons/PhotoAlbumOutlined'

export const routesConfig = {
  // for this demo we don't have protected routes
  public: [
    {
      path: ['/', '/home'],
      component: lazy(() => import('../pages/Home')),
      exact: true,
    },
    {
      path: '/users',
      component: lazy(() => import('../pages/Users')),
      exact: true,
    },
    {
      path: '/photos',
      component: lazy(() => import('../pages/Photos')),
      exact: true,
    },
  ],
}

export const menuItemsConfig = [
  {
    text: 'Home',
    icon: <HomeOutlinedIcon color="secondary" />,
    path: '/home',
  },
  {
    text: 'All Users',
    icon: <GroupOutlinedIcon color="secondary" />,
    path: '/users',
  },
  {
    text: 'All Photos',
    icon: <PhotoAlbumOutlinedIcon color="secondary" />,
    path: '/photos',
  },
]
