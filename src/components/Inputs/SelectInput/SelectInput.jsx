import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { useSelectInput } from '../../../hooks/useInputs';
import classNames from 'classnames';
import './SelectInput.css'

function SelectInput({
  title,
  itemToSelect,
  id,
  register,
  products
}) {
  const { error, isError } = useSelectInput(id)

  return (
    <Form.Group 
      className={classNames('input my-3 relative', {
        errorClass: isError
      })}
    >
      <Form.Text id="passwordHelpBlock" className='text'>
        {title}
      </Form.Text>
      <Form.Select 
        size='sm' aria-label="Default select example"
        {...(register ? register(id) : {})} /* <- Condicional para evitar que 'TextInputs' sin función 'register' crasheen. */
      >
        <option value='' key='x'>Elija un {itemToSelect || ' item'}</option>
        {products?.map((product) => {
          return  (
            <option
              value={product?.id}
              key={product?.id}
            >
              {product?.['product-name']}
            </option>
          )
        })}
      </Form.Select>
      <span className='error-msg'>
        {error?.message}
      </span>
    </Form.Group>
  );
}

SelectInput.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
  itemToSelect: PropTypes.string,
  id: PropTypes.string,
  register: PropTypes.func,
  products: PropTypes.array
}

export default SelectInput;