// path: crs-frontend/src/types/course.ts
// purpose: dinh nghia kieu Course va PageResponse tuong thich voi Spring Data Pageable
// bo sung kieu du lieu rieng cho form, khac voi Course (Course co id, form thi khong bat buoc)

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

export type PagedResponse<T> = PageResponse<T>;

export interface CourseFormValues {
    tenMonHoc: string;
    soTinChi: string; // dung string trong form de de kiem soat input rong, se parseInt khi gui di
    soChoToiDa: string;
}

export const emptyCourseForm: CourseFormValues = {
    tenMonHoc: '',
    soTinChi: '',
    soChoToiDa: '',
};
