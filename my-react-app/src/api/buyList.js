import axios from "./index";

export default function buyList() {
    return axios.get("/buycart")
}