import './App.css';
import {From} from './components/Form';
import {useState} from "react";

function App() {
  const data = {
    name:"",
    age:"",
    address:"",
    department:"",
    salary:"",
    maritalstate:"",
    selectedFile:"",
  }

  const [form, setForm] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="App">
      <From setForm={setForm} form={form} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
