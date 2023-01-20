import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from "../pages/Home/Home"
import CreateCar from "../pages/CreateCar/CreateCar"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/create" element={<CreateCar/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router