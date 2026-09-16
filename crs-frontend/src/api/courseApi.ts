// path: crs-frontend/src/api/courseApi.ts
// purpose: goi GET /api/courses qua Gateway voi tham so keyword, page, size

import axiosClient from './axiosClient';
import type { Course, PageResponse } from '../types/course';

export const getCourses = (keyword: string = '', page: number = 0, size: number = 10) => {
    return axiosClient.get<PageResponse<Course>>('/api/courses', {
        params: {
            keyword: keyword.trim() ? keyword.trim() : undefined,
            page,
            size,
        },
    });
};
