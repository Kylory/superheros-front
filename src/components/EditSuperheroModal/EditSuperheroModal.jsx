import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'
import styles from './EditSuperheroModal.module.css'
import { updateSuperheroBuId } from '../ApiServise/ApiServise'
// import PropTypes from 'prop-types'

const Modal = (props) => {
  const [nickname, setNickname] = useState(props.data.nickname)
  const [real_name, setRealName] = useState(props.data.real_name)
  const [origin_description, setOriginDescription] = useState(
    props.data.origin_description
  )
  const [superpowers, setSuperpowers] = useState(props.data.superpowers)
  const [catch_phrase, setCatchPhrase] = useState(props.data.catch_phrase)
  const { superheroId } = useParams()
  // const [images, setImages] = useState(null)
  // const isButtonDisable = nickname === ''

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

  //Закриває модалку при натисканні кнопки Escape
  const handleKeyDowm = (e) => {
    // console.log(e.code)
    if (e.code === 'Escape') {
      props.closeModal()
    }
  }

  //Закриває модалку при кліку в оверлей
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      props.closeModal()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      nickname: nickname,
      real_name: real_name,
      origin_description: origin_description,
      superpowers: superpowers,
      catch_phrase: catch_phrase,
    }

    updateSuperheroBuId(superheroId, data)

    // const data = new FormData()

    //Додає дані юзера в FormData
    // Object.keys(userData).forEach((element) =>
    //   data.append(element, userData[element])
    // )

    //Додає картинки юзера в FormData
    // if (images) {
    //   Object.keys(images).forEach((element) =>
    //     data.append('images', images[element], element.name)
    //   )
    // }

    // addSuperhero(data)
    props.closeModal()
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
            // disabled={isButtonDisable}
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
