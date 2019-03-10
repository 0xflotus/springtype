import {registerTheme} from "../function/registerTheme";

export function AppTheme(theme: any): any {

    // called with @Theme() or @Theme({ ... })
    if (!(typeof theme === 'function')) {

        return (target: any) => {
            registerTheme(target, theme);
            return target;
        }
    }
}