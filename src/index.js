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
  addNote(e) {
    e.preventDefault()
    const note = e.target.elements.note.value;
    console.log(note)
    e.target.elements.note.value = ''
  }
  showKey(e) {
    let input = e.target.value
    input = input[input.length -1]
    console.log('key get', input)

    if(input === '#'){
      console.log('hashntime!!')
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addNote}>
          <textarea name="note" onKeyUp={this.showKey}/>
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
          <h4>Tangerine Notes <span role="img" alt="tangerine emoji" aria-label="tangerine emoji">🍊</span></h4>
          <AddNote />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<TangerineNotes />, document.getElementById('root'));
registerServiceWorker();
