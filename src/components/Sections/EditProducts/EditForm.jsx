import SelectInput from '../../Inputs/SelectInput/SelectInput';
import TextInput from '../../Inputs/TextInput/TextInput';
import { editAttributesOption } from '../../../constants/Form';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useWatch } from 'react-hook-form';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
const EditForm = ({
handleSubmit,
onClick,
onSubmit, 
register, 
products
}) => {
  const { setValue } = useFormContext()
  const attributeToEdit = useWatch({ name: 'product-attribute' })
  const productToEdit = useWatch({ name: 'product-name' })
  const [isSelectDisabled, setIsSelectDisabled] = useState(true)
  useEffect(() => {
    if (productToEdit) {
      setIsSelectDisabled(false)
      } else {
        setIsSelectDisabled(true)
    }
  }, [productToEdit]);

  useEffect(() => {
    const product = products?.filter(product => product.id === productToEdit)[0]
    setValue('product-new-value', product?.[attributeToEdit])
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributeToEdit, productToEdit]);

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
            disabled={isSelectDisabled}
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
    onClick: PropTypes.func,
    onSubmit: PropTypes.func,
    register: PropTypes.func,
    products: PropTypes.array
}
export default EditForm
