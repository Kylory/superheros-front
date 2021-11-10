import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  getAllSuperheros,
  deleteSuperheroById,
} from '../../ApiServise/ApiServise'
import AddSuperheroBtn from '../../AddSuperheroBtn/AddSuperheroBtn'
import AddSuperheroModal from '../../AddSuperheroModal/AddSuperheroModal'

import IconButton from '@material-ui/core/IconButton'
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone'

import styles from './HomeView.module.css'

const HomeView = () => {
  const [stateSuperheros, setStateSuperheros] = useState()
  const location = useLocation()
  const [stateShowModal, setStateShowModal] = useState(false)

  useEffect(() => {
    getAllSuperheros().then((response) => setStateSuperheros(response))
  }, [])

  const openModal = (e) => {
    setStateShowModal(true)
  }

  const closeModal = () => {
    setStateShowModal(false)
  }

  return (
    <div className={styles.superherosSection}>
      <AddSuperheroBtn onClick={openModal} text='Add Superhero' />
      {stateShowModal && (
        <AddSuperheroModal closeModal={closeModal}></AddSuperheroModal>
      )}
      <ul className={styles.superherosList}>
        {stateSuperheros &&
          stateSuperheros.map(({ _id, nickname, images }) => (
            <li key={_id}>
              {images.length !== 0 && (
                <Link
                  className={styles.superherosImage}
                  to={{
                    pathname: `/superheros/${_id}`,
                    state: {
                      from: location,
                    },
                  }}
                >
                  <img src={images[0]} alt={nickname} width='50px' />
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
                  deleteSuperheroById(_id)
                }}
              >
                <CancelTwoToneIcon />
              </IconButton>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default HomeView
