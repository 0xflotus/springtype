import {BeanFactory} from "./BeanFactory";
import {APPLICATION_CONTEXT} from "./constant/APPLICATION_CONTEXT";
import {ApplicationRuntime} from "./enum/ApplicationRuntime";
import {ApplicationEnvironment} from "./enum/ApplicationEnvironment";

export class ApplicationContext extends BeanFactory {

    protected environment: ApplicationEnvironment = ApplicationEnvironment.DEV;
    protected config: any = {};

    setEnvironment(environment: ApplicationEnvironment): void {
        this.environment = environment;
    }

    getEnvironment(): ApplicationEnvironment {
        return this.environment;
    }

    static setGlobal(name: string|number|symbol, value: any): void {
        (<any>ApplicationContext.getRuntimeGlobalObject())[name] = value;
    }

    static getGlobal(name: string|number|symbol): any {
        return (<any>ApplicationContext.getRuntimeGlobalObject())[name];
    }

    static getInstance(): ApplicationContext {

        let globalContext = ApplicationContext.getGlobal(APPLICATION_CONTEXT);

        if (!globalContext) {
            globalContext = new ApplicationContext();
            ApplicationContext.setGlobal(APPLICATION_CONTEXT, globalContext);
        }
        return globalContext;
    }

    static getRuntimeGlobalObject(): Object {
        
        switch (ApplicationContext.getRuntime()) {
            case ApplicationRuntime.WEBBROWSER:
                return window;
        }

        // return local object context
        return {};
    }

    static getRuntime(): ApplicationRuntime {

        if (typeof window != 'undefined') {
            return ApplicationRuntime.WEBBROWSER;
        }
        return ApplicationRuntime.NODE;
    }

    set(name: string|number|symbol, value: any) {
        Reflect.set(this.config, name, value);
    }

    get(name: string|number|symbol): any {
        return Reflect.get(this.config, name);
    }
}