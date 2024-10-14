import MyHeader from "./MyHeader";
import MyContact from "./MyContact";
import MyFooter from "./MyFooter";
import {Outlet} from "react-router-dom";

export default function MainLayout () {
    return(
        <>
            <MyHeader />

            <Outlet />

            <MyContact />
            <MyFooter />
        </>
    )
}