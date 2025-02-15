import './ProductList.css'
import { Row, Container, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductList = ({
  products
}) => {
  return (
    <Container className='mt-4 mb-4'>
      <Row>
        {
          (products?.length > 0) ?
          products?.map(product => {
            return (
              <Col 
                xs={4}
                key={product?.id}
                className='px-4'
              >
                <Product 
                  product={product}
                />
              </Col>
            )
          }) : 'nada'
        }
      </Row>
    </Container>
  )
}

ProductList.propTypes = {
  products: PropTypes.array
}

export default ProductList