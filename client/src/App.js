import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AllAuthors from './components/AllAuthors';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <AllAuthors />
          </Route>
          <Route path="/new">
            <NewAuthor/>
          </Route>
          <Route path="/edit/:id">
            <EditAuthor/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
