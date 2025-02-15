import PropTypes from "prop-types";
import './Toasts.css'
import CustomButton from "../CustomButton";
import { ShoppingCart } from 'lucide-react'

/* Archivo para crear los Toasts para las diferentes situaciones (error, info, warning, etc)
 * y con diferentes estilos.
*/

export const FormToast =({ closeToast }) => {
  return (
    <div className="form-toast-container">
      <h3 className="form-toast-title">Feedback</h3>
      <p className="form-toast-message">Your feedback is valuable</p>
      <form>
        <textarea className="form-toast-textarea" />
      </form>
      <CustomButton 
        text='Submit Feedback'
        type='dark'
        onClick={closeToast}
        classnames='form-toast-button'
      />
    </div>
  );
}

FormToast.propTypes = {
  closeToast: PropTypes.func
}

export function WithActions({ closeToast, data }) {

  const action = () => {
    if (data?.action(data?.idForCurrentProduct)){
      closeToast()
    }
  }

  return (
    <div className="with-actions-container">
      <h3 className="with-actions-title">
        <ShoppingCart className="size-4 text-grey-700" /> {data.title || 'empty'}
      </h3>

      <div className="with-actions-content">
        <p className="with-actions-message">{data.content || 'empty'}</p>

        <div className="with-actions-buttons">
          <button
            onClick={action}
            className="with-actions-button-undo"
          >
            Undo
          </button>
          <button
            onClick={closeToast}
            className="with-actions-button-dismiss"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}

WithActions.propTypes = {
  closeToast: PropTypes.func,
  data: PropTypes.object
}

export function CustomNotification({
  closeToast,
  data,
}) {

  return (
    <div className="notification-container">
      <h3
        className='notification-title notification-title-default'
      >
        {data?.title}
      </h3>
      <div className="notification-body">
        <p className="notification-content">{data?.content}</p>
        <button
          onClick={closeToast}
          className='notification-button'
        >
          Ok
        </button>
      </div>
    </div>
  );
}

CustomNotification.propTypes = {
  closeToast: PropTypes.func,
  data: PropTypes.object,
  toastProps: PropTypes.object
}