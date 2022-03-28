import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "e72442e7-e84c-4575-88b8-fbca240ffc79"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`,)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`,)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`, {
            withCredentials: true})
    },
}