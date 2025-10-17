import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const AllProductsDataAPI = createAsyncThunk("AllProductsData", async () => {

    var requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    return fetch(`https://fakestoreapi.com/products`, requestOptions)
        .then((res) => res.json())
        .then((result) => {
            if (result.code >= 200 && result.code <= 300 && result.data) {
                console.log(result.data)
                return result.data
            } else {
                return result
            }
        })
})

const AllProductsDataSlice = createSlice({
    name: "AllProductsData",
    initialState: {
        isLoading: false,
        productsData: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(AllProductsDataAPI.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(AllProductsDataAPI.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productsData = action.payload;
        });
        builder.addCase(AllProductsDataAPI.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isLoading = false;
            state.isError = true;
            state.productsData = null;
            // toastErrorr('Something went wrong')
        });
    },
})

export const AllProductsDataReducer = AllProductsDataSlice.reducer