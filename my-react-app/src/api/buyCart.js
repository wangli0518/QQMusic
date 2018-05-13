import axios from './index';
//获取 数据
export default function getList() {
    return axios.get("/fruit?offset=0&limit=10");
}
