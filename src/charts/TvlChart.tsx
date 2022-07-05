import React from 'react'
import { TvlData } from '@/commons/commonTypes'
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'
import { Paper, Typography } from '@mui/material'

type ITvlChart = {
  tvlHistory: TvlData[]
}

const TvlChart: React.FC<ITvlChart> = ({ tvlHistory }) => {
  return (
    <Paper sx={{ width: '100%', height: '400px', p: 3 }}>
      <Typography textAlign='center'>Asset APR (y)</Typography>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          margin={{
            top: 10,
            right: 30,
            left: 50,
            bottom: 0
          }}
          width={500}
          height={400}
          data={tvlHistory}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <Area type='monotone' dataKey='value' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  )
}

export default TvlChart
