import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/member';

export const listMembers = () => axios.get(REST_API_BASE_URL);

export const createMember = (member) => axios.post(REST_API_BASE_URL, member);

export const getMember = (memberId) =>
  axios.get(REST_API_BASE_URL + '/' + memberId);

export const updateMember = (memberId, member) =>
  axios.put(REST_API_BASE_URL + '/' + memberId, member);

export const deleteMember = (memberId) =>
  axios.delete(REST_API_BASE_URL + '/' + memberId);
