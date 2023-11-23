import { useEffect, useState } from "react";
import Formulario from "./HomeComponents/Formulario";
import Navbar from "./HomeComponents/Navbar";
import Tabla from "./HomeComponents/Table";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Home() {
    
    const [list, setList] = useState([])
    const [control, setControl] = useState(0)

    useEffect(() => {
        const initList = []
        fetch(`http://localhost:3030/data`)
            .then(res => res.json())
            .then(json => {
                json.rows.forEach(element => {
                    initList.push(element)
                })
                setList(initList)
            })
    },[control])

    
    //Utilizar hook useSelector para obtener datos de store (datos de estado actual)
    const userData = useSelector(state => state.login)
    const navigate = useNavigate()

    const isLoggedin = userData.isAutenticated
    useEffect(() => {
        if(!isLoggedin) {
            navigate('/')
        }
    }, [isLoggedin, navigate])

    const update = () => {
        setControl(control+1)
    }

    return (
        <div>
            <Navbar username={userData.username} userRol={userData.userRol}/>
            <Formulario event={update} />
            <Tabla list={list} updateEvent={update} userRol={userData.userRol}/>
        </div>
    )
}