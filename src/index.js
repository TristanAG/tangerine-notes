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
  </header>
)

class TangerineNotes extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h4>Tangerine Notes 🍊</h4>
        </div>
      </div>
    )
  }
}

const jsx = <h4>Tangerine Notes 🍊</h4>

ReactDOM.render(<TangerineNotes />, document.getElementById('root'));
registerServiceWorker();
