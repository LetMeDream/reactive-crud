import Card from "../FormCard/FormCard"
import { Col } from "react-bootstrap"
import SelectInput from "../Inputs/SelectInput/SelectInput"
import TextInput from "../Inputs/TextInput/TextInput"
import PropTypes from "prop-types"
import {Button} from "react-bootstrap"
import { FormProvider } from "react-hook-form"
import { editAttributesOption } from "../../constants/Form"
import useEdit from "../../hooks/useEdit"
const EditProduct = ({
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
  onSubmit,
} = useEdit({ products, setProducts })
  
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
            <Button type="submit" onClick={onClick} className="btn-send" variant="outline-light" size="sm">
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