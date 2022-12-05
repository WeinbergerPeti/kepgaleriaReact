import './App.css';
import Kep from './Kep';

const kepTomb =[
  {
    id:1,
    cim: "nyuszi 1",
    eleresiut: "./kepek/kep1.jpg",
    ar: 1500
  },
  {
    id:2,
    cim: "nyuszi 2",
    eleresiut: "./kepek/kep2.jpg",
    ar: 2500
  },
  {
    id:3,
    cim: "nyuszi 3",
    eleresiut: "./kepek/kep3.jpg",
    ar: 1000
  }
]

function kosarKezeles(adat)
{
  // console.log(adat);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>
      <article>
      {
        kepTomb.map((kep, index)=>{
          return(<Kep
            kepObj={kep}
            key={index}
            kosarKezeles={kosarKezeles}
            />)
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
