import { checkIsExist } from './service.js';
const registModel = {
    namespace: 'regist',
    state: {
        phone: '',
        password: '',
        captcha: '',
        // isRegist: false

    },
    reducers: {
        checkPhoneISExist(state, action) {
            return action.payload;
        }
    },
    effects: {
        *isPhoneExist(action, { put, call, select }) {
            const phone = yield select(regist => regist.phone);
            const isRegist = yield call(checkIsExist, { phone: phone });
            yield put({
                type: 'checkPhoneISExist',
                payload: { isRegist }
            })

        }
    },
    subscriptions: {

    }
}

export default registModel;