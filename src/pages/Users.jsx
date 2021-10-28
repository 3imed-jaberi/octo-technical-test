/**
 * Note: I use the RTK Query features for that I don't use
 * the selectors behave through useSelector.
 */

import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import UsersList from '../components/UsersList/UsersList'
import { useFetchUsersQuery } from '../services/usersApi'
import usePagination from '../hooks/usePagination'

function Users() {
  const [users, setUsers] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1)
  const [pageSize] = React.useState(4)

  const { data, isFetching } = useFetchUsersQuery()

  const handlePageChange = (page) => setCurrentPage(page)

  usePagination({ data, currentPage, pageSize }, (paginatedData) => {
    setUsers(paginatedData)
  })

  if (isFetching) return <CircularProgress />

  return (
    <div>
      <h1> Welcome to Users Page ! </h1>
      <UsersList
        paginationProps={{
          itemsCount: data.length,
          pageSize,
          currentPage,
          onPageChange: handlePageChange,
        }}
        data={users}
      />
    </div>
  )
}

export default Users
