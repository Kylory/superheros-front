import { Switch, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { useState } from 'react'
import AddSuperheroBtn from './components/AddSuperheroBtn/AddSuperheroBtn'
import AddSuperheroModal from './components/AddSuperheroModal/AddSuperheroModal'

// import HomeView from "../src/components/views/HomeView/HomeView";
// import MoviesView from "./components/views/MoviesView/MoviesView";
// import MoviesDetailsView from "./components/views/MoviesDetailsView/MoviesDetailsView";
// import Navigation from "./components/Navigation/Navigation";
// import NotFoundView from "./components/views/NotFoundView";

const HomeView = lazy(() =>
  import(
    '../src/components/views/HomeView/HomeView' /*webpackChunkName: "home-view" */
  )
)
// const MoviesView = lazy(() =>
//   import(
//     './components/views/MoviesView/MoviesView' /*webpackChunkName: "movies-view" */
//   )
// )
const MoviesDetailsView = lazy(() =>
  import(
    './components/views/MoviesDetailsView/MoviesDetailsView' /*webpackChunkName: "movies-details-view" */
  )
)
// const Navigation = lazy(() =>
//   import(
//     './components/Navigation/Navigation' /*webpackChunkName: "navigation" */
//   )
// )
// const NotFoundView = lazy(() =>
//   import(
//     './components/views/NotFoundView/NotFoundView' /*webpackChunkName: "not-found-view" */
//   )
// )

const App = () => {
  const [stateShowModal, setStateShowModal] = useState(false)

  const openModal = (e) => {
    setStateShowModal(true)
  }

  const closeModal = () => {
    setStateShowModal(false)
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddSuperheroBtn onClick={openModal} />
      {stateShowModal && (
        <AddSuperheroModal closeModal={closeModal}></AddSuperheroModal>
      )}
      <Switch>
        <Route path='/' exact>
          <HomeView />
        </Route>

        <Route path='/movies/:movieId'>
          <MoviesDetailsView />
        </Route>
      </Switch>
    </Suspense>
  )
}

export default App
