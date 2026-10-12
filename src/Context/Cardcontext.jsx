import {createContext, useState} from "react";

export const cartContext = createContext();

export function CartProvider({children}){
    const [cart, setCart]= useState([]);

    function addtoCart(movie){
        const movieCheck = cart.find((item) => item._id === movie._id)

        if(movieCheck){
            setCart(cart.map((item) => item._id === movie._id ? {...item, quantity: item.quantity + 1}:item))

        }
        else{
            setCart([...cart,{...movie, quantity:1}])
        }
    }
    return(
        <cartContext.Provider value={{cart,addtoCart}} >
            {children}
        </cartContext.Provider>
    )

}

