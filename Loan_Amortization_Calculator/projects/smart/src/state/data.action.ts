import { Action } from "@ngrx/store";
import { Schedule } from "../../../ui/src/lib/tabularViewInterface";

export enum ActionType{
    dataCall = 'Data Call',
    loading = 'Data Loading',
    loaded = 'Data Loaded',
    loadFail = 'Data Load Fail'
}

export class DataCall implements Action{
    readonly type = ActionType.dataCall;
    constructor(){}
}
export class Loading implements Action{
    readonly type = ActionType.loading;
    constructor(){}
}
export class Loaded implements Action{
    readonly type = ActionType.loaded;
    constructor(public content:Schedule){

    }
}
export class LoadFail implements Action{
    readonly type = ActionType.loadFail;
    constructor(public error:Error){}
}

export type DataAction = DataCall | Loading | Loaded | LoadFail;