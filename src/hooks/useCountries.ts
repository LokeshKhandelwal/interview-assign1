import { useEffect, useState } from 'react'
import type { Country } from '../types/country'

const API_URL =
  'https://restcountries.com/v3.1/all?fields=name,population,area,flags,capital,region'

interface UseCountriesResult {
  countries: Country[]
  loading: boolean
  error: string | null
}

export function useCountries(): UseCountriesResult {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // TODO: fetch from API_URL
    // - parse the JSON response as Country[]
    // - call setCountries with the result
    // - set loading to false when done
    // - catch any errors and set the error state (error.message)
    fetch(API_URL).then((res) => {
      return res.json();
    }).then((data: Country[]) => {
      setCountries(data);
      setLoading(false);
    }).catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  },[])

  return { countries, loading, error }
}
