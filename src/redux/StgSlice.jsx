import { createSlice } from "@reduxjs/toolkit";


const StgSlice = createSlice({
    name:'stg',
    initialState:{
        stgs:[
            {
                image:'https://i.pinimg.com/564x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg',
                nom:'zaid1',
                prenom:'riad1',
                filiere:'Dev'
            },
            {
                image:'https://i.pinimg.com/564x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg',
                nom:'zaid2',
                prenom:'riad2',
                filiere:'Dev'
            }
        ]
    },
    reducers:{
        addStag: (state, action) => {
            state.stgs = [...state.stgs, action.payload]
        }
    }
})

export const {addStag} = StgSlice.actions

export default StgSlice.reducer