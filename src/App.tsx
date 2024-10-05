import './App.css'
// import usePokemonList from './hooks/usePokemonList'
// import usePokemonDetails from './hooks/usePokemonDetail'
import Header from './components/Header'
import DisplayUtils from './components/DisplayUtils'

function App() {
  // Use the custom hook to fetch pokemon list
  // Example below
  // const list = usePokemonList();
  // const detail = usePokemonDetails("bulbasaur");

  return (
    <div className='app-section w-[320px] h-[600px] bg-maritime-blue'>
      <Header />
      <DisplayUtils />
      {/* <h1 className='text-red-700'>Hello this is Archie</h1> */}
      {/* Start the development here */}
      {/* Use react-router-dom Expected routes:  */}
      {/* 1. Home path: "/" */}
      {/* 1. Details path: "/details:" */}
    </div>
  )
}

export default App
