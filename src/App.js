import React, {Component} from 'react';
import Signin from './components/Signin/Signin';
import BalletForm from './components/BalletForm/BalletForm';
import Register from './components/Register/Register';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      route : 'signin'
    }
  }

  onRouteChange  = (route) => {
    this.setState({ route: route });
  }
  render() {  
    return (
    <div>
      <BalletForm />
    </div>
  )
}
}

export default App;