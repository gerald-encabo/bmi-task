import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeState, ArtistDataType } from "@/types/TypeLists";

const initialState: TypeState = {
    artistList: [],
    totalList: 0,
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
        },

        deleteArtist: (state = initialState, action: PayloadAction<ArtistDataType>) => {
            const id: string | number | unknown = action.payload
            const existingItem = state.artistList.find(item => item.id === id)

            if (existingItem) {
                state.artistList = state.artistList.filter(item => item.id !== id)
                state.totalList--
            }
        }
    }
})

export const listActions = artistListSlice.actions
export default artistListSlice