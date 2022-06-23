import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWNhODA1MTU5NjAwNzBlYzg2YjZkZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTkwNTc3MiwiZXhwIjoxNjU2MTY0OTcyfQ.npKBzE9MXPqDA6Uj8TelpaPmVme8OfN7iqqxFksjX4Y"

export const publicRequest = axios.create({
    url: BASE_URL,
});

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})