import Apis from './../../api'
import Request from '../../utils/request'
export const checkIsExist = async (params) => {
    return Request(Apis.checkIsExistApi, params).then((res) => {
        console.log(res)
    })
}