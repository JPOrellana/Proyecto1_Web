const Keyboard = ({ onClick }) => {
    const keys = [
      '7', '8', '9', '+',
      '4', '5', '6', '-',
      '1', '2', '3', '*',
      '0', '.', '=', '/',
      'C', '%', '+/-'
    ]
    return (
      <div className='keyboard'>
        {keys.map(k => (
          <Button key={k} label={k} onClick={onClick} />
        ))}
      </div>
    )
  }
  