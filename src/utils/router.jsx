import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ChattingPage from '../pages/Chatting';
import EditProfilePage from '../pages/EditProfile';
import InfoPage from '../pages/Info';
import BossPage from '../pages/Boss';
import SearchPage from '../pages/Search';
import PickPage from '../pages/pick';
import DetailPage from '../pages/Detail';

const router = createBrowserRouter([
    { index: true, path: '/', element: <HomePage /> },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
        ],
    },
    { path: 'chatting', element: <ChattingPage /> },
    {
        path: 'mypage',
        children: [
            {
                path: '',
                element: <InfoPage />,
            },
            {
                path: 'profile',
                element: <EditProfilePage />,
            },
            {
                path: 'boss',
                element: <BossPage />,
            },
        ],
    },
    { path: 'search', element: <SearchPage /> },
    { path: 'pick', element: <PickPage /> },
    { path: 'detail', element: <DetailPage /> },
]);

export default router;
