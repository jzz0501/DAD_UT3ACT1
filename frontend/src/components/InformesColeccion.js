import { ExportCsv, ExportPdf } from "@material-table/exporters";
import MaterialTable from "@material-table/core";

export default function InformesColeccion(props) {
    return (
        <div>
            <MaterialTable
                data={props.data}
                columns={props.columns}
                title={props.informesTitle}
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
    )
}