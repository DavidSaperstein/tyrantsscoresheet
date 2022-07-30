import React, { useState, useEffect } from 'react'

import './App.scss'
import  cityMarker  from './assets/cityMarker.png'
import  innerCircle  from './assets/innerCircle.png'
import  troopTokens  from './assets/troopTokens.png'
import  victoryPoints  from './assets/victoryPoints.png'

function App() {

  const initState = {
    control: 0,
    totalControl: 0,
    trophies: 0,
    deck: 0,
    innerCircle: 0,
    tokens: 0
  }
  
  const [scores, setScores] = useState(initState)
  const [finalScore, setFinalScore] = useState(0)
  
  function handleChange(e) {
    e.preventDefault()
    const {name, value} = e.target
    setScores(prevScores => ({
      ...prevScores,
      [name]: value
    }))
  }
  
  function handleFinal() {
    const scoreArray = Object.values(scores)
    scoreArray.forEach(score => {
      console.log(typeof score)
    })
    const total = scoreArray.reduce((acc, val) => {
      return parseInt(acc) + parseInt(val)
    })
    setFinalScore(total)
  }

  function handleReset(e){
    e.preventDefault()
    setScores(initState)
  }

  useEffect(() => {
    handleFinal()
  }, [scores])


  

  return (
    <div className='app'>
      <h1>Tyrants of the Scorecard</h1>
      <form>
        <img src={cityMarker} alt='Picture of a City Marker' className='images' />
        <div className='input-container'>
          <label className='labels'>
            VP value of each site you control: 
            <input 
              type='number'
              name='control'
              value={scores.control}
              onChange={handleChange}
              min='0'
              required
            />
          </label>
        </div>

        <div className='input-container'>
          <label className='labels'>
          2 VP for each site under total control: 
            <input 
              type='number'
              name='totalControl'
              value={scores.totalControl}
              onChange={handleChange}
              min='0'
              required
            />
          </label>
        </div>

        <div className='input-container'>
          <label className='labels'>
          1 VP for each troop in your trophy hall:  
            <input 
              type='number'
              name='trophies'
              value={scores.trophies}
              onChange={handleChange}
              min='0'
              required
            />
          </label>
        </div>

        <div className='input-container'>
          <label className='labels'>
          Deck, hand and discard VP value: 
            <input 
              type='number'
              name='deck'
              value={scores.deck}
              onChange={handleChange}
              min='0'
              required
            />
          </label>
        </div>

        <div className='input-container'>
          <label className='labels'>
          Inner-circle VP value: 
            <input 
              type='number'
              name='innerCircle'
              value={scores.innerCircle}
              onChange={handleChange}
              min='0'
              required
            />
          </label>
        </div>

        <div className='input-container'>
          <label className='labels'>
          VP Tokens 
            <input 
              type='number'
              name='tokens'
              value={scores.tokens}
              onChange={handleChange}
              min='0'
              required
            />
          </label>
        </div>
      </form>
      <p>{finalScore}</p>
      <button onClick={handleReset}>Reset</button>
      <p>Is this the right font</p>
    </div>
  )
}

export default App
