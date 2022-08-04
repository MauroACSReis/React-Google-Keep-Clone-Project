// Import Modules
import React from 'react'
import Head from './Header'
import Note from './Note'
import Foot from './Footer'
import notes from '../notes'

// Render
function App() {
  return (
    <div className="App">
      <Header />;
      {notes.map(noteItem => (
        <Note
          id={note.id}
          key={note.key}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />;
    </div>
  )
}

// Export
export default App
