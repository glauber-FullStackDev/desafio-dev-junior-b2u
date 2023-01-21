import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from "../pages/Home/Home"
import CreateVehicle from "../pages/CreateVehicle/CreateVehicle"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/create" element={<CreateVehicle/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router