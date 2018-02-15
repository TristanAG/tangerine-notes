import React from 'react';
import ReactDOM from 'react-dom';
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
      hashedWords: [
        '#yoga',
        '#thirdeye',
        '#health'
      ]
    }
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
              <AddNote addHashWord={this.addHashWord}/>
            </div>
            <div className="columns six">
              {this.state.hashedWords.map((hashWord) => (
                <p key={hashWord} className="hash-word">{hashWord}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


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
    this.getKey = this.getKey.bind(this)
    this.startAddHashWord = this.startAddHashWord.bind(this)
    this.hashWord = ''
    this.recording = false

    this.state = {
      newHashWord: ''
    }
  }

  startAddHashWord(hashWord) {
    this.props.addHashWord(hashWord)
  }

  addNote(e) {
    e.preventDefault()
    const note = e.target.elements.note.value;
    console.log(note)
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
        <form onSubmit={this.addNote}>
          <textarea name="note" onKeyDown={this.getKey}/>
          <br />
          <button type="submit">add</button>
        </form>
      </div>
    )
  }
}



ReactDOM.render(<TangerineNotes />, document.getElementById('root'));
registerServiceWorker();
