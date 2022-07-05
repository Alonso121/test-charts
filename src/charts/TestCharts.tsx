import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AprChart from './AprChart'
import TvlChart from './TvlChart'

type AssetInfo = {
  aprHistory: { date: string; value: number }[]
  tvlStakedHistory: { date: string; value: number }[]
}

const TestCharts = () => {
  const [assetInfo, setAssetInfo] = useState<AssetInfo>()

  const getAssetData = async () => {
    try {
      const res = await fetch('https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_asset_details/BNB_Venus__ETH')
      const data = await res.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  // console.log(assetInfo)

  useEffect(() => {
    getAssetData().then(res => setAssetInfo(res))
  }, [])

  console.log(assetInfo)

  if (!assetInfo) return <Typography variant='h2'>Loading...</Typography>

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h3' sx={{ mb: 4, textAlign: 'center' }}>
        Venus : ETH
      </Typography>
      <Grid sx={{ height: '50vh', justifyContent: 'space-around' }} container>
        <Grid item xs={5}>
          <AprChart aprHistory={assetInfo.aprHistory} />
        </Grid>
        <Grid item xs={5}>
          <TvlChart tvlHistory={assetInfo.tvlStakedHistory} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default TestCharts
