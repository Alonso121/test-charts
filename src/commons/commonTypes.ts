export interface Asset {
  aprHistory: AprData[]
  tvlStakedHistory: TvlData[]
}

export interface AprData {
  date: string
  value: number
}

export interface TvlData {
  date: string
  value: number
}
