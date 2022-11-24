import http from "./httpService";

export function getAllComments() {
  return http.get("/comments");
}

export function getComment(id) {
  return http.get(`/comments/${id}`);
}

export function postComment(bodyRequest) {
  return http.post("/comments", bodyRequest);
}

export function deleteComment(id) {
  return http.delete(`/comments/${id}`);
}
