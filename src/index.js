import React from 'react';
import ReactDOM from 'react-dom';

import HomepageHeader from './components/HomepageHeader'
import NoteForm from './components/NoteForm'
import Note from './components/Note'
import HashWordList from './components/HashWordList'
import './css/normalize.css';
import './css/skeleton.css';
import './css/style.css';
import registerServiceWorker from './registerServiceWorker';
// import App from './App';

class TangerineNotes extends React.Component {
  constructor(props){
    super(props)
    this.addHashWord = this.addHashWord.bind(this)
    this.addNote = this.addNote.bind(this)
    this.state = {
      notes: [
        {
          id: 0,
          content: `where are you going playstation ultra 64 infinite reverie vaporwave dreamcast 1999 aol snick new game nintendo vhs everything will be ok sleeping in aesthetic you've got mail remember summer days lost cartridge nightdrive the future is now vcr where am i meme powerglove regular scheduled programming mallsoft relax satisfaction guaranteed crystal pepsi im dreaming `,
          tags: [
            '#crystal',
            '#playstation'
          ]
        }
      ],
      hashedWords: [
        '#crystal',
        '#playstation'
      ]
    }
  }

  addNote(note, hashWords){
    console.log('in addNote', note)
    this.setState((prevState) => ({
      notes: prevState.notes.concat({
        id: Math.random(),
        content: note,
        tags: hashWords
      })
    }))
  }

  addHashWord(hashWord) {
    console.log('in add hashWord', hashWord)
    this.setState((prevState) => ({
      hashedWords: prevState.hashedWords.concat(hashWord)
    }))
  }

  render() {
    return (
      <div>
        <HomepageHeader/>
        <div className='container' style={{marginTop: '23px'}}>
          <center>
            <h4>e c c o  n o t e</h4>
            <HashWordList hashedWords={this.state.hashedWords} />
          </center>
        </div>
        <div className="container" style={{ marginTop: "15px"}}>
          <div className="row">
            <div className="columns eight">
              <NoteForm addHashWord={this.addHashWord} addNote={this.addNote}/>
            </div>
            <div className="columns four">

            </div>
          </div>
          <div className="row">
            <Note notes={this.state.notes} />
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<TangerineNotes/>, document.getElementById('root'));
registerServiceWorker();
