import { Row, Container } from 'react-bootstrap'
import AddProduct from '../Sections/AddProduct';
import EditProduct from '../Sections/EditProducts/EditProduct';
import DeleteProduct from '../Sections/DeleteProduct';
import PropTypes from 'prop-types';
const ShoppingCar = ({
  setProducts,
  products
}) => {
  return (
    <>
      <h1 className='shopping-car-title'>
        Shopping Car
      </h1>
      <Container>
        <Row>
          <AddProduct xs={12} md={6} lg={4}
            setProducts={setProducts}
          />
          <EditProduct xs={12} md={6} lg={4}
            classnames='mt-4 mt-md-0'
            products={products}
            setProducts={setProducts}
          />
          <DeleteProduct
            xs={12} md={12} lg={4} 
            classnames='mt-4 mb-4 mb-md-0 mt-lg-0'
            products={products}
            setProducts={setProducts}
          />
        </Row>

      </Container>
    </>
  )
}

ShoppingCar.propTypes = {
  setProducts: PropTypes.func,
  products: PropTypes.array
}

export default ShoppingCar