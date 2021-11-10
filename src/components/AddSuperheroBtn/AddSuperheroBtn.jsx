const AddSuperheroBtn = ({ onClick, text }) => {
  return (
    <button type='button' className='Button' onClick={onClick}>
      {text}
    </button>
  )
}

export default AddSuperheroBtn
