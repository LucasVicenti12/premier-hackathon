import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultPage} from "./default/DefaultPage.tsx";
import {FileManager} from "../../modules/filemanager/page/FileManager.tsx";
import {PatientManager} from "../../modules/patient/page/PatientManager.tsx";
import {Hospitals} from "../../modules/hospitals/page/Hospitals.tsx";
import {DoctorManager} from "../../modules/doctor/page/DoctorManager.tsx";

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
                    path={"/hospital"}
                    element={<Hospitals/>}
                />

                <Route
                    path={"/patientManager"}
                    element={<PatientManager/>}
                />
                <Route 
                    path={"/doctorManager"}
                    element={<DoctorManager/>}
                />


            </Route>
        </Routes>
    </BrowserRouter>
)