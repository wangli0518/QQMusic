import axios from "./index";

export default function add(id) {
    return axios.get("/add?id="+id)
}