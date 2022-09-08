import "./App.scss";
import Nav from "./Components/Nav/Nav";
import Counter from "./Components/Counter/Counter";
//import CounterCard from "./Components/CounterCard/CounterCard";


const App = () => {

  return (
    <div className="app">
      <Nav />

      <div className="container">

        <div className="counterCard">
          <heading className="counterCard__heading">Customer</heading>
          <Counter />
        </div>

        

      </div>

    </div>
  )
}

export default App