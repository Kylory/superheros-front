import { useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import styles from './AddSuperheroModal.module.css'
import { superherosOperations, superherosSelectors } from 'redux/superheros'
import { useDispatch, useSelector } from 'react-redux'

const Modal = () => {
  const [nickname, setNickname] = useState('')
  const [real_name, setRealName] = useState('')
  const [origin_description, setOriginDescription] = useState('')
  const [superpowers, setSuperpowers] = useState('')
  const [catch_phrase, setCatchPhrase] = useState('')
  const [images, setImages] = useState(null)
  const isButtonDisable = nickname === ''
  const page = useSelector(superherosSelectors.page)
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

      case 'images':
        setImages(e.target.files)
        break

      default:
        break
    }
  }
  const closeModal = () => {
    dispatch(superherosOperations.closeAddModal())
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

    const userData = {
      nickname: nickname,
      real_name: real_name,
      origin_description: origin_description,
      superpowers: superpowers,
      catch_phrase: catch_phrase,
    }

    const data = new FormData()

    //Додає дані юзера в FormData
    Object.keys(userData).forEach((element) =>
      data.append(element, userData[element])
    )

    //Додає картинки юзера в FormData
    if (images) {
      Object.keys(images).forEach((element) =>
        data.append('images', images[element], element.name)
      )
    }

    await dispatch(superherosOperations.addSuperhero(data))
    dispatch(superherosOperations.getAllSuperheros(page))

    closeModal()
  }

  return (
    <div className={styles.Overlay} onClick={handleClick}>
      <div className={styles.Modal}>
        <form
          encType='multipart/form-data'
          className={styles.Form}
          onSubmit={handleSubmit}
          noValidate
          autoComplete='off'
        >
          <TextField
            className={styles.TextField}
            onChange={handleChange}
            autoFocus={true}
            required={true}
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
          <input
            className={styles.fileInput}
            type='file'
            name='images'
            accept='image/*'
            multiple
            onChange={handleChange}
          />

          <Button
            className={styles.submitButton}
            disabled={isButtonDisable}
            type='submit'
            size='small'
            variant='contained'
          >
            Add Superhero
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Modal
