import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Charts from '../src/components/charts/Charts'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/Charts' component={Charts}/>
          </Switch>
        </Router>
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();