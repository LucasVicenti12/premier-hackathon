import {Outlet} from "react-router-dom";
import Layout from "../layout/Layout.tsx";

export const DefaultPage = () => {
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