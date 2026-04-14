import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push({ ...action.payload, cant: action.payload.cant || 1 });
        },
        removeFromCart: (state, action) => {
            return state.filter(({ cant, ...product }) => {
                if (product.id === action.payload.id) {
                    if (cant > 1) {
                        return { ...product, cant: cant - 1 };
                    }
                    return false;
                }
                return true;
            });
        }
    }
});