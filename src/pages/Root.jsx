import MainNavigation from "../components/MainNavigation.jsx";
import { Outlet } from "react-router-dom";

export default function RootLayout () {
    return (
        <>
        <MainNavigation/>
        <main>
        <Outlet/>
        </main>
        </>
    )
}