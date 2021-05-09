import jwt_decode from "jwt-decode";

export function isTokenExpire(token) {
  const decoded = jwt_decode(token);
  const expireDate = new Date(decoded.exp * 1000);
  const currentDate = new Date();

  return currentDate >= expireDate;
}

export function isAccessDenied(user, permissions) {
  if (!user.roles) {
    return true;
  }
  const isAllow = user.roles.some((role) => permissions.includes(role));

  return !isAllow;
}
