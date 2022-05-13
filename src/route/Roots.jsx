import { Navigate, Route, Routes } from "react-router-dom";
import NewPlace from "../places/pages/NewPlace";
import Users from "../user/pages/Users";

export default function Roots() {
    return (
        <Routes>
            <Route exact  path="/" element={<Users />} />
            <Route  path="places" element={<Users />} />
            <Route  path="places/new" element={<NewPlace />} />
           

            <Route path="*"  element={ <Navigate to="/" />} />
        </Routes>
    )
}  