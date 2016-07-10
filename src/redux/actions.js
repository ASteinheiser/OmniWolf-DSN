export const VALIDATE_TOKEN = "VALIDATE TOKEN";

export function validateToken(token) {
  return {
    type: VALIDATE_TOKEN,
    token: token
  }
}
