import { createContext } from 'react';

export const ModalContext = createContext({
  showReadModal: false,
  setShowReadModal: (value: boolean) => {},
  isUpdate: false,
  setIsUpdate: (value: boolean) => {},
});
