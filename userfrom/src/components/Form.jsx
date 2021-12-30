import { useState, useRef } from "react";
export const Form = ({ getData }) => {

    const ref = useRef(null);

    const [form, setForm] = useState({
        name: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        maritalstate: "",
        profile: "",
    }
    )

    const handleChange = (e) => {
        let file = ref.current.files[0]
        console.log("pics",file);
        let  {name , value, checked, type} = e.target
        value = type === "checkbox" ? checked : value;
        setForm({
            ...form,
            [name]: value,
            profile:file,
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        getData(form);
        console.log("submit",form);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name :</label>
                <input type="text" name="name" onChange={handleChange} placeholder="Enter your name" />
            </div>
            <div>
                <label>Age :</label>
                <input type="number" name="age" onChange={handleChange} placeholder="Enter your age" />
            </div>
            <div>
                <label>Address :</label>
                <input type="text" name="address" onChange={handleChange} placeholder="Enter your address" />
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
                <input type="number" name="salary" onChange={handleChange} placeholder="Enter your salary" />
            </div>
            <div>
                <label>Marital State :</label>
                <input type="text" name="maritalstate" onChange={handleChange} placeholder="Enter your Marital State" />
            </div>
            <div>
                <label>profile photo :</label>
                <input type="file" ref={ref} name="profile" onChange={handleChange} />
            </div>
            <input type="submit" />
        </form>
    )
}