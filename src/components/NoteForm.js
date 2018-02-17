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
      newHashWord: '',
      hashWords: []
    }
  }

  //weve got one bug here, but I think that it's with the rendering method up front...
  startAddHashWord(hashWord) {
    this.props.addHashWord(hashWord)
    this.state.hashWords = this.state.hashWords.concat(hashWord)
    this.state.hashedWords = []
  }


  startAddNote(e) {
    e.preventDefault()
    const note = e.target.elements.note.value;
    this.props.addNote(note, this.state.hashWords)
    e.target.elements.note.value = ''
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
    return (
      <div>
        <form onSubmit={this.startAddNote}>
          <textarea name="note" onKeyPress={this.getKey}/>
          <br />
          <button type="submit">add</button>
        </form>
      </div>
    )
  }
}

export default NoteForm
