import { useState, useEffect } from 'react'
import {
  useParams,
  // NavLink,
  // useRouteMatch,
  // Route,
  useHistory,
  useLocation,
} from 'react-router-dom'
import { getSuperheroById } from '../../ApiServise/ApiServise'

import styles from './HeroDetailsView.module.css'

const HeroDetailsView = () => {
  const [stateSuperhero, setStateSuperhero] = useState()

  const { superheroId } = useParams()
  // const { url } = useRouteMatch()
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

  return (
    <>
      <button className={styles.goBackBtn} type='button' onClick={goBack}>
        Go back
      </button>
      {stateSuperhero && (
        <section className={styles.section}>
          <p>nickname: {stateSuperhero.nickname}</p>
          <p>real_name: {stateSuperhero.real_name}</p>
          <p>origin_description: {stateSuperhero.origin_description}</p>
          <p>superpowers: {stateSuperhero.superpowers}</p>
          <p>catch_phrase: {stateSuperhero.catch_phrase}</p>
          {/* <div className={styles.wrapper}>
            <img
              src={
                stateMovie.poster_path
                  ? `https://image.tmdb.org/t/p/w200${stateMovie.poster_path}`
                  : 'https://dummyimage.com/200x300/b3b3b3/fff.jpg&text=No+image'
              }
              alt={stateMovie.title}
            />
            <div className={styles.description}>
              <h2>{stateMovie.title}</h2>
              <p>User score {stateMovie.vote_average}</p>
              <h3>Overview</h3>
              <p>{stateMovie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {stateMovie.genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.subMenu}> */}
          {/* <p>Additional information</p>
            <NavLink
              className={styles.cast}
              to={{
                pathname: `${url}/cast`,
                state: { ...state },
              }}
            >
              Cast
            </NavLink>
            <NavLink
              className={styles.reviews}
              to={{
                pathname: `${url}/reviews`,
                state: { ...state },
              }}
            >
              Reviews
            </NavLink>
          </div> */}
        </section>
      )}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Route
          path={`${url}/cast`}
          render={() => <CastView movieId={movieId} />}
        ></Route>
        <Route
          path={`${url}/reviews`}
          render={() => <ReviewsView movieId={movieId} />}
        ></Route>
      </Suspense> */}
    </>
  )
}

export default HeroDetailsView
