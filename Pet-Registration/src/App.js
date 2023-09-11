import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import ApplicationDetails from './components/ApplicationDetails';
import Review from './components/Review';
import Information from './components/Information';

import PetDetails from './components/PetDetails';

import FileUpload from './components/FileUpload';
import AddressContactPage from './components/AddressContactPage';
import { GlobalStateProvider } from './components/GlobalStateContext'; // Import the context

function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Information} />
            <Route path="/application-details" component={ApplicationDetails} />
            <Route path="/address-contact" component={AddressContactPage} />
            <Route path="/pet-details" component={PetDetails} />
            <Route path="/file-upload" component={FileUpload} />
            <Route path="/review" component={Review} />
          </Switch>
        </Router>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
