import type { PersonalInfo } from '../types'

export const getPersonalInfo = (): PersonalInfo => {
  return {
    name: 'Domi Adiwijaya',
    nationality: 'Indonesia',
    gender: 'Male',
    address: 'Cilegon City, Banten',
    email: 'hello@domiadi.com',
    hobby: 'Home Lab Enthusiast'
  }
}

export const formatPersonalInfo = (info: PersonalInfo): string => {
  return Object.entries(info)
    .map(([key, value]) => {
      const formattedKey = key.charAt(0).toUpperCase() + key.slice(1)
      return `${formattedKey.padEnd(12)} : ${value}`
    })
    .join('\n')
}