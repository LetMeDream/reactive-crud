import Card from "../../FormCard/FormCard"
import { Col } from "react-bootstrap"
import PropTypes from "prop-types"
import { FormProvider } from "react-hook-form"
import useEdit from "../../../hooks/useEdit"
import EditForm from "./EditForm"

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
  onSubmit
} = useEdit({ products, setProducts })

  return (
    <Col  xs={xs} sm={sm} md={md} lg={lg} className={classnames}>
      <FormProvider {...methods}>
        <Card>  
          <EditForm 
            register={register}
            handleSubmit={handleSubmit}
            onClick={onClick}
            onSubmit={onSubmit}
            products={products}
          />
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