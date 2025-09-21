import {Outlet} from "react-router-dom";
import Layout from "../layout/Layout.tsx";

export const DefaultPage = () => {
    console.log("running 1.5")

    return (
        <Layout.Root>
            <Layout.Header/>
            <Layout.SideNav/>
            <Layout.Main>
                <Outlet/>
            </Layout.Main>
        </Layout.Root>
    )
}