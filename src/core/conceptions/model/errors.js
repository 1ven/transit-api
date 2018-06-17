class ModelError {
  constructor(message) {
    this.message = message;
  }

  message() {
    return this.message;
  }
}

export class ClientError extends ModelError {}
export class NotFoundError extends ModelError {}
export class ConflictError extends ModelError {}
export class NotAllowedError extends ModelError {}
