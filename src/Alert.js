import { useEffect } from 'react';

const Alert = ({ message, type, removeAlert, list }) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
