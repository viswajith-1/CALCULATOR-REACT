import { useContext } from "react"
import { CalcContext } from "./CalcContext"

const getStyleName = btn => {
  const className = {
    '=': 'equals',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',
  }
  return className[btn]
}

const Button = ({ value }) => {

  const { setCalc } =useContext(CalcContext);
  console.log(setCalc);

  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes ? calc.num + value : calc.num
    })
  }

  const resetClick = () => {
    setCalc({ sign: '', num: 0, res: 0})
  }

  const handleClickButton = () => {
    const numberString = value.toString()
    let numberValue;
    if(numberString === '0' && calc.num === 0) {
      numberValue= "0"
    }
    else{
      numberValue= Number(calc.num + numberString)
    }
    setCalc({
      ...calc,
      num: numberValue
    })
  }

  const handleBtnClick= () => {
    console.log(value)
    const results ={
      '.': commaClick,
      'C': resetClick
    }
    if(results[value]){
      return results[value]()
    }
    else{
      return handleClickButton()
    }
  }

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button
