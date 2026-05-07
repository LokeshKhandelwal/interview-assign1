export interface CountryName {
  common: string
  official: string
}

export interface CountryFlags {
  svg: string
  png: string
  alt?: string
}

export interface Country {
  name: CountryName
  population: number
  area: number
  capital?: string[]
  region: string
  flags: CountryFlags
}
