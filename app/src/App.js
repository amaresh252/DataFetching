import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { UserData } from './component/UserData';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UserDetails } from './component/UserDetails';
import { Instruction } from './component/Instruction';
const router=createBrowserRouter([
  {
    path:'/',
    element:(<UserData/>)
  },
  {
    path:'/userdetails/:id',
    element:(<UserDetails/>)
  },
  {
    path:'/instruction',
    element:(<Instruction/>)
  },
])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
