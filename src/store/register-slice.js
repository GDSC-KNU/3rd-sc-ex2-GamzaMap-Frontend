// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     username: '',
//     password: '',
//     studentid: '',
// };
// export const registerSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         SET_USER: (state, action) => {
//             return { ...state, ...action.payload };
//         },
//     },
//     extraReducers: (builder) => {
//         // builder는 Case Reducer로 액션별로 나눠서 액션을 처리할 수 있음.
//         // extraReducer를 사용한 이유는 맵핑된 내부 액션 타입이 아니라 외부 액션을 참조하려는 것임.

//         // 회원가입
//         builder.addCase(signUpAsync.fulfilled, (state, action) => {
//             alert('회원가입에 성공하였습니다.');
//             setCookie('token', action.payload.token);
//             return {
//                 ...state,
//                 nickname: action.payload.nickname,
//                 isLoggedIn: true,
//             };
//         });
//         builder.addCase(signUpAsync.rejected, (state, action) => {
//             alert('회원가입에 실패했습니다.');
//             console.log(action.payload);

//             return { ...state };
//         });
//     },
// });

// export const registerActions = registerSlice.actions;

// export default registerSlice;
