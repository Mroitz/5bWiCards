import './App.css'
import Header from './components/Header'
import PeopleContainer from './components/PeopleContainer'

function App() {
  return (
    <>
      <div>
        <div className="bg-gray-500">
          <Header />
        </div>
        <div>
          <PeopleContainer />
        </div>

      </div >
    </>
  )
}

export default App
