import Navbar from "./HomeComponents/Navbar";
import { useSelector } from "react-redux";
import Formulario from "./UMComponents/Formulario";
import { useState } from "react";
import { useEffect } from "react";
import Tabla from "./UMComponents/Table";
import { useNavigate } from "react-router-dom";

export default function UserManagement() {

    const [list, setList] = useState([])
    const [control, setControl] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const initList = []
        fetch(`http://localhost:3030/userData`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                json.rows.forEach(element => {
                    initList.push(element)
                })
                setList(initList)
            })
    },[control])

    const update = () => {
        setControl(control+1)
    }
    
    const userData = useSelector(state => state.login)

    const isLoggedin = userData.isAutenticated
    useEffect(() => {
        if(!isLoggedin) {
            navigate('/')
        }
    }, [isLoggedin, navigate])

    return (
        <div>
            <Navbar username={userData.username} userRol={userData.userRol}/>
            <Formulario event={update} userRol={userData.userRol}></Formulario>
            <Tabla list={list} updateEvent={update} userRol={userData.userRol}></Tabla>
        </div>
    )
}