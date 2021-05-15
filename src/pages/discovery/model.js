import { getCarouselList, recommendPlayList, recommendSongsList } from './service';

const carouselModel = {
    namespace: 'discovery',
    state: {
        banners: [],
        tabType: 3,
        recPlaylist: [],
        recSongs: []
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
            const recPlaylist = yield call(recommendPlayList);
            const recSongs = yield call(recommendSongsList);
            yield put({
                type: 'getList',
                payload: { banners, tabType, recPlaylist, recSongs }
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