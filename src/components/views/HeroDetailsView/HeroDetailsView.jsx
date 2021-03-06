import { useEffect } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { superherosOperations, superherosSelectors } from 'redux/superheros'
import EditSuperheroModal from '../../EditSuperheroModal/EditSuperheroModal'
import AddSuperheroBtn from '../../AddSuperheroBtn/AddSuperheroBtn'

import styles from './HeroDetailsView.module.css'

const HeroDetailsView = () => {
  const { superheroId } = useParams()
  const { state } = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(superherosOperations.getSuperheroById(superheroId))
  }, [dispatch, superheroId])

  const superhero = useSelector(superherosSelectors.getSuperheroById)
  const isEditModalOpen = useSelector(superherosSelectors.isEditModalOpen)

  const goBack = () => {
    dispatch(superherosOperations.clearSuperheroState())

    state?.from.pathname ? history.push(state.from.pathname) : history.push('/')

    if (state?.from.search) {
      history.push({
        search: state.from.search,
      })
    }
  }

  const openModal = () => {
    dispatch(superherosOperations.openEditModal())
  }

  return (
    <div className={styles.heroDetails}>
      <button className={styles.goBackBtn} type='button' onClick={goBack}>
        Go back
      </button>
      <AddSuperheroBtn onClick={openModal} text='Edit Superhero' />
      {isEditModalOpen && <EditSuperheroModal />}
      {superhero && (
        <section className={styles.section}>
          <ul className={styles.imageList}>
            {superhero.images.length !== 0 ? (
              superhero.images.map((image) => (
                <li key={image}>
                  <img src={image} alt={superhero.name} height='200px' />
                </li>
              ))
            ) : (
              <li>
                <img
                  src={
                    // 'https://www.samatters.com/wp-content/uploads/2017/04/Super-Hero-300x286.png'
                    'https://www.samatters.com/wp-content/uploads/2017/04/Super-Hero-300x286.png'
                  }
                  alt={superhero.name}
                  height='200px'
                />
              </li>
            )}
          </ul>
          {superhero.nickname && <p>Nickname: {superhero.nickname}</p>}
          {superhero.real_name && <p>Real name: {superhero.real_name}</p>}
          {superhero.origin_description && (
            <p>Origin Description: {superhero.origin_description}</p>
          )}
          {superhero.superpowers && <p>Superpowers: {superhero.superpowers}</p>}
          {superhero.catch_phrase && (
            <p>Catch phrase: {superhero.catch_phrase}</p>
          )}
        </section>
      )}
    </div>
  )
}

export default HeroDetailsView
