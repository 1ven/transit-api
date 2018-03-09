/**
 * This is model errors.
 * TODO: use similar methods from boom
 */

export class InvalidRequest {
  constructor(payload) {
    this.payload = payload;
  }

  getContent() {
    return this.payload;
  }
}
