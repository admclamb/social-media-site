import { Error } from '@/ts/types/Error';
import React from 'react';

type Props = {
  error: Error;
  className: string;
};

const ErrorAlert = ({ error, className }: Props) => {
  return error?.message ? (
    <div
      className={`p-2 bg-red-300 text-red-900 border border-red-900 rounded ${className}`}
    >
      Error: {error.message}
    </div>
  ) : null;
};

ErrorAlert.defaultProps = {
  className: '',
};

export default ErrorAlert;
