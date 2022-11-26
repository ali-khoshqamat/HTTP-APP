import http from "./httpService";
import instance from "../axiosInstance";

// http
export function getAllComments() {
  return http.get("/comments");
}

export function getComment(id) {
  return http.get(`/comments/${id}`);
}

export function postComment(bodyRequest) {
  const token = "SECURE TOKEN!";
  const header = {
    headers: {
      // Authorization: "SECURE TOKEN",
      Authorization: `Bearer ${token}`,
    },
  };

  return http.post("/comments", bodyRequest, header);
}

export function putComment(id, bodyRequest) {
  return http.put(`/comments/${id}`, bodyRequest);
}

// instance
export function deleteComment(id) {
  return instance.delete(`/comments/${id}`);
}
