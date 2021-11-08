import { useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import styles from './AddSuperheroModal.module.css'
import { addSuperhero } from '../ApiServise/ApiServise'
// import PropTypes from 'prop-types'

const Modal = (props) => {
  const [nickname, setNickname] = useState('')
  const [realName, setRealName] = useState('')
  const [originDescription, setOriginDescription] = useState('')
  const [superpowers, setSuperpowers] = useState('')
  const [catchPhrase, setCatchPhrase] = useState('')
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

      case 'realName':
        setRealName(value)
        break

      case 'originDescription':
        setOriginDescription(value)
        break

      case 'superpowers':
        setSuperpowers(value)
        break

      case 'catchPhrase':
        setCatchPhrase(value)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    // addSuperhero({
    //   nickname: nickname,
    //   realName: realName,
    //   originDescription: originDescription,
    //   superpowers: superpowers,
    //   catchPhrase: catchPhrase,
    // })
    // console.log(e.currentTarget.elements)
    addSuperhero({
      nickname,
      realName,
      originDescription,
      superpowers,
      catchPhrase,
    })
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
            name='realName'
            type='text'
            value={realName}
            size='small'
            label='Real Name'
            variant='outlined'
          />

          <TextField
            className={styles.TextField}
            onChange={handleChange}
            name='originDescription'
            type='text'
            value={originDescription}
            size='small'
            label='Origin Description'
            variant='outlined'
          />

          <TextField
            className={styles.TextField}
            onChange={handleChange}
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
            name='catchPhrase'
            type='text'
            value={catchPhrase}
            size='small'
            label='Catch Phrase'
            variant='outlined'
          />
          <Button
            className={styles.button}
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
