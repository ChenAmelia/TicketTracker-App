import "./App.scss";
import Nav from "./Components/Nav/Nav";
import Counter from "./Components/Counter/Counter";
import TeamInfo from "./Components/TeamInfo/TeamInfo";
import FinalCard from "./Components/FinalCard/FinalCard";
import team from './assets/data/team.js';


const App = () => {

  //map function

  const cardsList = team.map((employee) => {
    return (
      <FinalCard key={employee.id} name = {employee.name} role = {employee.role}/>
    )
  })

  return (
    <div className="app">
      <Nav />

      <div className="container">
        <div className="container__cardList">
          {cardsList}
        </div>

        

      </div>

    </div>
  )
}

export default App