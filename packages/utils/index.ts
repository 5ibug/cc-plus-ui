import { App } from 'vue';
import type { InstallRecord, NameRecord, ComponentNameRecord } from '@/types';

export const addInstall = <T>(com: T): T & InstallRecord & NameRecord => {
    const component = com as T & InstallRecord & NameRecord;
    component.install = (app: App) => {
        console.log(component.name)
        app.component(component.name, component);
    };
    return component;
};

export const addInstallAPI = <T>(com: T): T & InstallRecord & ComponentNameRecord => {
    const component = com as T & InstallRecord & ComponentNameRecord;
    component.install = (app: App) => {
        app.config.globalProperties[`$${component.componentName}`] = component;
    };
    return component;
};
