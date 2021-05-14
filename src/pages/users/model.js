import { getRemoteList } from "./service";

const usersModel = {
    namespace: 'users',
    state: [],
    reducers: {
        getList(state, action) {
            return action.payload;
        }
    },
    effects: {
        *getRemote(action, { put, call }) {
            const data = yield call(getRemoteList)
            let resData = []
            if (data.length > 0) {
                resData = data
            }
            yield put({
                type: 'getList',
                payload: data
            })
        }

    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/users') {
                    dispatch({
                        type: 'getRemote',
                    })
                }
            })
        }
    }
}
export default usersModel;