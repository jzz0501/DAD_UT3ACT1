import { Button, Grid, Tooltip } from "@mui/material"
import Navbar from "./HomeComponents/Navbar"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import InformesColeccion from "./InformesColeccion"

export default function Informes() {

    const navigate = useNavigate()
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


    const [userControl, setUserControl] = useState(false)
    const [user, setUser] = useState([])
    const userColumns = [
        { title: "nombre_user", field: "nombre" },
        { title: "login", field: "login", filtering: false },
        { title: "password", field: "password", filtering: false },
        { title: "rol", field: "rol", filtering: false }
    ]

    useEffect(() => {
        if(userControl) {
            const initList = []
            fetch(`http://localhost:3030/userData`)
                .then(res => res.json())
                .then(json => {
                    json.rows.forEach(element => {
                        initList.push(element)
                    })
                    setUser(initList)
                })
        }
    },[userControl])

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Navbar username={userData.username} userRol={userData.userRol}/>
                </Grid>
                <Grid item xs={12} style={{display: "flex", justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                    <Tooltip title="informes coleccion" arrow>
                        <Button variant="contained" onClick={() => control?setControl(false):setControl(true)}>Informes Coleccion</Button>
                    </Tooltip>
                </Grid>
                {
                    control
                    &&
                    <Grid item xs={12} style={{justifyContent: 'center', marginTop: 10}}>
                        <InformesColeccion data={data} columns={columns} informesTitle="coleccion item"/>
                    </Grid>
                }

                <Grid item xs={12} style={{display: "flex", justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                    <Tooltip title="informes coleccion user" arrow>
                        <Button variant="contained" onClick={() => userControl?setUserControl(false):setUserControl(true)}>Informes Coleccion User</Button>
                    </Tooltip>
                </Grid>
                {
                    userControl
                    &&
                    <Grid item xs={12} style={{justifyContent: 'center', marginTop: 10}}>
                        <InformesColeccion data={user} columns={userColumns} informesTitle="coleccion user" />
                    </Grid>
                }
                <Grid item xs={12} style={{display: "flex", justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                    <Tooltip title="volver" arrow>
                        <Button onClick={() => navigate('/home')}>Volver</Button>
                    </Tooltip>
                </Grid>
            </Grid>
        </div>
    )
}