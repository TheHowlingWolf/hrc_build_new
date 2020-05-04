import { API } from "../../backend";

export const signup = (user) => {
  console.log(user);
  return fetch(`https://hrc-backend.herokuapp.com/api/member/registration`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: user,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllMembers = () => {
  return fetch(`https://hrc-backend.herokuapp.com/api/members`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getOneMember = (memberId) => {
  return fetch(`https://hrc-backend.herokuapp.com/api/members/${memberId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
