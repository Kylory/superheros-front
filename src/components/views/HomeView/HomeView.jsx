import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { superherosOperations, superherosSelectors } from 'redux/superheros'

import AddSuperheroBtn from '../../AddSuperheroBtn/AddSuperheroBtn'
import AddSuperheroModal from '../../AddSuperheroModal/AddSuperheroModal'

import IconButton from '@material-ui/core/IconButton'
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone'
import PaginatedItems from '../../Pagination/Pagination'
import styles from './HomeView.module.css'

const HomeView = () => {
  const superheros = useSelector(superherosSelectors.getSuperheros)
  const isAddModalOpen = useSelector(superherosSelectors.isAddModalOpen)
  const page = useSelector(superherosSelectors.page)
  const totalDocs = useSelector(superherosSelectors.totalDocs)
  const location = useLocation()

  // const [page, setPage] = useState(1)
  // const [totalDocs, setTotalDocs] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(superherosOperations.getAllSuperheros(page))
  }, [dispatch, page])

  const openModal = () => {
    dispatch(superherosOperations.openAddModal())
  }

  const deleteSuperhero = async (superheroId) => {
    await dispatch(superherosOperations.deleteSuperheroById(superheroId))
    dispatch(superherosOperations.getAllSuperheros(page))
  }

  const requestedPage = (page) => {
    dispatch(superherosOperations.changePage(page))
  }

  return (
    <div className={styles.superherosSection}>
      <AddSuperheroBtn onClick={openModal} text='Add Superhero' />
      {isAddModalOpen && <AddSuperheroModal></AddSuperheroModal>}
      <ul className={styles.superherosList}>
        {superheros &&
          superheros.map(({ _id, nickname, images }) => (
            <li key={_id}>
              {images.length !== 0 ? (
                <Link
                  className={styles.superherosImage}
                  to={{
                    pathname: `/superheros/${_id}`,
                    state: {
                      from: location,
                    },
                  }}
                >
                  <img src={images[0]} alt={nickname} height='60px' />
                </Link>
              ) : (
                <Link
                  className={styles.superherosImage}
                  to={{
                    pathname: `/superheros/${_id}`,
                    state: {
                      from: location,
                    },
                  }}
                >
                  <img
                    src={
                      'https://www.samatters.com/wp-content/uploads/2017/04/Super-Hero-300x286.png'
                    }
                    alt={nickname}
                    height='60px'
                  />
                </Link>
              )}

              <Link
                className={styles.superherosTitle}
                to={{
                  pathname: `/superheros/${_id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                {nickname}
              </Link>
              <IconButton
                className={styles.button}
                aria-label='delete'
                size='small'
                onClick={() => {
                  deleteSuperhero(_id)
                }}
              >
                <CancelTwoToneIcon />
              </IconButton>
            </li>
          ))}
      </ul>
      {totalDocs >= 6 && (
        <PaginatedItems
          itemsPerPage={5}
          totalDocs={totalDocs}
          requestedPage={requestedPage}
        />
      )}
    </div>
  )
}

export default HomeView
