import * as yup from 'yup'

/* Archivo para definir los Schemas de los formularios a utilizar. */

/* Schema para el formulario de AÑADIR PRODUCTO */
export const addProductFormSchema = yup.object({
  'product-name': yup.string().required('Este campo es obligatorio'),
  'product-value': yup.number().typeError('Éste valor debe ser un número').required('Este campo es obligatorio'),
  'product-existance': yup.number().typeError('Éste valor debe ser un número').required('Este campo es obligatorio'),
  'product-url-image': yup.string().url('Debe ser una URL válida').required('Este campo es obligatorio')
})

/* Schema para el formulatio de ELIMINAR PRODUCTO */
export const deleteProductFormSchema = yup.object({
  'product-name': yup.string().required('Este campo es obligatorio'),
})

export const editProductFormSchema = yup.object().shape({
    'product-name': yup.string().required('Este campo es obligatorio'),
    'product-attribute': yup.string().required('Este campo es obligatorio'),
    'product-new-value':  yup.string().required()
      .when('product-attribute', {
        is: (value) => value === 'product-value' ||value === 'product-existance',
        then: () => yup.number().typeError('Éste valor debe ser un número').required('Este campo es obligatorio'),
      })
      .when('product-attribute', {
        is: 'product-url-image',
        then: () => yup.string().url('Debe ser una URL válida').required('Este campo es obligatorio'),
      })
      .when('product-attribute', {
        is: 'product-name',
        then: () => yup.string().required('Este campo es obligatorio'),
      })
})
