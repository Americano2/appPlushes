import React from 'react'

function AspectImage({ src, alt, width, height, aspectRatio, caption }) {
  return (
    <figure style={{width: width, height: "fit-content", margin: 0}}>
      <img
        style={{aspectRatio: aspectRatio, objectFit: "cover"}} 
        src={src}
        alt={alt}
        width="100%"
        height={height}
      />
      {caption ? 
        <figcaption style={{justifyContent: "center", textAlign: "center", margin: "10px"}}>{caption}</figcaption>
        :
        <></>
      }
    </figure>
  )
}

export default AspectImage