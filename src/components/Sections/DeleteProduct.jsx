import Card from "../FormCard/FormCard"
import { Col } from "react-bootstrap"
import PropTypes from "prop-types"
import SelectInput from "../Inputs/SelectInput/SelectInput"
import CustomButton from "../Shared/CustomButton"
import { useForm, FormProvider } from "react-hook-form"
import { deleteProductFormSchema } from "../../constants/Schemas"
import { yupResolver } from "@hookform/resolvers/yup"
import { errorToast } from "../../helpers/toasts"
import { BasicModal } from "../Shared/Modal/Modal"
import { useModal } from "../../hooks/useModal"
import { useState } from "react"

const DeleteProduct = ({
  xs,
  sm,
  md, 
  lg, 
  classnames = '',
  products,
  setProducts
}) => {
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
    setProducts(prevProducts => prevProducts.filter(product => product?.id !== productToDelete?.id))
  } 

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg}
      className={classnames}
    > 
      <FormProvider 
        {...methods}
      >
        <form onSubmit={handleSubmit(onClick)}>
          <Card>
            <h1 className="section-title">
              Eliminar
            </h1>
            {/* Atributo start */}
            <SelectInput 
              title={'Producto'}
              itemToSelect={'producto'}
              products={products}
              register={register}
              id='product-name'
            />  
            {/* Nombre end */}
            <div className="flex">
              <CustomButton
                text={'Eliminar'}
                buttonType={'submit'}
                classnames={'mt-2'}
                onClick={onClick}
              />
            </div>
          </Card>
        </form>
        <BasicModal
          show={isModalOpen}
          handleClose={closeModal}
          productToDelete={productToDelete}
          action={deleteProduct}
        />
      </FormProvider>
    </Col>
  )
}

DeleteProduct.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  classnames: PropTypes.string,
  products: PropTypes.array,
  setProducts: PropTypes.func
}

export default DeleteProduct