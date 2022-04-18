import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
  name: 'users',
  initialState: [
      {
          name: 'John Doe',
          age: 30,
          dept: 'engineering'
      },
      {
        name: 'Hulk Hogan',
        age: 60,
        dept: 'wrestling'
    }
  ],
  reducers: {
    addUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(action.payload)
    },
    removeUser: (state, action) => {
      state = state.filter(user => user.name !== action.deleleUser.name)
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = userReducer.actions

export default userReducer.reducer