import Card from "../FormCard/FormCard"
import TextInput from "../Inputs/TextInput/TextInput"
import { Col } from "react-bootstrap"
import PropTypes from "prop-types"
import { useForm, FormProvider } from "react-hook-form"
import { addProductFormSchema } from "../../constants/Schemas"
import { yupResolver } from '@hookform/resolvers/yup'
import CustomButton from "../Shared/CustomButton"
import { generateShortId } from "../../helpers/shared"
import { useState } from "react"
import { errorToast, actionToast } from "../../helpers/toasts"
import { saveToLocalStorage } from "../../helpers/localStorage"

const AddProduct = ({
  xs,
  sm,
  md,
  lg,
  setProducts,
  classnames = ''
}) => {
  const methods = useForm({
    resolver: yupResolver(addProductFormSchema)
  });
  const [idForPreviousProduct, setIdForPreviousProduct] = useState(null)
  const [idForCurrentProduct, setIdForCurrentProduct] = useState(generateShortId())

  const { 
    register,      /* Registrar Campos en el formulario */
    handleSubmit,  /* Manejar función de 'submit' */
    trigger,       /* Ejecutar validaciones */
    reset,         /* Resetear formulario; limpiar todos sus campos */
    getValues,     /* Obtener valores del formulario. Todos o uno en específivo. */
    setValue       /* Setear un valor del formulario en específico. */
  } = methods;     /* De éste objeto, methods, sacamos las funciones de arriba */


  const onSubmit = data => { 
    data = {
      ...data,
      id: idForPreviousProduct
    }
    setProducts(previousProducts => {
      saveToLocalStorage('products', [...previousProducts, data])
      return [...previousProducts, data]
    }) 
    reset()
  }

  /* Función para 'deshacer' la creación del producto recientemente creado. */
  const undoRecentlyCreatedProduct = (recentlyCreatedProduct) => {
    if (confirm('¿Desea deshacer la acción?')) {
      Object.keys(recentlyCreatedProduct).forEach(key => {
        if (key.toLowerCase() === 'id') return
        setValue(key, recentlyCreatedProduct[key])
      });
      setProducts(prevProducts => {
        let newProduct = prevProducts.filter(product => product.id !== idForCurrentProduct)
        saveToLocalStorage('products', newProduct)
        return newProduct
      })
      return true // Devolvemos true, si el user deshizo el añadido del producto, para quitar el toast.
    }
    return false // o devolvemos false, para no quitarlo.
  }

  const onClick = async () => {
    const formData = getValues();
    const newProduct = {
      ...formData,
      id: idForCurrentProduct
    };

    let isValid = await trigger()
    // debugger
    if (isValid) { // trigger() devuelve true si el formulario no posee errores.
      actionToast({
        title: 'Èxito!',
        content: 'El producto ha sido añadido',
        action: () => undoRecentlyCreatedProduct(newProduct)
      })
      setIdForPreviousProduct(idForCurrentProduct)
      setIdForCurrentProduct(generateShortId())
    } else {               // Camino en caso de errores.
      errorToast({
        title: 'Ups!',
        content: 'Revise los errores del formulario'
      })
    }
  }

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg}
      classnames={classnames}
    >
      <FormProvider {...methods}>
        <Card>
          <form 
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="section-title">
              Añadir
            </h1>
            {/* Nombre start */}
            <TextInput
              title='Nombre del producto'
              type='text'
              id='product-name'
              placeholder={'Nombre del producto'}
              register={register}
            />
            {/* Valor start */}
            <TextInput
              title='Valor del producto'
              type='text'
              id='product-value'
              placeholder={'Valor del producto'}
              register={register}
            />
            {/* Existencia */}
            <TextInput
              title='Existencia'
              type='text'
              id='product-existance'
              placeholder={'Productos en existencia'}
              register={register}
            />
            {/* Url start */}
            <TextInput
              title='Url Imagen'
              type='text'
              id='product-url-image'
              placeholder={'URL de imagen del producto'}
              register={register}
            />
            {/* Agregar btn */}
            <div className="flex">
              <CustomButton
                text={'Agregar'}
                buttonType={'submit'}
                classnames={'mt-2'}
                onClick={onClick}
              />
            </div>
            {/*
              {<div style={{textAlign: 'center', marginTop:'.5rem', color: '#48BEFF'}}>
                {idForCurrentProduct}
              </div>} 
            */} 
          </form>
        </Card>
      </FormProvider>
    </Col>
  )
}

AddProduct.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  setProducts: PropTypes.array,
  classnames: PropTypes.string,
  setLastlyAddedProductId: PropTypes.func
}

export default AddProduct