import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  getAllSuperheros,
  deleteSuperheroById,
} from '../../ApiServise/ApiServise'

import IconButton from '@material-ui/core/IconButton'
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone'

import styles from './HomeView.module.css'

const HomeView = () => {
  const [stateSuperheros, setStateSuperheros] = useState()
  const location = useLocation()

  useEffect(() => {
    getAllSuperheros().then((response) => setStateSuperheros(response))
  }, [])

  return (
    <div className={styles.trendingSection}>
      <ul className={styles.trendingList}>
        {stateSuperheros &&
          stateSuperheros.map(({ _id, nickname }) => (
            <li key={_id}>
              <Link
                to={{
                  pathname: `/superheros/${_id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                <p>{nickname}</p>
                {/* <p>images: {images}</p> */}
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
