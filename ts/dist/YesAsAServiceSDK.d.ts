import { YesEntity } from './entity/YesEntity';
export type * from './YesAsAServiceTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { YesAsAServiceEntityBase } from './YesAsAServiceEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class YesAsAServiceSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Yes(entopts?: Record<string, any>): YesEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): YesAsAServiceSDK;
    tester(testopts?: any, sdkopts?: any): YesAsAServiceSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof YesAsAServiceSDK;
export { stdutil, config, BaseFeature, YesAsAServiceEntityBase, YesAsAServiceSDK, SDK, };
export type { DirectResult };
