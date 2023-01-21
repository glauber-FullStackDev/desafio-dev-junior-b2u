export interface EmailValidator {
  isValid: (email: string) => Boolean
}
