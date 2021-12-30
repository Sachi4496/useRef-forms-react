import './App.css';
import {Form} from './components/Form';
import {useState} from "react";

function App() {

  const [list, userData] = useState([]);

  const getData = (e) => {
    userData(e);
    console.log("ee",e);
  }
  return (
    <div className="App">
      <Form getData={getData}/>
      {/* {list.map((e,i)=>(
                <Table key={i} list={e} />
            ))} */}
            {/* <Table list={list} /> */}
    </div>
  );
}

export default App;
