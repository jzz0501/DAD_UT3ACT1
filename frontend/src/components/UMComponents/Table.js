import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material//Delete';

export default function Tabla(props) {

    const { list } = props

    return (
        <TableContainer style={{marginTop: 20}}>
            <Table>
                <TableHead component="thead">
                    <TableRow component="tr">
                        {
                            props.userRol==="admin"&&
                            <TableCell component="td">Operacion</TableCell>
                        }
                        <TableCell component="td">Nombre</TableCell>
                        <TableCell component="td">Login</TableCell>
                        <TableCell component="td">Password</TableCell>
                        <TableCell component="td">Rol</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody component="tbody">
                    {
                        list.map((row) => {
                            return (
                                <TableRow component="tr" key={row.id}>
                                    {   
                                        props.userRol==="admin"&&
                                        <TableCell component="td">
                                            <Button onClick={() => {
                                                fetch(`http://localhost:3030/delete?id=${row.id}`)
                                                props.updateEvent()
                                            }} variant="contained">
                                                <Tooltip title="eliminar">
                                                    <DeleteIcon/>
                                                </Tooltip>
                                            </Button>
                                        </TableCell>
                                    }
                                    <TableCell component="td">{row.nombre}</TableCell>
                                    <TableCell component="td">{row.login}</TableCell>
                                    <TableCell component="td">{row.password}</TableCell>
                                    <TableCell component="td">{row.rol}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}