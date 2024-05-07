import React from 'react'
import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { rows, columns } from './data'

export default function Invoices() {
  return (
    <Box sx={{ height: 600, width: '100%', mx: "auto" }}>
      <DataGrid
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows} columns={columns} />
    </Box>
  )
}
