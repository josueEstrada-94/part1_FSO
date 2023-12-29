import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>    
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
    {props.text}: {props.value}
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const header = 'Give Feeback'
  const statistics = 'Statistics'
  const all = good + neutral + bad
  const weightedSum = good * 1 + neutral * 0 + bad * -1
  const average = all > 0 ? weightedSum / all : 0 
  const positive = (good/all * 100).toFixed(2)+"%"

  const goodOption = () => {
    console.log('good')
    setGood(good + 1)
  }

  const neutralOption = () => {
    console.log('new value', neutral)
    setNeutral(neutral + 1)
  }

  const badOption = () => {
    console.log('bad')
    setBad(bad + 1)
  }
  
  return (
    <div>
      <Header header = {header} />
      
      <Button onClick = {goodOption} text ='Good' />
      <Button onClick = {neutralOption} text ='Neutral' />
      <Button onClick = {badOption} text ='Bad' />

      <h1>{statistics}</h1>
      
     {all === 0 && <p>No Feedback Given</p>}
     {all !== 0 && (
     <>
     <StatisticLine text = 'Good' value= {good} />        
     <StatisticLine text = 'Neutral' value= {neutral} />
     <StatisticLine text = 'Bad' value= {bad} /> 
     <StatisticLine text = 'All' value= {all} />
     <StatisticLine text = 'Average' value= {average} />
     <StatisticLine text = 'Positive' value= {positive} />
     </> 
        )}
    </div>
  )

}

export default App
