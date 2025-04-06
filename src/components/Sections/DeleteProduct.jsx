import Card from "../FormCard/FormCard"
import { Col } from "react-bootstrap"
import PropTypes from "prop-types"
import SelectInput from "../Inputs/SelectInput/SelectInput"
import CustomButton from "../Shared/CustomButton"
import { FormProvider } from "react-hook-form"
import { BasicModal } from "../Shared/Modal/Modal"
import useDelete from "../../hooks/useDelete"
const DeleteProduct = ({
  xs,
  sm,
  md, 
  lg, 
  classnames = '',
  products,
  setProducts
}) => {
  const {
    register,
    handleSubmit,
    onClick,
    methods,
    deleteProduct,
    closeModal,
    isModalOpen,
    productToDelete
  } = useDelete({ products, setProducts })

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