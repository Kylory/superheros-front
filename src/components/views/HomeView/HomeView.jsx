import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getAllSuperheros } from '../../ApiServise/ApiServise'
// import AddSuperheroBtn from '../../../components/AddSuperheroBtn/AddSuperheroBtn'

import styles from './HomeView.module.css'

const HomeView = () => {
  const [stateSuperheros, setStateSuperheros] = useState()
  const location = useLocation()

  useEffect(() => {
    getAllSuperheros().then((response) => setStateSuperheros(response))
  }, [])

  return (
    <div className={styles.trendingSection}>
      <h2 className={styles.trendingTitle}>Superheros</h2>
      {/* <AddSuperheroBtn /> */}
      <ul className={styles.trendingList}>
        {stateSuperheros &&
          stateSuperheros.map(({ _id, nickname }) => (
            <li key={_id}>
              <Link
                to={{
                  pathname: `/movies/${_id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                {nickname}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default HomeView
