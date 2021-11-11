import { Switch, Route } from 'react-router-dom'
import Container from './components/Container/Container'

import HomeView from '../src/components/views/HomeView/HomeView'
import HeroDetailsView from './components/views/HeroDetailsView/HeroDetailsView'

const App = () => {
  return (
    <Container>
      <Switch>
        <Route path='/' exact>
          <HomeView />
        </Route>

        <Route path='/superheros/:superheroId'>
          <HeroDetailsView />
        </Route>
      </Switch>
    </Container>
  )
}

export default App
