import React from 'react';
import NavBar from './nav-bar';
import Properties from './propeties';
import AddProperty from './add-property';
import '../styles/app.css';
import {
  Route,
  Switch,
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    );
  }
}

export default App;
