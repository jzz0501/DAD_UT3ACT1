import { Button } from "@mui/material"
import Navbar from "./HomeComponents/Navbar"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useState } from "react"
import { useEffect } from "react"
import MaterialTable from "@material-table/core";
import { useNavigate } from "react-router-dom"
import { ExportCsv, ExportPdf } from "@material-table/exporters";

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
                <div>
                    <MaterialTable
                        data={data}
                        columns={columns}
                        options={{
                            filtering: true,
                            columnsButton: true,
                            exportMenu: [
                                {
                                    label: "Export PDF",
                                    exportFunc: (cols, datas) =>
                                    ExportPdf(cols, datas, "myPdfFileName"),
                                },
                                {
                                    label: "Export CSV",
                                    exportFunc: (cols, datas) =>
                                    ExportCsv(cols, datas, "myCsvFileName"),
                                },
                            ],
                        }}
                        renderSummaryRow={({column, data}) => 
                            column.field === "precio"? {
                                value: data.reduce((precio, row) => precio + row.precio, 0),
                                style: {background: "red"}
                            } : undefined
                        }
                    />
                </div>
            }
            <Button onClick={() => navigate('/home')}>Volver</Button>
        </div>
    )
}