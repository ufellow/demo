const baseUrl = 'https://netease-cloud-music-api-lac-pi.vercel.app/'
// const baseUrl = 'http://localhost:3000/'
const apis = {
    dicoveryBannerApi: baseUrl + 'banner',
    recommendPlaylistApi: baseUrl + 'personalized?limit=6',
    recommendSongsApi: baseUrl + 'personalized/newsong',
    checkIsExistApi: baseUrl + '/cellphone/existence/check',
}
export default apis;