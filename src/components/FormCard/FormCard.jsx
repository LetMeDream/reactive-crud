import PropTypes from 'prop-types'


const Card = ({ children }) => {
  return (
      <div className={`section`}>
        { children || 'Empty section. Provide content.' }
      </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
}

export default Card