import request from '@/utils/request'
const api_name = '/edu/teacher'
export default {
    getTeacherList(page, limit) {
        return request({
            url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
            method: 'get'
        })
    },
    //讲师详情的方法
    getTeacherInfo(id) {
        return request({
            url: `/eduservice/teacherfront/getTeacherFrontInfo/${id}`,
            method: 'get'
        })
    }
}