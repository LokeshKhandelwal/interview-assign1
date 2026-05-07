import { useState } from 'react'
import { useCountries } from './hooks/useCountries'
import { getTopCountriesByPopulation } from './utils/transform'
import CountryChart from './components/CountryChart'
import { CountryDetail } from './components/CountryDetail'
import type { Country } from './types/country'
import './index.css'

export default function App() {
  const { countries, loading, error } = useCountries()
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

  const topCountries = getTopCountriesByPopulation(countries, 15)

  // TODO: implement this handler
  // - call setSelectedCountry with the received country
  function handleCountryClick(country: Country) {
    setSelectedCountry(country)
  }

  if (loading) return <p className="status">Loading countries...</p>
  if (error) return <p className="status error">Error: {error}</p>

  return (
    <div className="app">
      <h1>World Population Explorer</h1>

      <CountryChart
        countries={topCountries}
        onCountryClick={handleCountryClick}
      />

      {selectedCountry && <CountryDetail country={selectedCountry} />}
    </div>
  )
}
