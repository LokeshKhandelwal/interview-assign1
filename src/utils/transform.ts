import type { Country } from '../types/country'

/**
 * TODO: Return the top `n` countries sorted by population descending.
 *
 * 
 */
export function getTopCountriesByPopulation(countries: Country[], n: number): Country[] {
  // TODO: implement this function
  return countries
    .sort((a, b) => b.population - a.population)
    .slice(0, n)
}
