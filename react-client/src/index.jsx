import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import app from './reducers/index.jsx';
import List from './components/List.jsx';

const store = createStore(app);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  render () {
    return (
    <Provider store={store}>
      <div>
        <h1>Item List</h1>
        <List items={this.state.items}/>
      </div>
    </Provider>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));