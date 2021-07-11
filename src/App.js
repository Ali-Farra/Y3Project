import React from 'react';
import Nav from './Multi/Nav';
import './App.css';
import Home from './Main/Home.js';
// import Eco from './components/TOPICS/Eco.js'
// import Space from './components/TOPICS/Space.js'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import TechHero from './Tech/Hero';
import SportsHero from './Sports/HeroTwo';
import EduHero from './Edu/HeroEdu';
import EcoHero from './Eco/HeroEco';
import SpaceHero from './Space/HeroSpace';
import Ideas from './Tech/Ideas';
import IdeasTwo from './Sports/IdeasTwo';
import EduIdeas from './Edu/IdeasEdu';
import EcoIdeas from './Eco/IdeasEco';
import SpaceIdeas from './Space/IdeasSpace';
import { ideaData } from './Tech/Ideas/data';
import { SportsIdeaData } from './Sports/IdeasTwo/data';
import { EduIdeaData } from './Edu/IdeasEdu/data';
import { EcoIdeaData } from './Eco/IdeasEco/data';
import { SpaceIdeaData } from './Space/IdeasSpace/data';



function App() {
    return (
      <>
        < Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path="/Sports">
              <GlobalStyle />
              <SportsHero />
            <Route path="/Sports/Ideas">
              <IdeasTwo heading='DID YOU KNOW ‽' data={SportsIdeaData} />
            </Route>
          </Route>

          {/* <Route path='/Eco' exact component={Eco}/> */}

          <Route path="/Edu">
              <GlobalStyle />
              <EduHero />
            <Route path="/Edu/Ideas">
              <EduIdeas heading='DID YOU KNOW ‽' data={EduIdeaData} />
            </Route>
          </Route>

          <Route path="/Eco">
              <GlobalStyle />
              <EcoHero />
            <Route path="/Eco/Ideas">
              <EcoIdeas heading='DID YOU KNOW ‽' data={EcoIdeaData} />
            </Route>
          </Route>

          <Route path="/Space">
              <GlobalStyle />
              <SpaceHero />
            <Route path="/Space/Ideas">
              <SpaceIdeas heading='DID YOU KNOW ‽' data={SpaceIdeaData} />
            </Route>
          </Route>

          {/* <Route path='/Space' exact component={Space}/> */}
          <Route path='/tech'>
          <GlobalStyle />
              <TechHero />
              <Route path="/tech/Ideas">
              <Ideas heading='DID YOU KNOW ‽' data={ideaData} />
            </Route>
              </Route>
        </Switch>
        </Router>
      </>
    );
}

export default App;
