import SelectInput from "../../Inputs/SelectInput/SelectInput"
import TextInput from "../../Inputs/TextInput/TextInput"
import { editAttributesOption } from "../../../constants/Form"
import { Button } from "react-bootstrap"
import PropTypes from "prop-types"
import { useEffect } from "react"
import { useWatch } from "react-hook-form"
import { useFormContext } from "react-hook-form"

const EditForm = ({
  handleSubmit,
  onSubmit,
  products,
  register,
  onClick
}) => {
  const { setValue } = useFormContext() // retrieve those props
  
  const attributeToEdit = useWatch({ name: 'product-attribute' })
  const productToEdit = useWatch({ name: 'product-name' })

  useEffect(() => {
    const product = products?.filter(product => product.id === productToEdit)[0]
    setValue('product-new-value', product?.[attributeToEdit])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributeToEdit])
    

  return (
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
  )
}

EditForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  products: PropTypes.array,
  register: PropTypes.func,
  onClick: PropTypes.func
}

export default EditForm