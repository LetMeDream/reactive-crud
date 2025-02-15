import './TextInput.css' 
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import {useTextInput} from '../../../hooks/useInputs'
import classNames from 'classnames';

const TextInput = ({ 
  title,
  type,
  id,
  placeholder,
  register,
  autoComplete = false
 }) => {
  const { error, isError } = useTextInput(id)

  return (
    <Form.Group  
      className={classNames('input my-3 relative', {
        errorClass: isError
      })}
    >
      <Form.Text id="passwordHelpBlock" className='text'>
        {title}
      </Form.Text>
      <Form.Control
        {...(register ? register(id) : {})} /* <- Condicional para evitar que los 'TextInputs' sin el prop 'register' crasheen. */
        size='sm'
        type={type}
        id={id}
        aria-describedby="passwordHelpBlock"
        placeholder={placeholder}
        autoComplete={!autoComplete ? 'off' : 'on' }
      />    
      <span className='error-msg'>
        {error?.message}
      </span>
    </Form.Group>
  )
}

/* Propiedades que espera recibir el componente. */
TextInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  autoComplete: PropTypes.bool
}

export default TextInput