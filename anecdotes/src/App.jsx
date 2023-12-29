import { useState } from 'react'


function App() {
  const anecdotes = [
    'The best way to get a project done faster is to start sooner',
    'Even the best planning is not so omniscient as to get it right the first time.',
    'The bearing of a child takes nine months, no matter how many women are assigned. Many software tasks have this characteristic because of the sequential nature of debugging.',
    `Every good work of software starts by scratching a developer's personal itch`,
    'Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
    'The belief that complex systems require armies of designers and programmers is wrong. A system that is not understood in its entirety, or at least to a significant degree of detail by a single individual, should probably not be built',
    'A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want',
    'Prolific programmers contribute to certain disaster',
    'Documentation is the castor oil of programming. Managers think it is good for programmers and programmers hate it!',
    "Good code is its own best documentation. As you’re about to add a comment, ask yourself, ‘How can I improve the code so that this comment isn’t needed?’ Improve the code and then document it to make it even clearer",
    "It's OK to figure out murder mysteries, but you shouldn't need to figure out code. You should be able to read it.",
    "An organization that treats its programmers as morons will soon have programmers that are willing and able to act like morons only",
    "Design and programming are human activities; forget that and all is lost.",
    "Real programmers can write assembly code in any language."
  ]
  
  const [selected, setSelected] = useState(0)

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * 15);
    return randomIndex;
  }

  const handleButtonClick = () => {
    const randomIndex = getRandomIndex()
    setSelected(randomIndex)
  }

  return (
    <>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleButtonClick}>Next Quote</button>
    </>
  )
}

export default App
