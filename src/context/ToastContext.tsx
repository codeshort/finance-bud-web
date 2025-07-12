import { createContext, useContext, useState } from 'react';
import type { Toast } from '../types/toast/toastTYpes';

type ToastNotificationContextType = {
  addToast: (toast: Toast) => void;
  removeToast: (id: number) => void;
  removeTopToast: () => void;
  removeAllToasts: () => void;
  getNextToastId: () => number;
  getToastNotificationsList: () => Toast[];
};

const ToastNotificationContext = createContext<
  ToastNotificationContextType | undefined
>(undefined);

export function useToastNotificationContext(): ToastNotificationContextType {
  const toastContext = useContext(ToastNotificationContext);
  if (!toastContext) {
    throw new Error(
      'useToastNotificationContext must be used within a ToastNotificationProvider',
    );
  }

  return toastContext;
}

export const ToastNotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toastNotificationsList, setToastNotificationsList] = useState<Toast[]>(
    [],
  );
  function addToast(toast: Toast) {
    setToastNotificationsList((prev) => [...prev, toast]);
  }

  function removeToast(id: number) {
    setToastNotificationsList(
      toastNotificationsList.filter((toast: Toast) => toast.id !== id),
    );
  }

  function removeTopToast() {
    setToastNotificationsList(toastNotificationsList.slice(0, -1));
  }

  function removeAllToasts() {
    setToastNotificationsList([]);
  }

  function getNextToastId() {
    return toastNotificationsList.length + 1;
  }

  function getToastNotificationsList() {
    return toastNotificationsList;
  }

  const toastUtilities = {
    addToast,
    removeToast,
    removeAllToasts,
    getNextToastId,
    removeTopToast,
    getToastNotificationsList,
  };

  return (
    <ToastNotificationContext.Provider value={toastUtilities}>
      {children}
    </ToastNotificationContext.Provider>
  );
};
