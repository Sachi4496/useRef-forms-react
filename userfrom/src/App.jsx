import './App.css';
import {Form} from './components/Form';
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
      <Form setForm={setForm} form={form} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
