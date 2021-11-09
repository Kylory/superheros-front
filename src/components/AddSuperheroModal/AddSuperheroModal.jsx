import { useEffect, useState } from 'react'
import { Button, IconButton, TextField } from '@material-ui/core'
import styles from './AddSuperheroModal.module.css'
import { addSuperhero, getAllSuperheros } from '../ApiServise/ApiServise'
// import PropTypes from 'prop-types'

const Modal = (props) => {
  const [nickname, setNickname] = useState('')
  const [real_name, setRealName] = useState('')
  const [origin_description, setOriginDescription] = useState('')
  const [superpowers, setSuperpowers] = useState('')
  const [catch_phrase, setCatchPhrase] = useState('')

  // const [name, setName] = useState('')
  // const [file, setFile] = useState(null)
  const [images, setImages] = useState(null)
  const isButtonDisable = nickname === ''

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
        // setFile(e.target.files)
        setImages(e.target.files)
        break

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

  // async function deleteItem(id) {
  //   dispatch(contactsOperations.deleteContact(id))
  //   await dispatch(contactsOperations.DB_deleteContact(id))
  // }

  // async function handleSubmit(e) {
  //   e.preventDefault()
  //   const res = await addSuperhero({
  //     nickname,
  //     real_name,
  //     origin_description,
  //     superpowers,
  //     catch_phrase,
  //   })

  //   if (res.status === 201) {
  //     getAllSuperheros()
  //     props.closeModal()
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.files[0])
    // console.log(images)
    const files = images
    const userData = {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
    }
    console.log('userData', userData)
    // console.log('files', files)
    // console.log('file', files[0])
    const data = new FormData()
    // data.append('files', files)
    data.append('files', files[0], files[0].name)
    data.append('files', files[1], files[1].name)
    // data.append('data', userData)

    // for (let key in userData) {
    //   data.append(key, userData[key])
    // }

    // data.append('data', real_name)
    // data.append('data', origin_description)
    // data.append('data', superpowers)
    // data.append('data', catch_phrase)

    // data.append('file2', files[1])
    // console.log('data', data.get('file'))
    // addSuperhero({
    //   nickname,
    //   real_name,
    //   origin_description,
    //   superpowers,
    //   catch_phrase,
    //   data,
    // })
    addSuperhero(data)
    props.closeModal()
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

          {/* <label> */}
          <input
            type='file'
            name='images'
            accept='image/*'
            multiple
            onChange={handleChange}
            // onChange={(e) => setFile(e.target.files)}
          />
          {/* </label> */}

          {/* <form> */}
          {/* <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type='file'
            accept='image/*'
            multiple
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.files[0])}
          /> */}
          {/* </form> */}

          {/* <input
            accept='image/*'
            className={styles.input}
            id='contained-button-file'
            multiple
            type='file'
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.files)}
          />
          <label htmlFor='contained-button-file'>
            <Button
              variant='contained'
              size='small'
              color='primary'
              component='span'
            >
              Upload images
            </Button>
          </label> */}
          {/* <input
            accept='image/*'
            className={styles.input}
            // id='icon-button-file'
            type='file'
          />
          <label htmlFor='icon-button-file'>
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='span'
            ></IconButton>
          </label> */}

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

// Modal.propTypes = {
//   closeModal: PropTypes.func.isRequired,
//   largeimageurl: PropTypes.string.isRequired,
// }

export default Modal
