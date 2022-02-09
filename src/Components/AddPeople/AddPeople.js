import React, { useState } from 'react';
import {Label} from 'reactstrap'
import axios from 'axios'
import './AddPeople.css'
import { Link, useNavigate } from 'react-router-dom'
// import { useHistory } from "react-router-dom"
export default function AddPeople() {
    let history = useNavigate();
    const [user, setUser] = useState({
        Name: " ",
        Gender: " ",
        Email: " ",
        Date: " ",
        Time: ""
    });

    const { Name, Gender, Date, Time, Email } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        history('/');
    };
    return (
        <div className="container">
            <div className='head'>
                <h1> Submit To Create A Time Sheet</h1>
            </div>
            <div className="form1" className="w-75 mx-auto shadow p-5">
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <Label>Enter Your Name:</Label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your E-mail Address"
                            name="Name"
                            value={Name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <Label>Enter Your E-Mail:</Label>
                        <input
                            type="email"
                            className="form-control form-control-sm"
                            placeholder="Enter Your E-mail Address"
                            name="Email"
                            value={Email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <Label>Enter ur Gender M/F:</Label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Gender M/F"
                            name="Gender"
                            value={Gender}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <Label>Date:</Label>
                        <input
                            type="Date"
                            className="form-control form-control-sm"
                            name="Date"
                            value={Date}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <Label>TIme:</Label>
                        <input
                            type="Time"
                            className="form-control form-control-sm"
                            placeholder="Enter Your Website Name"
                            name="Time"
                            value={Time}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <button className="btn btn-primary btn-block">Submit</button>
                        <Link to='/'><button className="btn btn-primary btn-danger">Cancel</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

