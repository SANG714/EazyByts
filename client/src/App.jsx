
import './App.css'
import Header from './components/Header'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import CountryNews from './components/CountryNews'
import News from './components/News'
import TopHeadlines from './components/TopHeadlines'

function App() {


  return (
    <>
      <div className='w-full'>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<News/>}/>
          <Route path="/top-headlines/:category" element={<TopHeadlines/>}/>
          <Route path="/country/:iso" element={<CountryNews/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
