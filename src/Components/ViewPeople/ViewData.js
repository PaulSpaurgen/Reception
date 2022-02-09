import React, { useEffect, useState } from 'react';
import './ViewData.css'
import Image from '../Images/Data.jpg'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function ViewData() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/Users")
    setUsers(result.data)
  }

  return (
    <div className='Main'>
      <div className='Head'>
        <h1>Recreation Time Sheet</h1>
      </div>
      <div className='Content'>
        <img src={Image} alt="Background" />
        <div className='Buto'>
          <Link to='/'><Button>Home</Button></Link>
        </div>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Date of Booking</th>
              <th scope="col">Time</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {
              Users.map((user, index) => (
                <tr>
                  <th scope='row'>{index + 1}</th>
                  <td>{user.Name}</td>
                  <td>{user.Gender}</td>
                  <td>{user.Date}</td>
                  <td>{user.Time}</td>
                  <td>{user.Email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
