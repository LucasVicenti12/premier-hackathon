import {loadable} from "jotai/utils";
import {atom} from "jotai";
import { hospitalMetricUseCase } from "../useCase/HospitalMetricUseCase";

const Page = atom(0)

const List = loadable(atom(async (get) => {
    const page = get(Page)

    return hospitalMetricUseCase.getHospitalMetric(page)
}))

export default {
    Page,
    List
}