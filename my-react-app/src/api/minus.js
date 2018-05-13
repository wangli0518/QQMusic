import axios from "./index"

export default function minus(id){
    return axios.get("/minus?id="+id)
}