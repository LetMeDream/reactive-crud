import { useState, useEffect } from "react"
import { getFromLocalStorage } from "../helpers/localStorage"

export const useShoppingCar = () => {
    const [products, setProducts] = useState(getFromLocalStorage('products') || [])

    useEffect(() => {
        // console.log(products)
    }, [products])

    return {
        products,
        setProducts
    }
}