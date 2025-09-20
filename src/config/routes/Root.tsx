import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultPage} from "./default/DefaultPage.tsx";
import {FileManager} from "../../filemanager/page/FileManager.tsx";

export const Root = () => (
    <BrowserRouter basename={"/app"}>
        <Routes>
            <Route
                path={""}
                element={<DefaultPage/>}
            >
                <Route
                    path={"/fileManager"}
                    element={<FileManager/>}
                />
            </Route>
        </Routes>
    </BrowserRouter>
)