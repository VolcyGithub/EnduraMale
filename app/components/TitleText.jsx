import React from 'react'

const TitleText = ({ firstText, highlightedText }) => {
  return (
    <span className="text-5xl font-bold text-primary uppercase leading-[1.2em]">
      {firstText}{" "}
      <span className="text-secondary">{highlightedText}</span>
    </span>
  )
}

export default TitleText
