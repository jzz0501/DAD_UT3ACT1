import { Button } from "@mui/material"
import Navbar from "./HomeComponents/Navbar"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import InformesColeccion from "./InformesColeccion"

export default function Informes() {

    const userData = useSelector(state => state.login)
    const [control, setControl] = useState(false)
    const [data, setData] = useState([])
    const columns = [
        { title: "id_item", field: "id", filtering: false },
        { title: "nombre_item", field: "nombre" },
        { title: "marca", field: "marca" },
        { title: "tipo", field: "tipo", filtering: false },
        { title: "precio", field: "precio" , type: "numeric", filtering: false }
    ]
    const navigate = useNavigate()

    useEffect(() => {
        if(control) {
            const initList = []
            fetch(`http://localhost:3030/data`)
                .then(res => res.json())
                .then(json => {
                    json.rows.forEach(element => {
                        initList.push(element)
                    })
                    setData(initList)
                })
        }
    },[control])

    return (
        <div>
            <Navbar username={userData.username} userRol={userData.userRol}/>
            <Button variant="contained" onClick={() => control?setControl(false):setControl(true)}>Informes Coleccion</Button>
            {
                control
                &&
                <InformesColeccion data={data} columns={columns}/>
            }
            <Button onClick={() => navigate('/home')}>Volver</Button>
        </div>
    )
}