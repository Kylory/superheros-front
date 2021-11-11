import { useState, useEffect } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { getSuperheroById } from '../../ApiServise/ApiServise'
import EditSuperheroModal from '../../EditSuperheroModal/EditSuperheroModal'
import AddSuperheroBtn from '../../AddSuperheroBtn/AddSuperheroBtn'

import styles from './HeroDetailsView.module.css'

const HeroDetailsView = () => {
  const [stateSuperhero, setStateSuperhero] = useState()
  const [stateShowModal, setStateShowModal] = useState(false)
  const { superheroId } = useParams()
  const { state } = useLocation()
  const history = useHistory()

  useEffect(() => {
    getSuperheroById(superheroId).then((response) =>
      setStateSuperhero(response)
    )
  }, [superheroId])

  const goBack = () => {
    state?.from.pathname ? history.push(state.from.pathname) : history.push('/')

    if (state?.from.search) {
      history.push({
        search: state.from.search,
      })
    }
  }

  const openModal = () => {
    setStateShowModal(true)
  }

  const closeModal = (data) => {
    setStateShowModal(false)
    if (data) {
      getSuperheroById(superheroId).then((response) =>
        setStateSuperhero(response)
      )
    }
  }

  return (
    <>
      <button className={styles.goBackBtn} type='button' onClick={goBack}>
        Go back
      </button>
      <AddSuperheroBtn onClick={openModal} text='Edit Superhero' />
      {stateShowModal && (
        <EditSuperheroModal
          closeModal={closeModal}
          data={stateSuperhero}
        ></EditSuperheroModal>
      )}
      {stateSuperhero && (
        <section className={styles.section}>
          <ul className={styles.imageList}>
            {stateSuperhero.images.length !== 0 ? (
              stateSuperhero.images.map((image) => (
                <li key={image}>
                  <img src={image} alt={stateSuperhero.name} height='200px' />
                </li>
              ))
            ) : (
              <li>
                <img
                  src={
                    'https://www.samatters.com/wp-content/uploads/2017/04/Super-Hero-300x286.png'
                  }
                  alt={stateSuperhero.name}
                  height='200px'
                />
              </li>
            )}
          </ul>
          {stateSuperhero.nickname && (
            <p>Nickname: {stateSuperhero.nickname}</p>
          )}
          {stateSuperhero.real_name && (
            <p>Real name: {stateSuperhero.real_name}</p>
          )}
          {stateSuperhero.origin_description && (
            <p>Origin Description: {stateSuperhero.origin_description}</p>
          )}
          {stateSuperhero.superpowers && (
            <p>Superpowers: {stateSuperhero.superpowers}</p>
          )}
          {stateSuperhero.catch_phrase && (
            <p>Catch phrase: {stateSuperhero.catch_phrase}</p>
          )}
        </section>
      )}
    </>
  )
}

export default HeroDetailsView
