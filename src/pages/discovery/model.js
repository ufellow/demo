import { getCarouselList, recommendSongsList } from './service';

const carouselModel = {
    namespace: 'discovery',
    state: {
        banners: [],
        tabType: 3,
        recommendsongs: []
    },
    reducers: {
        getList(state, action) {
            return action.payload
        },
        // getRecommend(state, action) {
        //     return action.payload
        // }
    },
    effects: {
        *getRemote(action, { put, call, select }) {
            const tabType = yield select(discovery => discovery.tabType);
            const banners = yield call(getCarouselList, { tabType: tabType });
            const recommendsongs = yield call(recommendSongsList);
            yield put({
                type: 'getList',
                payload: { banners, tabType, recommendsongs }
            })

        }

    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/') {
                    dispatch({
                        type: 'getRemote',
                    })
                }
            })
        }

    }
}
export default carouselModel;