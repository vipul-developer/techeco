import React from 'react';
import { Box,Button } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { cpcbcolumns,cpcbPartner } from "../../Misc/EPR/Data";
const CPCBPartner = () => {
    return (
        <>
            <Box sx={{borderRadius:"12px",height:"400px",width:"100%",mt:2,mb:2}}>
                {/* <DataGrid
                    rows={cpcbPartner}
                    columns={cpcbcolumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    sx={{"& .MuiDataGrid-renderingZone":{maxHeight: "none !important"},"& .MuiDataGrid-cell":{lineHeight: "unset !important",maxHeight: "none !important",whiteSpace: "normal"},"& .MuiDataGrid-row":{maxHeight: "none !important"},}}
                /> */}
                <div className="table-responsive">
                    <table className="table table-bordered" style={{borderRadius:"4px"}}>
                        <thead>
                            <tr>
                                {
                                    cpcbcolumns.map((item,index) => (
                                        <th key={item.field}>{item.headerName}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody style={{borderTop:"none"}}>
                            {
                                cpcbPartner.map((item,index) => (
                                    <tr key={item.id}>
                                        <th>{item.id}</th>
                                        <td>{item.name}</td>
                                        <td><Button variant="contained" startIcon={<FileDownloadIcon />} sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#FFF !important",backgroundColor:"#33bc82 !important",textTransform:"capitalize","&:hover":{backgroundColor:"#33bc82 !important",color:"#FFF !important"}}} onClick={() => {window.location.href=`${item.file}`}}>{item.action}</Button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </Box>
        </>
    );
};

export default CPCBPartner;