import { Avatar, Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginActions } from '../store/storelogin'

export default function Login() {

    const [text,setText] = useState({username:'', password:''})

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const acceder = () => {
        if(!(text.username === ''||text.password === '')) {
            fetch(`http://localhost:3030/login?user=${text.username}&password=${text.password}`)
            .then(res => res.json())
            .then(json => {
                if(json.data.nombre!==undefined) {       
                    dispatch(loginActions.login({
                        name: json.data.nombre,
                        rol: json.data.rol
                    }))
                    navigate('/home')
                } else {
                    alert('usuario o password incorrecto')
                }
            })
        } else {
            alert('campo vacio')
        }
    }

    return (
        
        <Container align='center'>

            <Typography variant='h3' component='h3'>LogIn</Typography>

            <Grid container width={400} marginTop={2}>
                <Grid item xs={12}>
                    <Paper elevation={4}>
                        <br/>
                        <Avatar/>
                        <Box padding={2}>
                            <TextField 
                                type='username'
                                placeholder='username'
                                onChange={(event) => setText({...text, username: event.target.value})}>
                            </TextField>
                            <br/>
                            <TextField 
                                type='password'
                                placeholder='password'
                                style={{marginTop: 10}}
                                onChange={(event) => setText({...text, password: event.target.value})}>
                            </TextField>
                            <br/>
                            <Button variant='contained'
                                    style={{marginTop: 10}}
                                    onClick={acceder}
                            >Acceder</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    )
}