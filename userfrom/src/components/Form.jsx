import { useRef, useState, useEffect } from "react";
import { Table } from "./Table"
import "./form.css";
export const Form = () => {
  const ref = useRef(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [form, setForm] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    single: "",
    married: "",
    file: "",
  });
  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    fetch(`http://localhost:3001/users?_page=${page}&_limit=1`)
      .then((d) => d.json())
      .then((res) => setData(res));
  };

  const handleChange = (e) => {
    let file;
    if (ref.current.files.length !== 0) {
      file = URL.createObjectURL(ref.current.files[0]);
    }
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;
    setForm({
      ...form,
      [name]: value,
      file: file,
    });
  };
  // console.log("form", form);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, form]);
    const payload = {
      name: form.name,
      age: form.age,
      address: form.address,
      department: form.department,
      salary: form.salary,
      single: form.single,
      married: form.married,
      file: form.file,
    };
    fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getData();
    });
  };
  console.log("page", page)
  const salarySort = (val) => {
    fetch(`http://localhost:3001/users?_sort=salary&_order=${val}`)
      .then((e) => e.json())
      .then((e) => {
        console.log("sort", e);
        setData(e)
      });
  };
  console.log("inside sort", data)
  return (
    <>
      <div className="main">
        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name :</label>
              <input style={{ marginLeft: "50px" }}
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label>Age :</label>
              <input style={{ marginLeft: "62px" }}
                type="number"
                name="age"
                onChange={handleChange}
                placeholder="Enter your age"
              />
            </div>
            <div>
              <label>Address :</label>
              <input style={{ marginLeft: "36px" }}
                type="text"
                name="address"
                onChange={handleChange}
                placeholder="Enter your address"
              />
            </div>
            <div>
              <label>Department :</label>
              <select name="department" onChange={handleChange} style={{ marginLeft: "10px" }}>
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
              <input style={{ marginLeft: "52px" }}
                type="number"
                name="salary"
                onChange={handleChange}
                placeholder="Enter your salary"
              />
            </div>
            <div>
              <label>Marital State :</label>
              <input onChange={handleChange} type="checkbox" name="single" style={{ marginLeft: "10px" }}></input>
              <label>Single</label>
              <input onChange={handleChange} type="checkbox" name="married"></input>
              <label>Married</label>
            </div>
            <div>
              <label>profile photo :</label>
              <input style={{ marginLeft: "10px" }}
                type="file"
                ref={ref}
                name="file"
                onChange={handleChange}
                accept="image/png image/jpg"
              />
            </div>
            <input type="submit" style={{ marginRight: "440px" }} />
          </form>
        </div>
        <div className="dataDiv">
          <Table list={data} />
          <button onClick={() => setPage(page - 1)}>prev</button>
          <button onClick={() => setPage(page + 1)}>next</button>
          <br />
          <button onClick={() => salarySort("asc")}>Salary Low to High</button>
          <button onClick={() => salarySort("desc")}>Salary High to Low</button>
        </div>
      </div>

    </>
  );
};

