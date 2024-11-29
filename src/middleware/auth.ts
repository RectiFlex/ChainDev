import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET);

export const verifyToken = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    throw new Error('Invalid token');
  }
};

export const requireAuth = async (request: Request) => {
  const token = request.headers.get('Authorization')?.split(' ')[1];
  if (!token) {
    throw new Error('No token provided');
  }
  return verifyToken(token);
};