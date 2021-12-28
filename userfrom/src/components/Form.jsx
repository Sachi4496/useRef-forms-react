import { useRef } from "react";
export const Form = ({ setForm, form, handleSubmit}) => {
    const ref = useRef("");

    const handleChange = (e) => {
        let { name, value } = e.target;
        console.log(e);
        value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setForm({...form,[name]: value});
    }

    const fileInput = (e) => {
        setForm({...form, selectedFile: ref.current.files[0]})
    }
    console.log(form)
    return (<>
            <from onSubmit={handleSubmit}>
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
                    <input type="number" name="salary" onChange={handleChange} placeholder="Enter your name" />
                </div>
                <div>
                    <label>Marital State :</label>
                    <input type="text" name="maritalstate" onChange={handleChange} placeholder="Enter your name" />
                </div>
                <div>
                    <label>profile photo :</label>
                    <input type="file" ref={ref} name="selectedFile" onChange={fileInput} />
                </div>
                <input type="submit" />
            </from>
    </>
    )
}