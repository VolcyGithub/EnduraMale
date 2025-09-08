import React from 'react'
import { Zoom } from 'react-awesome-reveal'

const TitleText = ({ firstText, highlightedText,variant=0 }) => {

  return (
    <Zoom>
      <span className="text-5xl font-bold text-primary uppercase leading-[1.2em]">
      {firstText}{" "}
      <span className={variant?"text-third":"text-secondary"}>{highlightedText}</span>
    </span>
    </Zoom>
  )
}

export default TitleText
