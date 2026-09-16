// path: crs-frontend/src/types/course.ts
// purpose: dinh nghia kieu Course va PageResponse tuong thich voi Spring Data Pageable

export interface Course {
    id: number;
    tenMonHoc: string;
    soTinChi: number;
    soChoToiDa: number;
    soChoConLai: number;
}

export interface PageResponse<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
}
