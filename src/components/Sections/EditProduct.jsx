import Card from "../FormCard/FormCard"
import { Col } from "react-bootstrap"
import SelectInput from "../Inputs/SelectInput/SelectInput"
import TextInput from "../Inputs/TextInput/TextInput"
import PropTypes from "prop-types"
import {Button} from "react-bootstrap"
import { useForm, FormProvider } from "react-hook-form"

const EditProduct = ({
  xs,
  sm,
  md, 
  lg, 
  classnames = ''
}) => {
  const methods = useForm()

  return (
    <Col  xs={xs} sm={sm} md={md} lg={lg} className={classnames}>
      <FormProvider {...methods}>
        <Card>  
          <h1 className="section-title">
            Editar
          </h1>
          {/* Producto start */}
          <SelectInput 
            title={'Producto'}
            itemToSelect={'producto'}
          />
          {/* Producto start */}
          {/* Atributo start */}
          <SelectInput 
            title={'Atributo'}
            itemToSelect={'atributo'}
          />  
          {/* Atributo end */}
          {/* new value start */}
          <TextInput
            title='Nuevo valor'
            type='text'
            id='product-new-value'
            placeholder={'Nuevo valor'}
          />
          {/* new value end */}
          {/* Nombre end */}
          <div className="flex">
            <Button className="btn-send" variant="outline-light" size="sm">
              Editar
            </Button>
          </div>
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
}

export default EditProduct