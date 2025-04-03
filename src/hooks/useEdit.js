import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProductFormSchema } from "../constants/Schemas";
import { toast } from "react-toastify";
import { errorToast } from "../helpers/toasts";
import { saveToLocalStorage } from "../helpers/localStorage";

const useEdit = ({products, setProducts}) => {
    // Hook para manejar el formulario de edición de productos
    
    const methods = useForm({
        resolver: yupResolver(editProductFormSchema)
    });
    
    const {register, handleSubmit, trigger, reset} = methods;
    
    const onSubmit = (formValues) => {
          const selectedProduct = products.find(
          (product) => product.id === formValues['product-name']);
          const selectedProperty = formValues?.['product-attribute'];
          const newValue = formValues?.['product-new-value'];
          // Crear un nuevo objeto con la clave actualizada
          const updatedProduct = { ...selectedProduct, [selectedProperty]: newValue };
          // Actualizar el array de productos
          // reemplazando el producto actualizado
          const updatedProducts = products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product);
          // Actualizar el estado y guardar en localStorage
          setProducts(updatedProducts);
          saveToLocalStorage("products", updatedProducts);
        reset()
    };
    
    const onClick = async () => {
        if (await trigger()) {
          toast("Producto editado con éxito", {
            position: "top-right",
            type: "success",
          });
        } else {
          errorToast({
            title: "Ups!",
            content: "Revise los errores del formulario",
          });
        }
    };
    return {
        register,
        handleSubmit,
        onClick,
        onSubmit,
        methods
    };
}

export default useEdit