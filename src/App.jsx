import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
// import './scss/_libs.scss'
import './styles/main.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App