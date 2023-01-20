import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from "../pages/Home/Home"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            {/* <Route path="home" element={<Home/>}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default Router