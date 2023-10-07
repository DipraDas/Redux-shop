import { auth } from "@/lib/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";

interface ICredential {
    email: string,
    password: string

}
interface IUserState {
    user: {
        email: string | null
    },
    isLoading: boolean,
    isError: boolean,
    error: string | null
}

const initialState: IUserState = {
    user: {
        email: null
    },
    isLoading: false,
    isError: false,
    error: null
}

export const createUser = createAsyncThunk(
    'user/createUser',
    async ({ email, password }: ICredential) => {
        const data = await createUserWithEmailAndPassword(auth, email, password);
        return data.user.email;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.error = null
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user.email = action.payload
            })
            .addCase(createUser.rejected, (state, action) => {
                state.user.email = null
                state.isLoading = false
                state.isError = false
                state.error = action.error.message!
            })
    }
})
export const { } = userSlice.actions;
export default userSlice.reducer;