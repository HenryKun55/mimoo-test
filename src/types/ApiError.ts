export default class ApiError extends Error {
  description: string;

  constructor (message: string) {
    super(message)
    this.description = message
  }
}
