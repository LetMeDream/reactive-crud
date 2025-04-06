import Card from "../FormCard/FormCard"
import TextInput from "../Inputs/TextInput/TextInput"
import { Col } from "react-bootstrap"
import PropTypes from "prop-types"
import { FormProvider } from "react-hook-form"
import CustomButton from "../Shared/CustomButton"
import useAdd from "../../hooks/useAdd"
const AddProduct = ({
  xs,
  sm,
  md,
  lg,
  setProducts,
  classnames = ''
}) => {
  const {
    register,
    handleSubmit,
    onClick,
    methods,
    onSubmit,
  } = useAdd({ setProducts })
    
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