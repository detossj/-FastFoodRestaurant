import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Example from './components/Example'

const App = () => {
  return (
    <Router>
        <Routes>
            <Route index element={ <Example/> }/>
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
