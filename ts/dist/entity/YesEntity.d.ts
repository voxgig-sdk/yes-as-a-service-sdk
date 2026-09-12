import { YesAsAServiceEntityBase } from '../YesAsAServiceEntityBase';
import type { YesAsAServiceSDK } from '../YesAsAServiceSDK';
import type { Control } from '../types';
import type { Yes, YesLoadMatch } from '../YesAsAServiceTypes';
declare class YesEntity extends YesAsAServiceEntityBase<Yes> {
    constructor(client: YesAsAServiceSDK, entopts: any);
    make(this: YesEntity): YesEntity;
    load(this: any, reqmatch?: YesLoadMatch, ctrl?: Control): Promise<YesEntity>;
}
export { YesEntity };
