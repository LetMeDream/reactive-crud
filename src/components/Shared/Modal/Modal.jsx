import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import CustomButton from '../CustomButton';
import './Modal.css'

export const BasicModal = ({
  show,
  handleClose,
  productToDelete,
  action
}) => {

  const actionClose = () => {
    action()
    handleClose()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Se eliminará el producto:&nbsp;
            <span>
              { productToDelete?.['product-name'] || 'Producto sin nombre' }
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={productToDelete?.['product-url-image']}
            className='contained-image'
            fluid
          />
        </Modal.Body>
        <Modal.Footer>
          <CustomButton 
            text='Eliminar'
            onClick={actionClose}
            outline={false}
            type='danger'
          />
          <CustomButton 
            text='Cancelar'
            onClick={handleClose}
            outline
            type='dark'
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

BasicModal.propTypes = {
  show: PropTypes.boolean,
  handleClose: PropTypes.func,
  productToDelete: PropTypes.func,
  action: PropTypes.func
}