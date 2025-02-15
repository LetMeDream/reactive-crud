import { toast } from 'react-toastify'
import { CustomNotification, WithActions } from '../components/Shared/Toasts/Toasts'

export const errorToast = ({title, content}) => {
  toast(CustomNotification, {
    data:{
      title,
      content
    },
    position: 'top-center',
    theme: 'colored',
    type: 'error'
  })
}

export const actionToast = ({ title, content, action, idForCurrentProduct }) => {
  toast(WithActions, {
    data: {
      title,
      content,
      action,
      idForCurrentProduct
    }, 
    // autoClose: false
  })
}