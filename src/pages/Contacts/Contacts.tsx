// import React from 'react'
import { Box} from '@mui/material';
import { rows, columns } from './data'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function Contacts() {
  return (
    <Box sx={{ height: 600, width: '100%', mx: "auto" }}>
      <DataGrid 
      slots={{
        toolbar: GridToolbar,
      }}
      rows={rows} columns={columns} />
    </Box>
  )
}
