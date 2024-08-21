import { useState } from 'react'
import './App.css'
import { Description } from './Description/Description'
import { Options } from './Options/Options'
import { Feedback } from './Feedback/Feedback'
import { Notification } from './Notification/Notification'

export const App = () => {


  const [rate, setRate] = useState({
	good: 0,
	neutral: 0,
	bad: 0
  })

  const updateFeedback = (feedbackType) => {

    setRate((prevRate) => ({
      ...prevRate,
      [feedbackType]: prevRate[feedbackType] + 1,
    }))
    
  }
  
  const totalFeedback = rate.good + rate.neutral + rate.bad;

  return <>
    <Description />
    <Options variant="good" updateRate={updateFeedback}>Good</Options>
    <Options variant="neutral" updateRate={updateFeedback}>Neutral</Options>
    <Options variant="bad" updateRate={updateFeedback}>Bad</Options>
    {totalFeedback > 0 ? (<>
    <Feedback>Good: {rate.good}</Feedback>
    <Feedback>Neutral: {rate.neutral }</Feedback>
    <Feedback>Bad: {rate.bad}</Feedback>
    </>) : (<Notification />)}
  </>
}