import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { toast } from "sonner";
import { jwtDecode } from 'jwt-decode'

let API = import.meta.env.VITE_API_URL
let token = localStorage.getItem("token")
export const getProduct = createAsyncThunk('counter/getProduct', async () => {
    try {
        let { data } = await axios.get(API + "/Product/get-products")
        return data.data.products
    } catch (error) {
        console.error(error);
    }
})

export const addTocart = createAsyncThunk('counter/addTocart', async (id, { dispatch }) => {
    if (!token) {
        toast.error(`Вы должны войти в систему`);
    }
    else {
        try {
            await axios.post(`${API}/Cart/add-product-to-cart?id=${id}`, {}, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            dispatch(totalproduct())
        } catch (error) {
            console.error(error);
            toast.error(`Вы уже купили этот товар.`);
        }
    }
})

export const getAddproduct = createAsyncThunk('counter/getAddproduct', async () => {
    try {
        let { data } = await axios.get(`${API}/Cart/get-products-from-cart`,
            {
                headers: { "Authorization": `Bearer ${token}` }
            }
        )
        return data.data[0].productsInCart
    } catch (error) {
        console.error(error);
    }
})
export const totalproduct = createAsyncThunk('counter/totalproduct', async (_, { dispatch }) => {
    try {
        let { data } = await axios.get(`${API}/Cart/get-products-from-cart`,
            {
                headers: { "Authorization": `Bearer ${token}` }
            }
        )
        dispatch(getAddproduct())
        dispatch(totaldiscount())
        return data.data[0].totalProducts
    } catch (error) {
        console.error(error);
    }
})
export const totalPrice = createAsyncThunk('counter/totalPrice', async (_, { dispatch }) => {
    try {
        let { data } = await axios.get(`${API}/Cart/get-products-from-cart`,
            {
                headers: { "Authorization": `Bearer ${token}` }
            }
        )
        dispatch(getAddproduct())
        return data.data[0].totalPrice
    } catch (error) {
        console.error(error);
    }
})

export const totaldiscount = createAsyncThunk('counter/totaldiscount', async (_, { dispatch }) => {
    try {
        let { data } = await axios.get(`${API}/Cart/get-products-from-cart`,
            {
                headers: { "Authorization": `Bearer ${token}` }
            }
        )
        dispatch(getAddproduct())

        return data.data[0].totalDiscountPrice
    } catch (error) {
        console.error(error);
    }
})
export const incrimetn = createAsyncThunk('counter/incrimetn', async (id, { dispatch }) => {
    try {
        await axios.put(`${API}/Cart/increase-product-in-cart?id=${id}`, {},
            {
                headers: { "Authorization": `Bearer ${token}` }
            }
        )
        dispatch(getAddproduct())
        dispatch(totaldiscount())
        dispatch(totalproduct())
    } catch (error) {
        console.error(error);
    }
})

export const Reducer = createAsyncThunk('counter/reducer', async (id, { dispatch }) => {
    try {
        await axios.put(`${API}/Cart/reduce-product-in-cart?id=${id}`, {},
            {
                headers: { "Authorization": `Bearer ${token}` }
            }
        )
        dispatch(getAddproduct())
        dispatch(totaldiscount())
        dispatch(totalproduct())

    } catch (error) {
        console.error(error);
    }
})

export const daleteProduct = createAsyncThunk('counter/daleteProduct', async (id, { dispatch }) => {
    try {
        await axios.delete(`${API}/Cart/delete-product-from-cart?id=${id}`,
            {
                headers: { "Authorization": `Bearer ${token}` }
            }
        )
        dispatch(getAddproduct())
        dispatch(totalproduct())

    } catch (error) {
        console.error(error);
    }
})

export const deleteAll = createAsyncThunk('counter/deleteAll', async (_, { dispatch }) => {
    try {
        await axios.delete(`https://store-api.softclub.tj/Cart/clear-cart`,
            {
                headers: { "Authorization": `Bearer ${token}` }
            }
        )
        dispatch(getAddproduct())
        dispatch(totaldiscount())
        dispatch(totalproduct())

    } catch (error) {
        console.error(error);
    }
})

export const infoProduct = createAsyncThunk('counter/infoProduct', async ({ id, navigation }, { dispatch }) => {
    try {
        let { data } = await axios.get(`${API}/Product/get-product-by-id?id=${id}`,
            {
                headers: { "Authorization": `Bearer ${token}` }
            }
        )
        dispatch(getProduct())
        navigation(`/infoProduct/${id}`)
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const userProfilById = createAsyncThunk('counter/userProfilById', async (_, { dispatch }) => {
    const decode = jwtDecode(token)
    try {
        let { data } = await axios.get(`${API}/UserProfile/get-user-profile-by-id?id=${decode.sid}`,
            {
                headers: { "Authorization": `Bearer ${token}` }
            }
        )
        dispatch(getProduct())
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const editUserProfil = createAsyncThunk('counter/editUserProfil', async (form, { dispatch }) => {
    try {
        let { data } = await axios.put(`${API}/UserProfile/update-user-profile`, form,
            {
                headers: { "Authorization": `Bearer ${token}` }
            }
        )
        window.location = "/account"
    } catch (error) {
        console.error(error);
    }
})

export const counterSlece = createSlice({
    name: "counter",
    initialState: {
        data: [],
        getCart: [],
        totalP: [],
        totalprice: [],
        info: [],
        totalDiscount: [],
        user: [],
        editUser: [],
        wishlist: JSON.parse(localStorage.getItem("wishlist")) || []
    },
    reducers: {
        addWishlist: (state, action) => {
            const iseXis = state.wishlist.find((e) => e.id == action.payload.id)
            if (iseXis) {
                state.wishlist = state.wishlist.filter(e => e.id !== action.payload.id)
            } else {
                state.wishlist.push(action.payload)
            }
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
        },
        deleteWishlis: (state, action) => {
            state.wishlist = state.wishlist.filter(e => e.id !== action.payload.id)
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
        },
        newData: (state, action) => {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, actions) => {
            state.data = actions.payload
        }).addCase(getAddproduct.fulfilled, (state, actions) => {
            state.getCart = actions.payload
        }).addCase(totalproduct.fulfilled, (state, actions) => {
            state.totalP = actions.payload
        }).addCase(totalPrice.fulfilled, (state, actions) => {
            state.totalprice = actions.payload
        }).addCase(totaldiscount.fulfilled, (state, actions) => {
            state.totalDiscount = actions.payload
        }).addCase(infoProduct.fulfilled, (state, actions) => {
            state.info = actions.payload
        }).addCase(userProfilById.fulfilled, (state, actions) => {
            state.user = actions.payload
        }).addCase(editUserProfil.fulfilled, (state, actions) => {
            state.editUser = actions.payload
        })
    }
})
export const { addWishlist, deleteWishlis, newData } = counterSlece.actions
export default counterSlece.reducer