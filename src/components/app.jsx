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
  state = {
    userID: null,
  };

  handleLogin = (response) => {
    this.setState({ userID: response.userID });
  };

  handleLogout = () => {
    window.FB.logout();
    this.setState({ userID: null });
  };

  render() {
    return (
      <div className="app">
        <NavBar
          onLogin={this.handleLogin}
          userID={this.state.userID}
          onLogout={this.handleLogout}
        />
        <Switch>
          <Route
            exactpath="/"
            component={Properties}
            userID={this.state.userID}
          />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    );
  }
}

export default App;
