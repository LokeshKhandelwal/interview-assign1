import type { Country } from '../types/country'

interface CountryDetailProps {
  country: Country 
}

export function CountryDetail({ country }: CountryDetailProps) {
  const { name, flags, population, area, capital, region } = country

  return (
    <div className="country-detail">
      <img
        src={flags.svg}
        alt={flags.alt ?? `Flag of ${name.common}`}
        className="country-flag"
      />
      <div className="country-info">
        <h2>{name.common}</h2>
        <p className="official-name">{name.official}</p>
        <dl>
          <dt>Population</dt>
          <dd>{population.toLocaleString()}</dd>

          <dt>Area</dt>
          <dd>{area.toLocaleString()} km²</dd>

          <dt>Capital</dt>
          <dd>{capital?.[0] ?? 'N/A'}</dd>

          <dt>Region</dt>
          <dd>{region}</dd>
        </dl>
      </div>
    </div>
  )
}
