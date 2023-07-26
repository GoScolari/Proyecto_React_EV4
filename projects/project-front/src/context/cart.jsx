import { createContext, useReducer} from "react";

//Contexto Carro
export const CartContext = createContext()

const initialState = []
const reducer = (state, action) => {
    const { type: actionType, payload: actionPayLoad } = action
    switch (actionType) {
        case 'ADD_TO_CART': {
            const { id } = actionPayLoad
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
            }

            return [
                ...state,
                {
                    ...actionPayLoad,
                    quantity: 1
                }
            ]
        }

        case 'REMOVE_FROM_CART': {
            const { id } = actionPayLoad
            return state.filter(item => item.id !== id)
        }

        case 'CLEAR_CART': {
            return initialState
        }
    }

    return state
}

//Provider Carro
export function CartProvider ({children}) {
    const [state, dispatch] = useReducer (reducer, initialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch ({type: 'CLEAR_CART'})

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}
        >
            {children}
        </ CartContext.Provider>
    )
}