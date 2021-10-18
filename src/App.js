
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Route exact path="/">
           <Home />
        </Route>
        <Route path="/addcontact">
            <AddContact />
        </Route>
        <Route path='/editcontact/:id'>
            <EditContact name="akk"/>
        </Route>
     </div>
    </Provider>
    
  );
}

export default App;
