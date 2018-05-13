import axios from "./index";

export default function remove(id) {
    return axios.get("/delete?id="+id)
}