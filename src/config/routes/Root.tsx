import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultPage} from "./default/DefaultPage.tsx";
import {FileManager} from "../../modules/filemanager/page/FileManager.tsx";
import {PatientManager} from "../../modules/patient/page/PatientManager.tsx";
import {Hospitals} from "../../modules/hospitals/page/Hospitals.tsx";
import {HospitalDetail} from "../../modules/hospitals/page/HospitalDetail.tsx";
import {PatientManagerDetail} from "../../modules/patient/page/PatientManagerDetail.tsx";

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
                    path={"/hospital/:hospitalCode"}
                    element={<HospitalDetail/>}
                />

                <Route
                    path={"/patientManager/:patientCode"}
                    element={<PatientManagerDetail/>}
                />

                <Route
                    path={"/patientManager"}
                    element={<PatientManager/>}
                />
            </Route>
        </Routes>
    </BrowserRouter>
)