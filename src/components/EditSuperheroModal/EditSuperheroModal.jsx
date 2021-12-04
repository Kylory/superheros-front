import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'
import styles from './EditSuperheroModal.module.css'
import { superherosOperations, superherosSelectors } from 'redux/superheros'
import { useDispatch, useSelector } from 'react-redux'

const Modal = () => {
  const { superheroId } = useParams()
  const superhero = useSelector(superherosSelectors.getSuperheroById)
  const [nickname, setNickname] = useState(superhero.nickname)
  const [real_name, setRealName] = useState(superhero.real_name)
  const [origin_description, setOriginDescription] = useState(
    superhero.origin_description
  )
  const [superpowers, setSuperpowers] = useState(superhero.superpowers)
  const [catch_phrase, setCatchPhrase] = useState(superhero.catch_phrase)
  const dispatch = useDispatch()

  // Додає EventListener для відстеження натискання кнопок
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDowm)

    // При розмонтуванні
    return () => {
      window.removeEventListener('keydown', handleKeyDowm)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'nickname':
        setNickname(value)
        break

      case 'real_name':
        setRealName(value)
        break

      case 'origin_description':
        setOriginDescription(value)
        break

      case 'superpowers':
        setSuperpowers(value)
        break

      case 'catch_phrase':
        setCatchPhrase(value)
        break

      // case 'images':
      //   setImages(e.target.files)
      //   break

      default:
        break
    }
  }

  const closeModal = () => {
    dispatch(superherosOperations.closeEditModal())
  }

  //Закриває модалку при натисканні кнопки Escape
  const handleKeyDowm = (e) => {
    if (e.code === 'Escape') {
      closeModal()
    }
  }

  //Закриває модалку при кліку в оверлей
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      superheroId: superheroId,
      superhero: {
        nickname: nickname,
        real_name: real_name,
        origin_description: origin_description,
        superpowers: superpowers,
        catch_phrase: catch_phrase,
      },
    }

    dispatch(superherosOperations.updateSuperheroById(data))
    closeModal()
  }

  return (
    <div className={styles.Overlay} onClick={handleClick}>
      <div className={styles.Modal}>
        <form
          className={styles.Form}
          onSubmit={handleSubmit}
          noValidate
          autoComplete='off'
        >
          <TextField
            className={styles.TextField}
            onChange={handleChange}
            name='nickname'
            type='text'
            value={nickname}
            size='small'
            label='Nickname'
            variant='outlined'
          />

          <TextField
            className={styles.TextField}
            onChange={handleChange}
            name='real_name'
            type='text'
            value={real_name}
            size='small'
            label='RealName'
            variant='outlined'
          />

          <TextField
            className={styles.TextField}
            onChange={handleChange}
            multiline={true}
            name='origin_description'
            type='text'
            value={origin_description}
            size='small'
            label='Origin Description'
            variant='outlined'
          />

          <TextField
            className={styles.TextField}
            onChange={handleChange}
            multiline={true}
            name='superpowers'
            type='text'
            value={superpowers}
            size='small'
            label='Superpowers'
            variant='outlined'
          />

          <TextField
            className={styles.TextField}
            onChange={handleChange}
            multiline={true}
            name='catch_phrase'
            type='text'
            value={catch_phrase}
            size='small'
            label='Catch Phrase'
            variant='outlined'
          />

          <Button
            className={styles.submitButton}
            type='submit'
            size='small'
            variant='contained'
          >
            Edit Superhero
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Modal
