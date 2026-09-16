// path: crs-frontend/src/types/auth.ts
// purpose: dinh nghia kieu LoginRequest va LoginResponse

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    username: string;
    role: 'ADMIN' | 'STUDENT';
}
