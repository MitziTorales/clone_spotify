export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // token: 'BQA9NU-EwosKTyMDHjVH3A9D30MColXJkKZaJUpqWmhPG_nvnG83fme-xG5lJWp0rOwyqcV2Xgp1_p0_ORslCcjJnpzA7p7Ngxkx9V-VSc5LjkVoxjOdp-bq3LRyzQeuWiQSc-lL3Eg3HailcFFrYOjHTfcahDwodGSV8syYD5_Dz1h_IV4Z',
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
};

export default reducer;
