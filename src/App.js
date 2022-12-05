import './App.css';
import Kep from './Kep';

const kepTomb =[
  {
    id:1,
    cim: "nyuszi 1",
    eleresiut: "./kep1.jpg",
    ar: 1500
  },
  {
    id:2,
    cim: "nyuszi 2",
    eleresiut: "./kep2.jpg",
    ar: 2500
  },
  {
    id:3,
    cim: "nyuszi 3",
    eleresiut: "./kep3.jpg",
    ar: 1000
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>
      <article>
      {
        kepTomb.map((kep, index)=>{
          return(<Kep kepObj={kep} key={index}/>)
        })
      }
      </article>
      <footer>
        <p>Weinberger Péter</p>
      </footer>
    </div>
  );
}

export default App;
