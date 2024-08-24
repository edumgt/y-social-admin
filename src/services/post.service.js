import { APIClient } from "../helpers/api_helper";

const baseUrl = `api/v1/post`;
const api = new APIClient();

export const Get = (params) => api.get(baseUrl, params);
export const GetById = (id) => api.get(baseUrl + `/get-post/${id}`);
export const GetByUserId = (id) => api.get(baseUrl + `/${id}`);
export const Create = (params) => api.create(baseUrl, params);
export const Delete = (params) => api.delete(baseUrl + '/delete', params);
export const Update = (postID, params) => api.update(baseUrl + `/update-post`, postID, params);
export const AllPosts = (query) => api.getAll(baseUrl + '/all-posts', query);
export const UpdateAvatar = (params) => api.create(baseUrl + '/change-avatar', params);
export const ChangePassword = (params) => api.create(baseUrl + '/change-password', params);
export const GetCurrentUser = () => {
  return api.get(baseUrl + '/get-current-user');
};
