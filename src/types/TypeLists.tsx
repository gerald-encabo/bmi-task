import { Dispatch, SetStateAction, ReactNode } from "react"

export interface ArtistDataType {
    id: number,
    name: string,
    nationality: string,
    age: number,
    songs: Array<SongsTypes>
}
export interface SongsTypes {
    songNum: number, 
    songTitle: string, 
    songLyrics: string
    composer?: string,
    producer?: string,
    productionDate?: string,
    awards?: string 
}
export interface TitleTypes {
    heading: string
}
export interface ButtonTypes {
    button: string
}
export interface ArtistCardType {
    data: ArtistDataType,
}
export interface ArtistDetailsType {
    count: number
}
export interface AddArtistType {
    setOpen?: React.Dispatch<React.SetStateAction<boolean>> 
}
export interface TypeState {
    artistList: ArtistDataType[],
    totalList: number
}
export interface RootState {
    list: any,
    isOn: boolean
}
export type Artist = {
    count: number
}
export interface ArtistContextInterface {
    artist: Artist,
    setArtist: Dispatch<SetStateAction<Artist>>
}
export type ArtistProvideProps = {
    children: ReactNode
}