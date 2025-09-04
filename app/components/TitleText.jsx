import React from 'react'
import { Slide } from 'react-awesome-reveal'

const TitleText = ({ firstText, highlightedText,variant=0 }) => {

  return (
    <Slide direction='up'>
      <span className="text-5xl font-bold text-primary uppercase leading-[1.2em]">
      {firstText}{" "}
      <span className={variant?"text-third":"text-secondary"}>{highlightedText}</span>
    </span>
    </Slide>
  )
}

export default TitleText
