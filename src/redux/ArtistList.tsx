import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeState, ArtistDataType } from "@/types/TypeLists";

const artistList = localStorage.getItem('artistList') !== null
    ? JSON.parse(localStorage.getItem('artistList') || '{}')
    : []

const totalList = localStorage.getItem('totalList') !== null 
    ? JSON.parse(localStorage.getItem('totalList') || '{}')
    : 0

const setItemFunc = (artistList: ArtistDataType[], totalList: number) => {
    localStorage.setItem('artistList', JSON.stringify(artistList))
    localStorage.setItem('totalList', JSON.stringify(totalList))
}

const initialState: TypeState = {
    // artistList: [],
    // totalList: 0,
    artistList: artistList,
    totalList: totalList,
}

const artistListSlice = createSlice({
    name: 'artist-list',
    initialState,
    reducers: {

        addArtist: (state = initialState, action: PayloadAction<ArtistDataType>) => {
            const newItem = action.payload
            const existingItem = state.artistList.find(item => item.id === newItem.id)

            if (!existingItem) {
                state.artistList.push({
                    id: newItem.id,
                    name: newItem.name,
                    nationality: newItem.nationality,
                    age: newItem.age,
                    songs: newItem.songs
                })
                state.totalList++
            }
            setItemFunc(state.artistList.map((item) => item), state.totalList);
        },

        deleteArtist: (state = initialState, action: PayloadAction<ArtistDataType>) => {
            const id: string | number | unknown = action.payload
            const existingItem = state.artistList.find(item => item.id === id)
            console.log(existingItem)
            if (existingItem) {
                state.artistList = state.artistList.filter(item => item.id !== id)
                state.totalList--
            }

            setItemFunc(state.artistList.map((item) => item), state.totalList);
        }

    }
})

export const listActions = artistListSlice.actions
export default artistListSlice