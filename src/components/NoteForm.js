import React from 'react'

class NoteForm extends React.Component {
  constructor(props){
    super(props)
    this.getKey = this.getKey.bind(this)
    this.startAddHashWord = this.startAddHashWord.bind(this)
    this.startAddNote = this.startAddNote.bind(this)
    this.hashWord = ''
    this.recording = false

    this.state = {
      newHashWord: ''
    }
  }

  startAddHashWord(hashWord) {
    this.props.addHashWord(hashWord)
  }

  startAddNote(e) {
    e.preventDefault()
    const note = e.target.elements.note.value;
    this.props.addNote(note)
    e.target.elements.note.value = ''
  }

  getKey(e) {
    const input = e.target.value
    const character = input[input.length-1]

    if(character === '#' && !this.recording){
      this.recording = true
    }

    if(character === ' ' && this.recording){
      this.recording = false
      this.startAddHashWord(this.hashWord)
      this.hashWord = ''
    }

    if(this.recording){
      this.hashWord += character
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.startAddNote}>
          <textarea name="note" onKeyDown={this.getKey}/>
          <br />
          <button type="submit">add</button>
        </form>
      </div>
    )
  }
}

export default NoteForm
