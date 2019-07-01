import axios from "axios";
import { apiServer } from "../config";

const instance = axios.create({
  baseURL: apiServer,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Cache: "no-cache",
    withCredentials: true
  }
});

export const apiTest = () => instance.get("/api/cms/test");

export function* fetchTest() {
  return yield instance.get("/api/cms/test");
}
