const baseUrl = 'https://netease-cloud-music-api-lac-pi.vercel.app/'
// const baseUrl = 'http://192.168.0.102:3000/'
const apis = {
    dicoveryBannerApi: baseUrl + 'banner',
    recommendPlaylistApi: baseUrl + 'personalized?limit=6',
    recommendSongsApi: baseUrl + 'personalized/newsong'
}
export default apis;