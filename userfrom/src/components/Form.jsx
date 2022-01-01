import { useState, useRef } from "react";
import { Table } from "./Table";
export const Form = ({ getData }) => {
  const ref = useRef(null);

  const [form, setForm] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    single: "",
    married: "",
    profile: "",
  });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    // let file = URL.createObjectURL(ref.current.files[0]);
    let file;
    if (ref.current.files.length !== 0) {
      // this.setState({image: URL.createObjectURL(e.target.files[0])})
      file = URL.createObjectURL(ref.current.files[0]);
    }
    console.log("pics", file);
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;
    setForm({
      ...form,
      [name]: value,
      file: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, form]);
    console.log("submit", form);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Age :</label>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </div>
        <div>
          <label>Address :</label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            placeholder="Enter your address"
          />
        </div>
        <div>
          <label>Department :</label>
          <select name="department" onChange={handleChange}>
            <option value="">Choose an option</option>
            <option value="devlopment">Devlopment</option>
            <option value="testing">Testing</option>
            <option value="devops">DevOps</option>
            <option value="ai">Artificial intelligence</option>
            <option value="hr">HR</option>
          </select>
        </div>
        <div>
          <label>Salary :</label>
          <input
            type="number"
            name="salary"
            onChange={handleChange}
            placeholder="Enter your salary"
          />
        </div>
        <div>
          <label>Marital State :</label>
          <input onChange={handleChange} type="checkbox" name="single"></input>
          <label>Single</label>
          <input onChange={handleChange} type="checkbox" name="married"></input>
          <label>Married</label>
        </div>
        <div>
          <label>profile photo :</label>
          <input
            type="file"
            ref={ref}
            name="profile"
            onChange={handleChange}
            accept="image/png image/jpg"
          />
        </div>
        <input type="submit" />
      </form>

      <Table list={data} />
    </>
  );
};
