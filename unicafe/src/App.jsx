import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Statistics = (props) => {
  return (
    <>
      
      <div>Good: {props.good}</div>
      <div>Neutral: {props.neutral}</div>
      <div>Bad: {props.bad}</div>
      <div>All: {props.all}</div>
      <div>Average: {props.average}</div>
      <div>Positive: {(props.good/props.all * 100).toFixed(2)}%</div>
    </>
  )
}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log('rendering counter value', good, neutral, bad)

  const header = 'Give Feeback'
  const statistics = 'Statistics'
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
      <h1>{statistics}</h1>
      
     {all === 0 ? 
     (<p>No Feedback Given</p>
     ) : (
     <Statistics        
        good = {good}
        neutral = {neutral}
        bad = {bad}
        all = {all}
        average = {average}/>)}
    </div>
  )

}

export default App
