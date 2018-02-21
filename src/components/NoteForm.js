import React from 'react'
import { Redirect } from 'react-router-dom'

class NoteForm extends React.Component {
  constructor(props){
    super(props)
    this.getKey = this.getKey.bind(this)
    this.startAddHashWord = this.startAddHashWord.bind(this)
    this.startAddNote = this.startAddNote.bind(this)
    this.hashWord = ''
    this.recording = false

    this.state = {
      newHashWord: '',
      hashWords: [],
      toHistory: false
    }
  }

  startAddHashWord(hashWord) {
    this.props.addHashWord(hashWord)
    this.setState((prevState) => ({
      hashWords: prevState.hashWords.concat(hashWord)
    }))
  }

  startAddNote(e) {
    e.preventDefault()
    const note = e.target.elements.note.value;
    this.props.addNote(note, this.state.hashWords)
    e.target.elements.note.value = ''

    this.setState((prevState) => ({
      hashWords: [],
      toHistory: true
    }))
  }

  //getKey should probably be called something like "build hashword"
    //doesn't matter though... it's isolated and works well enough right now
      //MOST IMPORTANT: how to handle cases where you delete part of the tag and go back?
        //you know what? this whole thing is kinda flawed if you are not constantly scanning the document
          //that just feels like it would be so expensive to scan he entire note on each change
        //there's also the deal with pasting things in... the whole approach would need to be rethought

  getKey(e) {
    const key = e.key
    const validCharacter = /^[a-zA-Z0-9_.-]{1}$/.test(key)

    if(this.recording && validCharacter){
      this.hashWord += key
    }

    if(this.recording && !validCharacter){
      this.recording = false
      this.startAddHashWord('#'.concat(this.hashWord))
      this.hashWord = ''
    }

    if(key === '#' && !this.recording){
      this.recording = true
    }
  }

  render() {
    if(this.state.toHistory === true){
      return <Redirect to='/history' />
    }

    return (
      <div>
        <form onSubmit={this.startAddNote}>
          <textarea name="note" onKeyPress={this.getKey} placeholder="use #tags while you write so #ecconote can be helpful"/>
          <br />
          <button type="submit">save note</button>
        </form>
      </div>
    )
  }
}

export default NoteForm
