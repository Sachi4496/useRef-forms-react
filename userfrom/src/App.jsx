import './App.css';
import {Form} from './components/Form';
import {Table} from "./components/Table";
import {useState} from "react";

function App() {

  const [list, userData] = useState(null);

  const getData = (e) => {
    userData(e);
  }
  return (
    <div className="App">
      <Form getData={getData}/>
      <Table list={list}/>
    </div>
  );
}

export default App;
