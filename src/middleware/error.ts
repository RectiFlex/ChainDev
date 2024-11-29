export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public isOperational = true,
    public stack = ''
  ) {
    super(message);
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export const errorHandler = (error: unknown) => {
  if (error instanceof ApiError) {
    return {
      status: error.statusCode,
      message: error.message,
      isOperational: error.isOperational,
    };
  }

  return {
    status: 500,
    message: 'Internal server error',
    isOperational: false,
  };
};