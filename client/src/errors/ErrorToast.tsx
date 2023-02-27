import { faXmark } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {
  error: Error | null;
  setError: (arg0: { message: string } | null) => void;
};

const ErrorToast = ({ error, setError }: Props) => {
  const closeError = () => {
    setError(null);
  }
  
  return error?.message ? (
    <div className="p-2 bg-red-400 text-white rounded fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center">
      <p>Error: {error.message}</p>
      <button className="h-6 w-6 rounded ml-2 mt-1 ease-in duration-200 flex justify-center items-center" onClick={closeError}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  ) : null;
};

export default ErrorToast;
