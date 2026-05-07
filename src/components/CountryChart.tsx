import {
  Bar,
  BarChart,
  CartesianGrid, ResponsiveContainer,
  Tooltip,
  XAxis, YAxis,
} from 'recharts'
import type { Country } from '../types/country'

interface CountryChartProps {
  countries: Country[]
  onCountryClick: (country: Country) => void
}

export default function CountryChart({ countries, onCountryClick }: CountryChartProps) {
  // TODO: map countries → flat objects the chart can consume
  // Each item should be: { name: string; population: number }
  const chartData: Array<{ name: string; population: number }> = countries.map((country) => {
    return {
      name: country.name.common,
      population: country.population,
    }
  })

  // TODO: implement the click handler
  // - cast `state` to access activeLabel: (state as { activeLabel?: string }).activeLabel
  // - find the matching Country in countries with .find()
  // - call onCountryClick with the result
  function handleClick(state: unknown) {
    const { activeLabel } = state as { activeLabel?: string }
    const country = countries.find((country) => country.name.common === activeLabel)

    if (country) {
      onCountryClick(country)
    }
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData} onClick={handleClick}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 11 }} />
        <YAxis tickFormatter={(v: number) => `${(v / 1e6).toFixed(0)}M`} />
        <Tooltip formatter={(v) => typeof v === 'number' ? v.toLocaleString() : String(v)} />
        <Bar dataKey="population" fill="#4f86c6" cursor="pointer" />
      </BarChart>
    </ResponsiveContainer>
  )
}
