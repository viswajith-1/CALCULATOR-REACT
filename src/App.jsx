import './index.css'
import Wrapper from './assets/wrapper'
import Screen from './assets/screen'
import Button from './assets/button'
import ButtonBox from './assets/buttonBox'

const btnValues = [
  ['C',"+-","%","/"],
  [1,2,3,"x"],
  [4,5,6,"-"],
  [7,8,9,"+"],
  [0,".","="],
];

function App() {
  return (
    <div>      
      <Wrapper>
        <Screen/>
        <ButtonBox>
          {btnValues.flat().map((btn,i) => (
            <Button 
            value={btn} 
            key={i} 
            />
          ))}
        </ButtonBox>
      </Wrapper>   
    </div>
  )
}

export default App
