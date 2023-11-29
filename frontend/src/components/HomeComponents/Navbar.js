import { AppBar, Button, Container, Grid, Toolbar, Tooltip, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/storelogin";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useNavigate } from "react-router-dom";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export default function Navbar(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <AppBar position="static">
            <Container maxWidth="x1">
                <Toolbar>
                    <Grid container spacing={5}>
                        <Grid item xs={2}>
                            <Typography variant="h6">
                                {props.userRol==="admin"&&<SupervisorAccountIcon/>}
                                {props.userRol==="user"&&<PersonIcon/>}
                                {props.userRol==="invitado"&&<InsertEmoticonIcon/>}
                                {props.username}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Tooltip title="inicio" arrow>
                                <Button>Inicio</Button>
                            </Tooltip>
                        </Grid>
                        {
                            props.userRol==="admin"
                            &&
                            <Grid item xs={2}>
                                <Tooltip title="informes">
                                    <Button onClick={() => navigate('/informes')}>Informes</Button>
                                </Tooltip>
                            </Grid>
                        }
                        <Grid item xs={2}>
                            <Tooltip title="ayuda" arrow>
                                <Button>
                                    <Link to={'/manual.pdf'} target="_blank">Ayuda</Link>
                                </Button>
                            </Tooltip>
                        </Grid>

                        {
                            props.userRol==="admin"
                            &&
                            <Grid item xs={2}>
                                <Tooltip title="gestion">
                                    <Button onClick={() => navigate('/usermanagement')}>Gestion</Button>
                                </Tooltip>
                            </Grid>
                        }
                        <Grid item xs={2}>
                            <Tooltip title="salir" arrow>
                                <Button variant="contained" onClick={() => {
                                    dispatch(loginActions.logout())
                                }}>Salir</Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}