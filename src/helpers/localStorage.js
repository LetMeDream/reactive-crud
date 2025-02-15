/**
 * Guarda un valor en el local storage.
 * @param {string} key - La clave bajo la cual se guardará el valor.
 * @param {any} value - El valor a guardar.
 */
function saveToLocalStorage(key, value) {
  try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
  } catch (error) {
      console.error('Error guardando en local storage', error);
  }
}

/**
* Recupera un valor del local storage.
* @param {string} key - La clave del valor a recuperar.
* @returns {any} - El valor recuperado o null si no se encuentra.
*/
function getFromLocalStorage(key) {
  try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
          return null;
      }
      return JSON.parse(serializedValue);
  } catch (error) {
      console.error('Error recuperando del local storage', error);
      return null;
  }
}

/**
* Elimina un valor del local storage.
* @param {string} key - La clave del valor a eliminar.
*/
function removeFromLocalStorage(key) {
  try {
      localStorage.removeItem(key);
  } catch (error) {
      console.error('Error eliminando del local storage', error);
  }
}

export { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage };