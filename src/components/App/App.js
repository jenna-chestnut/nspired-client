import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import InspoQuote from '../InspoQuote/InspoQuote';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import SignUpPage from '../../routes/SignUpPage/SignUpPage';
import PublicWinWallPage from '../../routes/PublicWinWall/PublicWinWallPage';
import Dashboard from '../../routes/Dashboard/Dashboard';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import ShareGoalPage from '../../routes/ShareGoalPage/ShareGoalPage';
import PersonalGoalPage from '../../routes/PersonalGoalPage/PersonalGoalPage';
import PublicWinPage from '../../routes/PublicWinPage/PublicWinPage';
import CreateGoalPage from '../../routes/CreateGoalPage/CreateGoalPage';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <Header />

          <main> 
          <InspoQuote />

          <Switch>
          <Route exact path='/' component={LandingPage} />

          <Route path='/sign-up' component={SignUpPage} />
          <Route path='/log-in' component={LoginPage} />

          <Route exact path='/win-wall' component={PublicWinWallPage} />
          <Route path='/win-wall/:winId' component={PublicWinPage} />

          <Route path='/dashboard' component={Dashboard} />

          <Route path='/share-win/:goalId' component={ShareGoalPage} />
          <Route path='/create-goal' component={CreateGoalPage} />
          <Route path='/clone-goal/:goalId' component={CreateGoalPage} />
          <Route path='/view-goal/:goalId' component={PersonalGoalPage} />

          <Route component={NotFoundPage} />
          </Switch>

          </main>

          <Footer />
        </div>
      );
    }
}

export default App;
