// import es5 adapter for backward-compatibility
import {polyfillCustomElementsAPI} from "../polyfill/polyfillCustomElementsAPI";
import {WebComponentImpl} from "./../interface/WebComponentImpl";
import {decorateWebComponent} from "../function/decorateWebComponent";
import {error} from '../../../logger';

polyfillCustomElementsAPI();

export function Element<WC extends WebComponentImpl<any>>(tagName: string): any {
    
    return (webComponent: WC) => {

        if (!tagName) {
            error("The @Element ", webComponent, " has no tag name! It should look like: @Element('foo-bar-element')");
        }

        // must contain a kebab-dash
        if (tagName.indexOf('-') === -1) {
            error("The @Element ", webComponent, " tag name is not prefixed. It should look like: app-your-element-name, but it is: " + tagName);
        }

        return decorateWebComponent(tagName, webComponent);
    }
}