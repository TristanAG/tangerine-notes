import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import NoteForm from './components/NoteForm'
import Note from './components/Note'
import HashWordList from './components/HashWordList'
import './css/normalize.css';
import './css/skeleton.css';
import './css/style.css';
import registerServiceWorker from './registerServiceWorker';
// import App from './App';

//i think i need to be done with this particular experiment... I want it to be cleaner
//do I want to move forward withthis thing at all? What if it was actually something cool... what woud be essential?

//the most essential thing would be a clean minimal interface to write notes.
//as you add hashtags, they appear on the side
//when you save notes you can view a backlog of all your note history
//you can filter your notes by date or tag.

//add button only appears if there is text that can be saved

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
        // {
        //   id: 0,
        //   content: 'doing #yoga is good for your #health. It helps open your #thirdeye',
        //   tags: [
        //     '#yoga',
        //     '#thirdeye',
        //     '#health'
        //   ]
        // },
        // {
        //   id: 1,
        //   content: 'make sure this #weekend to do some hard #chillin',
        //   tags: [
        //     '#chillin',
        //     '#weekend'
        //   ]
        // }
      ],
      hashedWords: [
        // '#yoga',
        // '#thirdeye',
        // '#health',
        // '#chillin',
        // '#weekend',
        // '#weed',
        // '#drank',
        // '#sleep'
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
        <div className="row">
          <div className="columns eight">
            <NoteForm addHashWord={this.addHashWord} addNote={this.addNote}/>
          </div>
          <div className="columns four">
            <HashWordList hashedWords={this.state.hashedWords} />
          </div>
        </div>
        <div className="row">
          <Note notes={this.state.notes} />
        </div>
      </div>
    )
  }
}

const NotesPage = () => {
  <div>
    <div>
      <div className="row">
      <h4>e c c o  n o t e</h4>
      <div id="main-nav">
        <Link to='/' component={TestPageTwo} className='page-link'>new</Link>
        <Link to='/notes' component={TestPageTwo} className='page-link'>notes</Link>
        <Link to='/about' component={TestPageTwo} className='page-link'>about</Link>
        <HashWordList hashedWords={this.state.hashedWords} />
      </div>
      </div>

      <div className="row">
        <Note notes={this.state.notes} />
      </div>
    </div>
  </div>
}

const TestPage = () => (
  <div>this is from my dashboard
    <Link to='/test' component={TestPageTwo}>testpagetwo</Link>
  </div>
)

const TestPageTwo = () => (
  <div>this is from my page two</div>
)

const app = (
  <BrowserRouter>
    <div>
      <Header />
      <div className="container" style={{ marginTop: "15px"}}>
        <h4>e c c o  n o t e</h4>
        <div id="main-nav">
          <Link to='/' component={TestPageTwo} className='page-link'>new</Link>
          <Link to='/notes' component={TestPageTwo} className='page-link'>notes</Link>
          <Link to='/about' component={TestPageTwo} className='page-link'>about</Link>
        </div>
        <Route path='/' exact={true} component={TangerineNotes} />
        <Route path='/test' component={TestPageTwo} />
        <footer>444</footer>
      </div>
    </div>
  </BrowserRouter>

)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
