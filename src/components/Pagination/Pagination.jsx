import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.css'

function PaginatedItems({ itemsPerPage, totalDocs, requestedPage }) {
  const [pageCount, setPageCount] = useState(0)
  //   const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    setPageCount(Math.ceil(totalDocs / itemsPerPage))
  }, [totalDocs, itemsPerPage])

  const handlePageClick = (event) => {
    const newOffset = event.selected + 1

    // setItemOffset(newOffset)
    requestedPage(newOffset)
  }

  return (
    <>
      <ReactPaginate
        className={styles.pagination}
        breakLabel='...'
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='< previous'
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default PaginatedItems
