
  import './App.css'
  import Header from './App/Header/Header'
  import { Routes, Route } from 'react-router-dom'
  import Footer from './App/Footer/Footer'
  import Main from "./App/Main/Main";
  // import HomePage from './App/Pages/HomePage'
  // import AboutPage from './App/Pages/AboutPage'
  // import ResidentialPage from './App/Pages/ResidentialPage'
  // import CommercialPage from './App/Pages/CommercialPage'

  function App() {

    return (
      <div className="page">
        <div className="app">
          <div className="app__wrapper">
            <Header />
              <Routes>
                {/* <Route path={routesLeft[0].path} element={<HomePage />} />
                <Route path={routesLeft[1].children[0].path} element={<WelcomePage />} />
                <Route path={routesLeft[1].children[1].path} element={<AboutUsPage />} />
                <Route path={routesLeft[1].children[2].path} element={<HistoryPage />} />
                <Route path={routesLeft[2].children[0].path} element={<CommercialZivPage />} />
                <Route path={routesLeft[2].children[1].path} element={<CommercialOrPage />} />
                <Route path={routesRight[0].children[0].path} element={<CafePage />} />
                <Route path={routesRight[0].children[1].path} element={<RestaurantPage />} />
                <Route path={routesRight[1].path} element={<EventsPage />} />
                <Route path={routesRight[2].path} element={<RetailPage />} />
                <Route path={routesRight[3].path} element={<ContactsPage />} /> */}
              </Routes>
              <Main />
            <Footer />
          </div>
        </div>
      </div>
    )
  }

  export default App
