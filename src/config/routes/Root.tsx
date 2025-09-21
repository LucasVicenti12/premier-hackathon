import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultPage} from "./default/DefaultPage.tsx";
import {FileManager} from "../../modules/filemanager/page/FileManager.tsx";
import {PatientManager} from "../../modules/patient/page/PatientManager.tsx";
import {Hospitals} from "../../modules/hospitals/page/Hospitals.tsx";
import {HospitalDetail} from "../../modules/hospitals/page/HospitalDetail.tsx";
import {PatientManagerDetail} from "../../modules/patient/page/PatientManagerDetail.tsx";
import {DoctorManager} from "../../modules/doctor/page/DoctorManager.tsx";
import {Home} from "../../modules/home/page/Home.tsx";
import {CidTableManager} from "../../modules/cidtable/page/CidTableManager.tsx";
import {DoctorDetail} from "../../modules/doctor/page/DoctorDetail.tsx";
<<<<<<< HEAD
import { Maps } from "../../modules/Maps/page/map.tsx";
=======
import {StateManager} from "../../modules/state/page/StateManager.tsx";
import {CityManager} from "../../modules/city/page/CityManager.tsx";
>>>>>>> 750061e4e7482232399fb71755752effe2a6fa50

export const Root = () => (
    <BrowserRouter basename={"/app"}>
        <Routes>
            <Route
                path={""}
                element={<DefaultPage />}
            >
                <Route
                    path={"/home"}
                    element={<Home />}
                />

                <Route
                    path={"/fileManager"}
                    element={<FileManager />}
                />

                <Route
                    path={"/hospital"}
                    element={<Hospitals />}
                />

                <Route
                    path={"/hospital/:hospitalCode"}
                    element={<HospitalDetail />}
                />

                <Route
                    path={"/patientManager/:patientCode"}
                    element={<PatientManagerDetail />}
                />

                <Route
                    path={"/patientManager"}
                    element={<PatientManager/>}
                />

                <Route
                    path={"/state"}
                    element={<StateManager/>}
                />

                <Route
                    path={"/city"}
                    element={<CityManager/>}
                />

                <Route
                    path={"/cidTable"}
                    element={<CidTableManager/>}
                />

                <Route
                    path={"/doctorManager"}
                    element={<DoctorManager />}
                />

                <Route
                    path={"/doctorManager/:doctorCode"}
                    element={<DoctorDetail />}
                />

                <Route
                    path={"/maps"}
                    element={<Maps />}
                />

            </Route>
        </Routes>
    </BrowserRouter>
)