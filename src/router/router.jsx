import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../pages/HomePage/HomePage';

const my_router = createBrowserRouter(
    [
        {

            element: <App/>,
            children: [
                {
                    path:'/',
                    element:<HomePage/>
                }
                
            ]
        }
    ]
);
export default my_router;