import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import InspoQuote from '../InspoQuote/InspoQuote';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../Utils/PrivateRoute'
import PublicOnlyRoute from '../../Utils/PublicOnlyRoute'
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import PublicWinWallPage from '../../routes/PublicWinWall/PublicWinWallPage';
import Dashboard from '../../routes/Dashboard/Dashboard';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import ShareGoalPage from '../../routes/ShareGoalPage/ShareGoalPage';
import PersonalGoalPage from '../../routes/PersonalGoalPage/PersonalGoalPage';
import PublicWinPage from '../../routes/PublicWinPage/PublicWinPage';
import CreateGoalPage from '../../routes/CreateGoalPage/CreateGoalPage';

class App extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
      return (
        <div className="App">

          {this.state.hasError && <p className='error-banner'>Sorry, there was an error. Please refresh the page and try again</p>}

          <Header />
          
          <InspoQuote />

          <main> 

          <Switch>
          <Route exact path='/' component={LandingPage} />

          <PublicOnlyRoute path='/sign-up' component={RegistrationPage} />
          <PublicOnlyRoute path='/login' component={LoginPage} />

          <Route exact path='/win-wall' component={PublicWinWallPage} />
          <PrivateRoute path='/win-wall/:winId' component={PublicWinPage} />

          <PrivateRoute path='/dashboard' component={Dashboard} />

          <PrivateRoute path='/share-win/:goalId' component={ShareGoalPage} />
          <Route path='/create-goal' component={CreateGoalPage} />
          <PrivateRoute path='/clone-goal/:goalId' component={CreateGoalPage} />
          <PrivateRoute path='/view-goal/:goalId' component={PersonalGoalPage} />

          <Route component={NotFoundPage} />
          </Switch>

          </main>

          <Footer />
        </div>
      );
    }
}

export default App;
