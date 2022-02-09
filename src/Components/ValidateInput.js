import React, { useState, useEffect } from "react";
function ValidateInput((Obj)=>{
    const [Users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/Users")
        setUsers(result.data)
    }
    console.log(Users)
    return

})
