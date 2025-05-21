const useCalculator = () => {
    const [display, setDisplay] = React.useState('0')
    const [operation, setOperation] = React.useState(null)
    const [storedValue, setStoredValue] = React.useState(null)
    const [shouldReset, setShouldReset] = React.useState(false)
  
    const isError = v => v < 0 || v > 999999999
    const format = v => v.toString().length > 9 ? 'ERROR' : v
  
    const inputDigit = d => {
      if (display === 'ERROR') return
      if (shouldReset) {
        setDisplay(d)
        setShouldReset(false)
      } else {
        const newVal = display === '0' ? d : display + d
        if (newVal.length <= 9) setDisplay(newVal)
      }
    }
  
    const inputDot = () => {
      if (shouldReset) {
        setDisplay('0.')
        setShouldReset(false)
      } else if (!display.includes('.') && display.length < 9) {
        setDisplay(display + '.')
      }
    }
  
    const toggleSign = () => {
      if (display.startsWith('-')) {
        setDisplay(display.slice(1))
      } else if (display.length < 9) {
        setDisplay('-' + display)
      }
    }
  
    const handleOperation = op => {
      if (operation && storedValue !== null) {
        calculate()
      } else {
        setStoredValue(parseFloat(display))
      }
      setOperation(op)
      setShouldReset(true)
    }
  
    const calculate = () => {
      const a = storedValue
      const b = parseFloat(display)
      let result
      if (operation === '+') result = a + b
      if (operation === '-') result = a - b
      if (operation === '*') result = a * b
      if (operation === '/') result = a / b
      if (operation === '%') result = a % b
  
      if (isError(result)) {
        setDisplay('ERROR')
      } else {
        const val = result.toString().slice(0, 9)
        setDisplay(val)
        setStoredValue(result)
      }
      setShouldReset(true)
      setOperation(null)
    }
  
    const clear = () => {
      setDisplay('0')
      setOperation(null)
      setStoredValue(null)
      setShouldReset(false)
    }
  
    return {
      display,
      inputDigit,
      inputDot,
      toggleSign,
      handleOperation,
      calculate,
      clear
    }
  }
  