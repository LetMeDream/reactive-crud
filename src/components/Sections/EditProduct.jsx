import Card from "../FormCard/FormCard"
import { Col } from "react-bootstrap"
import SelectInput from "../Inputs/SelectInput/SelectInput"
import TextInput from "../Inputs/TextInput/TextInput"
import PropTypes from "prop-types"
import {Button} from "react-bootstrap"
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { editAttributesOption } from "../../constants/Form"
import { editProductFormSchema } from "../../constants/Schemas"
import { errorToast } from "../../helpers/toasts"
import { saveToLocalStorage } from "../../helpers/localStorage"

const EditProduct = ({
  xs,
  sm,
  md, 
  lg, 
  classnames = '',
  products,
  setProducts
}) => {

 const methods = useForm({
    resolver: yupResolver(editProductFormSchema)
  });

  const {register, handleSubmit, trigger} = methods;

  const onSubmit = async (formValues) => {
    if (await trigger()) {
      const selectedProduct = products.find(
      (product) => product.id === formValues['product-name']);
      const selectedProperty = formValues?.['product-attribute'];
      const newValue = formValues?.['product-new-value'];
      // Crear un nuevo objeto con la clave actualizada
      const updatedProduct = { ...selectedProduct, [selectedProperty]: newValue };
      // Actualizar el array de productos reemplazando el producto actualizado
      const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product);
      // Actualizar el estado y guardar en localStorage
      setProducts(updatedProducts);
      saveToLocalStorage("products", updatedProducts);
      console.log("Productos actualizados:", updatedProducts);
    } else {
      errorToast({
        title: 'Ups!',
        content: 'Revise los errores del formulario'
      })
    }
  };

  return (
    <Col  xs={xs} sm={sm} md={md} lg={lg} className={classnames}>
      <FormProvider {...methods}>
        <Card>  
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="section-title">
            Editar
          </h1>
          {/* Producto start */}
          <SelectInput 
            title={'Producto'}
            itemToSelect={'producto'}
            products={products}
            register={register}
            id='product-name'
          />
          {/* Producto start */}
          {/* Atributo start */}
          <SelectInput 
            title={'Atributo'}
            itemToSelect={'atributo'}
            products={editAttributesOption}
            register={register}
            id='product-attribute'
          />  
          {/* Atributo end */}
          {/* new value start */}
          <TextInput
            title='Nuevo valor'
            type='text'
            register={register}
            id='product-new-value'
            placeholder={'Nuevo valor'}
          />
          {/* new value end */}
          {/* Nombre end */}
          <div className="flex">
            <Button type="submit" className="btn-send" variant="outline-light" size="sm">
              Editar
            </Button>
          </div>
        </form>
        </Card>
      </FormProvider>
    </Col>
    )
}

EditProduct.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  classnames: PropTypes.string,
  products: PropTypes.array,
  claves: PropTypes.array,
  setProducts: PropTypes.func
}


export default EditProduct