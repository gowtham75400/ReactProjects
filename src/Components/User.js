import React, { useState } from 'react'
import './user.css'

const User = () => {

    const [user,setUser] = useState({
        name:'gowtham',
        age:20,
        gender:"Male",
        isMarries:true,
        country:''
    })

    const handle = (e) => {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({...user,[name]: value});
    }
return (
    
    <div>
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>age</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>gender</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>isMarries</td>
                    <td>{user.isMarries ? "Married": "unMarried"}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{user.country}</td>
                </tr>
            </tbody>

        </table>

        <form>
            <input type='text' placeholder='Enter name' value={user.name} name='name' onChange={handle}/>
            <input type='text' placeholder='Enter Age' value={user.age} name='age' onChange={handle}/>
            <label htmlFor='Male'>
                <input type='radio' id='Male' value="Male" checked={user.gender === "Male" } name='gender' onChange={handle}/>Male
            </label>
            <label htmlFor='female'>
                <input type='radio' id='Female' value="female" checked={user.gender === "Female"} name='gender' onChange={handle}/>female
            </label>
            <label htmlFor='isMarries'>
                <input type='radio' id='isMarries ' value={user.isMarries} name='isMarries' onChange={handle} checked={user.isMarries}/>
                isMarries          </label>
        </form>
        <div>
            <label htmlFor='country'>Select Country</label>
            <select name='country' id='country' value={user.country} onChange={handle}>
                <option value='india'>India</option>
                <option value='dubai'>Dubai</option>
                <option>JP</option>
            </select>
        </div>
    </div>
)
}

export default User