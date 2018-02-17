import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import NoteForm from './components/NoteForm'
import Note from './components/Note'
import './css/normalize.css';
import './css/skeleton.css';
import './css/style.css';
import registerServiceWorker from './registerServiceWorker';
// import App from './App';



class TangerineNotes extends React.Component {
  constructor(props){
    super(props)
    this.addHashWord = this.addHashWord.bind(this)

    this.state = {
      notes: [
        {
          id: 0,
          content: 'this is a note',
          tags: [
            '#yoga',
            '#thirdeye',
            '#health'
          ]
        },
        {
          id: 1,
          content: 'this is another note',
          tags: [
            '#chillin',
            '#weekend'
          ]
        },
        {
          id: 2,
          content: 'this is the final note',
          tags: [
            '#weed',
            '#drank',
            '#sleep'
          ]
        }
      ],
      hashedWords: [
        '#yoga',
        '#thirdeye',
        '#health'
      ]
    }
  }

  addNote(note){
    console.log('in addNote', note)
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
        <Header />
        <div className="container" style={{ marginTop: "15px"}}>
          <div className="row">
          <h4>Tangerine Notes
            <span role="img" alt="tangerine emoji" aria-label="tangerine emoji">🍊</span>
          </h4>
          </div>
          <div className="row">
            <div className="columns six">
              <NoteForm addHashWord={this.addHashWord} addNote={this.addNote}/>
            </div>
            <div className="columns six">
              {this.state.hashedWords.map((hashWord) => (
                <p key={hashWord} className="hash-word">{hashWord}</p>
              ))}
            </div>
          </div>
          <div className="row">
            {this.state.notes.map((note) => (
              <div key={note.id}>
                <p><b>id:</b> {note.id} | <b>content:</b> {note.content}</p>
                {note.tags.map((tag, index) => (
                  <p key={index}>
                    {tag}
                  </p>
                ))}
              </div>
            ))}

          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<TangerineNotes />, document.getElementById('root'));
registerServiceWorker();
