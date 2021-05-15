import request from 'umi-request'
import Apis from './../../api'
export const getCarouselList = async (params) => {
    return (
        request(`${Apis.dicoveryBannerApi}?type=${params.tabType}`)
            .then((res) => {
                // if (response.status == 200) {
                //     if (data.code == 200)
                //         console.log(data)
                //     return (data);
                // }
                if (res.code == 200)
                    return (res.banners);


            })
            .catch(error => {
                console.log(error);
            })
    )
}
export const recommendPlayList = async (params) => {
    return (
        request(Apis.recommendPlaylistApi)
            .then((res => {
                if (res.code == 200)
                    return (res.result);

            }))
            .catch(error => {
                console.log(error)
            })
    )
}
export const recommendSongsList = async (params) => {
    return (
        request(Apis.recommendSongsApi)
            .then((res => {
                if (res.code == 200)
                    return (res.result);

            }))
            .catch(error => {
                console.log(error)
            })
    )
}
