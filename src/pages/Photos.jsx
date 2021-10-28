/**
 * Note: I use the RTK Query features for that I don't use
 * the selectors behave through useSelector.
 */

import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import PhotosList from '../components/PhotosList/PhotosList'
import { useFetchPhotosQuery } from '../services/photosApi'
import usePagination from '../hooks/usePagination'

function Photos() {
  const [photos, setPhotos] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1)
  const [pageSize] = React.useState(4)

  const { data, isFetching } = useFetchPhotosQuery()

  const handlePageChange = (page) => setCurrentPage(page)

  usePagination({ data, currentPage, pageSize }, (paginatedData) => {
    setPhotos(paginatedData)
  })

  if (isFetching) return <CircularProgress />

  return (
    <div>
      <h1> Welcome to Photos Page ! </h1>
      <PhotosList
        paginationProps={{
          itemsCount: data.length,
          pageSize,
          currentPage,
          onPageChange: handlePageChange,
        }}
        data={photos}
      />
    </div>
  )
}

export default Photos
