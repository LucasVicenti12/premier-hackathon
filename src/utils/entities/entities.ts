export interface State {
    codeUF: string
    name: string
    latitude: string,
    longitude: string
}

export interface City {
    codeIBGE: string
    state: State
    name: string
    latitude: string
    longitude: string
    isCapital: boolean
    siafiID: string
    ddd: string
    timezone: string
    population: number
}