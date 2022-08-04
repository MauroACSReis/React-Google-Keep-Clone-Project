// Import Modules
import React from 'react'

// Constants & Variables

// Render
function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}

// Export
export default Note
