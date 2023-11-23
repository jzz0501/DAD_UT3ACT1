import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material//Delete';

export default function Tabla(props) {

    const { list } = props

    return (
        <TableContainer style={{marginTop: 20}}>
            <Table>
                <TableHead component="thead">
                    <TableRow component="tr">
                        <TableCell component="td">Operacion</TableCell>
                        <TableCell component="td">Nombre</TableCell>
                        <TableCell component="td">Marca</TableCell>
                        <TableCell component="td">Tipo</TableCell>
                        <TableCell component="td">Precio</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody component="tbody">
                    {
                        list.map((row) => {
                            return (
                                <TableRow component="tr" key={row.id}>
                                    <TableCell component="td"><Button onClick={() => {
                                        fetch(`http://localhost:3030/delete?id=${row.id}`)
                                        props.updateEvent()
                                    }} variant="contained"><DeleteIcon/></Button></TableCell>
                                    <TableCell component="td">{row.nombre}</TableCell>
                                    <TableCell component="td">{row.marca}</TableCell>
                                    <TableCell component="td">{row.tipo}</TableCell>
                                    <TableCell component="td">{row.precio}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}