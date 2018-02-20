import React from 'react'
import HashWordList from './HashWordList'

const Note = ({ notes }) => (
  <div>
    {
      notes.slice(0).reverse().map((note, index) => (
        <div key={index} className='note-preview'>
          <p className='date'>9 / 9 / 99</p>
          <p>{note.content}</p>
          <HashWordList hashedWords={note.tags} />
          <hr />
        </div>
      ))
    }
  </div>
)

export default Note
