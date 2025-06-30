class NotFoundError extends Error {
  constructor(message = 'Resource not found') {
    super(message);
    this.status = 404;
  }
}

class ValidationError extends Error {
  constructor(message = 'Invalid data') {
    super(message);
    this.status = 400;
  }
}

module.exports = {
  NotFoundError,
  ValidationError
};
