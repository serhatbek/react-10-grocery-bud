import { useEffect } from 'react';

const Alert = ({ message, type, removeAlert }) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
