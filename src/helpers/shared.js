import { v4 as uuidv4 } from 'uuid';

export const generateShortId = () => {
  return uuidv4().split('-')[0]; // Toma la primera parte del UUID
};