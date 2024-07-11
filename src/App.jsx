import './App.css'
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'

import Main from './components/Main'
import Home from './components/sub-components/Home'
import Practice from './components/sub-components/Practice'
import Assignment from './components/sub-components/Assignment'
import Certify from './components/sub-components/Certify'
import Contest from './components/sub-components/Contest'
import Store from './components/sub-components/Store'
import Contribute from './components/sub-components/Contribute'

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/assignment" element={<Assignment />} />
            <Route path="/certify" element={<Certify />} />
            <Route path="/contest" element={<Contest />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contribute" element={<Contribute />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
