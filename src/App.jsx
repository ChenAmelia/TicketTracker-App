import "./App.scss";
import Nav from "./Components/Nav/Nav";
import Counter from "./Components/Counter/Counter";


const App = () => {

  return (
    <div className="app">

      <Nav />

      <div className="container">

        <Counter />



      </div>

    </div>
  )
}

export default App