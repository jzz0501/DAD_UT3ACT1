import { Button, Grid, Paper, TextField, Box } from "@mui/material";
import { useState } from "react";

export default function Formulario(props) {

    const [data, setData] = useState({
        nombre: '',
        marca: '',
        tipo: '',
        precio: ''
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
                        <TextField type="marca" value={data.marca} placeholder="marca" onChange={(event) => setData({...data, marca: event.target.value})}></TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField type="tipo" value={data.tipo} placeholder="tipo" onChange={(event) => setData({...data, tipo: event.target.value})}></TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField type="precio" value={data.precio} placeholder="precio" onChange={(event) => setData({...data, precio: event.target.value})}></TextField>
                    </Grid>
                    <Grid>
                        <Button variant="contained" type="submit" style={{marginTop: 20}} onClick={() => {
                            fetch(`http://localhost:3030/insert?nombre=${data.nombre}&marca=${data.marca}&tipo=${data.tipo}&precio=${data.precio}`)
                                .then(res => res.json())
                                .then(json => {
                                    if(json.result.affectedRows===1){
                                        alert('datos guardado')
                                    }
                                })
                            props.event()
                            setData({
                                nombre: "",
                                marca: "",
                                tipo: "",
                                precio: ""
                            })
                        }}>Insertar</Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}