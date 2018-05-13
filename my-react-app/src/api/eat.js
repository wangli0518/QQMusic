import axios from './index'
//获取eat 数据
export function getEat() {
    return axios.get('/eat');
}
