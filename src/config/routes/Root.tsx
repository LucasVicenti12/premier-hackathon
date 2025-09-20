import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultPage} from "./default/DefaultPage.tsx";
import {FileManager} from "../../filemanager/page/FileManager.tsx";
import {PatientManager} from "../../patient/page/PatientManager.tsx";

export const Root = () => (
    <BrowserRouter basename={"/app"}>
        <Routes>
            <Route
                path={""}
                element={<DefaultPage/>}
            >
                <Route
                    path={"/home"}
                    element={<div></div>}
                />

                <Route
                    path={"/fileManager"}
                    element={<FileManager/>}
                />

                <Route
                    path={"/patientManager"}
                    element={<PatientManager/>}
                />
            </Route>
        </Routes>
    </BrowserRouter>
)