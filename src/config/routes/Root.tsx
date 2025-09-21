import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultPage} from "./default/DefaultPage.tsx";
import {FileManager} from "../../modules/filemanager/page/FileManager.tsx";
import {PatientManager} from "../../modules/patient/page/PatientManager.tsx";
import {Hospitals} from "../../modules/hospitals/page/Hospitals.tsx";
import { Home } from "../../modules/home/page/Home.tsx";

export const Root = () => (
    <BrowserRouter basename={"/app"}>
        <Routes>
            <Route
                path={""}
                element={<DefaultPage/>}
            >
                <Route
                    path={"/home"}
                    element={<Home/>}
                />

                <Route
                    path={"/fileManager"}
                    element={<FileManager/>}
                />

                <Route
                    path={"/hospital"}
                    element={<Hospitals/>}
                />

                <Route
                    path={"/patientManager"}
                    element={<PatientManager/>}
                />
            </Route>
        </Routes>
    </BrowserRouter>
)