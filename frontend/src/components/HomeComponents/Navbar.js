import { AppBar, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/storelogin";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <AppBar position="static">
            <Container maxWidth="x1">
                <Toolbar>
                    <Grid container spacing={5}>
                        <Grid item xs={2}>
                            <Typography variant="h6">{props.userRol==="admin"?<SupervisorAccountIcon/>:<PersonIcon/>}{props.username}</Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Button>Inicio</Button>
                        </Grid>
                        {props.userRol==="admin"&&<Grid item xs={1.5}>
                            <Button onClick={() => navigate('/informes')}>Informes</Button>
                        </Grid>}
                        <Grid item xs={1.5}>
                            <Button>Ayuda</Button>
                        </Grid>
                        <Grid item xs={3.5} />
                        <Grid item xs={2}>
                            <Button variant="contained" onClick={() => {
                                dispatch(loginActions.logout())
                            }}>Salir</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}