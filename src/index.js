import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import './css/skeleton.css';
import './css/style.css';
import registerServiceWorker from './registerServiceWorker';
// import App from './App';

const Header = () => (
  <header>
    <div className="container">
      <a href="http://tristangruener.com">tristangruener.com</a>
    </div>
    <hr />
  </header>
)

class AddNote extends React.Component {
  constructor(props){
    super(props)
    this.showKey = this.showKey.bind(this)
    this.hashWord = ''
    this.recording = false

    this.state = {
      hashWord: ''
    }
  }

  addNote(e) {
    e.preventDefault()
    const note = e.target.elements.note.value;
    console.log(note)
    e.target.elements.note.value = ''
  }

  showKey(e) {
    const input = e.target.value
    const character = input[input.length-1]

    if(character === '#' && !this.recording){
      this.recording = true
    }

    if(character === ' ' && this.recording){
      console.log('state hashword ', this.state.hashWord)
      this.recording = false

      //now i think the idea is to actually print out the new hashWord to the screen
      this.setState(() => ({
        hashWord: this.hashWord
      }))
      this.hashWord = ''
      console.log(this.state.hashWord)
    }

    if(this.recording){
      this.hashWord += character
    }


  }

  render() {
    return (
      <div>
        <form onSubmit={this.addNote}>
          <textarea name="note" onKeyDown={this.showKey}/>
          <br />
          <button type="submit">add</button>
        </form>
      </div>
    )
  }
}

class TangerineNotes extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ marginTop: "15px"}}>
          <h4>Tangerine Notes
            <span role="img" alt="tangerine emoji" aria-label="tangerine emoji">🍊</span>
          </h4>
          <AddNote/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<TangerineNotes />, document.getElementById('root'));
registerServiceWorker();
