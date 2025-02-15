import PropTypes from "prop-types"
import { DollarSign } from 'lucide-react';
import { Image } from "react-bootstrap";

const Product = ({
  product
}) => {
  return (
    <div className="card">
      <Image fluid
        src={product?.['product-url-image']}
        alt={product?.['product-name']}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{product?.['product-name']}</h2>
        <p className="card-text"><strong>Existencia:</strong> {product?.['product-existance']}</p>
        <p className="card-text">
          <strong>Precio:</strong> 
          <DollarSign size={12}/> {product?.['product-value']}
        </p>
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.array
}

export default Product