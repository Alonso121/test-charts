import { AprData } from '@/commons/commonTypes'
import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

type IAprChart = {
  aprHistory: AprData[]
}

const AprChart: React.FC<IAprChart> = ({ aprHistory }) => {
  console.log(aprHistory)

  const toPercent = (value: number, fixed: number = 0) => `${value}%`

  const renderTooltipContent = (o: any) => {
    const { payload = [] } = o

    return (
      <Box
        sx={{
          background: 'linear-gradient(107.39deg, #474F7E 3.48%, #343B61 97.52%)',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          borderRadius: '10px',
          p: '0.5rem',
          color: 'white'
        }}
      >
        {payload.map((entry: any, index: number) => (
          <Box key={`item-${index}`}>{`${entry.name}: ${entry.value}%`}</Box>
        ))}
      </Box>
    )
  }

  return (
    <Paper sx={{ width: '100%', height: '400px', p: 3 }}>
      <Typography textAlign='center'>Asset APR (y)</Typography>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          width={500}
          height={400}
          data={aprHistory}
          stackOffset='expand'
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis tickFormatter={toPercent} />
          <Tooltip content={renderTooltipContent} />
          <Area type='monotone' dataKey='value' stroke='#D37DED' strokeWidth='3px' fill='#8884d8' />
          {/* <Area type='monotone' dataKey='b' stackId='1' stroke='#82ca9d' fill='#82ca9d' /> */}
          {/* <Area type='monotone' dataKey='c' stackId='1' stroke='#ffc658' fill='#ffc658' /> */}
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  )
}

export default AprChart
