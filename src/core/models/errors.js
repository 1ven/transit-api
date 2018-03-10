export class ModelError {}

/**
 * This is model errors.
 * TODO: use similar methods from boom
 */

export class InvalidRequest extends ModelError {
  constructor(payload) {
    super();
    this.payload = payload;
  }

  getContent() {
    return this.payload;
  }
}
