import {loadable} from "jotai/utils";
import {atom} from "jotai";
import { stateMetricUseCase } from "../useCase/StateMetricUseCase";

const Page = atom(0)

const List = loadable(atom(async (get) => {
    const page = get(Page)

    return stateMetricUseCase.getStateMetric(page)
}))

export default {
    Page,
    List
}