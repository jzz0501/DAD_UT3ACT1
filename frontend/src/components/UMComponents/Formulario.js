import { Button, Grid, Paper, TextField, Box, Tooltip } from "@mui/material";
import { useState } from "react";

export default function Formulario(props) {

    const [data, setData] = useState({
        nombre: '',
        login: '',
        password: '',
        rol: ''
    })

    return (
        <Paper elevation={5} style={{marginTop: 20, height: 150}}>
            <Box style={{alignContent: "center"}}>
                <br/>
                <Grid container style={{justifyContent: "center"}}>
                    <Grid item xs={3}>
                        <TextField type="nombre" value={data.nombre} placeholder="nombre" onChange={(event) => setData({...data, nombre: event.target.value})}></TextField>
                    </Grid> 
                    <Grid item xs={3}>
                        <TextField type="login" value={data.marca} placeholder="login" onChange={(event) => setData({...data, login: event.target.value})}></TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField type="password" value={data.tipo} placeholder="password" onChange={(event) => setData({...data, password: event.target.value})}></TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField type="rol" value={data.precio} placeholder="rol" onChange={(event) => setData({...data, rol: event.target.value})}></TextField>
                    </Grid>
                    <Grid>
                        <Tooltip title="insertar">
                            <Button variant="contained" type="submit" style={{marginTop: 20}} onClick={() => {
                                fetch(`http://localhost:3030/insertUser?nombre=${data.nombre}&login=${data.login}&password=${data.password}&rol=${data.rol}`)
                                    .then(res => res.json())
                                    .then(json => {
                                        if(json.result.affectedRows===1){
                                            alert('datos guardado')
                                        }
                                    })
                                props.event()
                                setData({
                                    nombre: "",
                                    login: "",
                                    password: "",
                                    rol: ""
                                })
                            }}>Insertar</Button>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}