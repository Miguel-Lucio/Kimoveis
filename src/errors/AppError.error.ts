export default class AppError extends Error {
  constructor(public message: string, public stauts: number = 400) {
    super(message);
  }
}
