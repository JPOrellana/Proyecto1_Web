const Button = ({ label, onClick }) => {
    return (
      <button className='button' onClick={() => onClick(label)}>
        {label}
      </button>
    )
  }
  