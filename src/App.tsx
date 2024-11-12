import './App.css'
import Header from './components/Header'
import PeopleContainer from './components/PeopleContainer'

function App() {
  return (
    <>
      <div className="bg-green-400">
        <div className="bg-gray-500">
          <Header />
        </div>
        <div className="bg-red-600">
          <PeopleContainer />
        </div>

      </div >
    </>
  )
}

export default App
