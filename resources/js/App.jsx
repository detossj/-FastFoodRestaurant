import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LayoutPublic from './layouts/LayoutPublic';
import Home from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<LayoutPublic/>}>
              <Route index element={<Home/>}/>

            </Route>
        </Routes>
    </Router>
  )
}


export default App
if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    )
}
