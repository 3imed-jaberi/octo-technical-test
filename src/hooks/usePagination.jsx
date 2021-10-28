import React from 'react'
import { paginate } from '../utils/paginateUtil'

function usePagination({ data, currentPage = 1, pageSize = 4 }, handler) {
  React.useEffect(() => {
    if (!data) return
    handler(paginate(data, currentPage, pageSize))
  }, [data, currentPage, pageSize])
}

export default usePagination
