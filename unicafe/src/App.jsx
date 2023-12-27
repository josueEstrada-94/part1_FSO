import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log('rendering counter value', good, neutral, bad)

  const header = 'Give Feeback'
  const all = good + neutral + bad
  const weightedSum = good * 1 + neutral * 0 + bad * -1
  const average = all > 0 ? weightedSum / all : 0 

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
      
      <button onClick={goodOption}>good</button>
      <button onClick={neutralOption}>neutral</button>
      <button onClick={badOption}>bad</button>
     
      <h1>Statistics</h1>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>All: {all}</div>
      <div>Average: {average}</div>
      <div>Positive: {(good/all * 100).toFixed(2)}%</div>
    </div>
  )

}

export default App
