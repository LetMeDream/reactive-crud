import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { errorToast } from "../helpers/toasts"
import { useState } from "react"
import { useModal } from "./useModal"
import { saveToLocalStorage } from "../helpers/localStorage"
import { deleteProductFormSchema } from "../constants/Schemas"

const useDelete = ({products, setProducts}) => {
        // Hook para manejar el formulario de edición de productos
    const methods = useForm({
      resolver: yupResolver(deleteProductFormSchema)
    })
    const { trigger, handleSubmit, register, getValues } = methods
    const { isModalOpen, closeModal, openModal } = useModal()
    const [productToDelete, setProductToDelete] = useState(null)
  
    const onClick = async () => {
      if (await trigger()){
        let value = getValues('product-name')
        setProductToDelete(products?.filter(product => product?.id === value)[0])
        openModal()
      } else {
        errorToast({
          title: 'Ups!',
          content: 'Revise los errores del formulario'
        })
      }
    }
  
    const deleteProduct = () => {
      setProducts(prevProducts => {
        let newProducts =  prevProducts.filter(product => product?.id !== productToDelete?.id)
        saveToLocalStorage('products', newProducts)
        return newProducts
      })
    } 

    return {
        register,
        handleSubmit,
        onClick,
        methods,
        deleteProduct,
        closeModal,
        isModalOpen,
        productToDelete
    }
}
  
export default useDelete