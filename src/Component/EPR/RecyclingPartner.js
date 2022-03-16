import React from 'react';
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { recyclingcolumns,recyclingPartner } from "../../Misc/EPR/Data";
const RecyclingPartner = () => {
    return (
        <>
            <Box sx={{borderRadius:"12px",height:"400px",width:"100%",mt:2,mb:2}}>
                <DataGrid
                    rows={recyclingPartner}
                    columns={recyclingcolumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    sx={{"& .MuiDataGrid-renderingZone":{maxHeight: "none !important"},"& .MuiDataGrid-cell":{lineHeight: "unset !important",maxHeight: "none !important",whiteSpace: "normal"},"& .MuiDataGrid-row":{maxHeight: "none !important"},}}
                />
            </Box> 
        </>
    );
};

export default RecyclingPartner;