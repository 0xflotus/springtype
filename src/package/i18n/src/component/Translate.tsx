import {WebComponentLifecycle, Element, Attribute} from "@springtype/springtype-incubator-core";
import {t} from "../i18nextAdaper";
import {TranslationOptions} from "i18next";

@Element('st-t')
export class Translate extends HTMLElement implements WebComponentLifecycle {

    @Attribute
    key: string;

    @Attribute
    values?: object;

    @Attribute
    options?: TranslationOptions;

    cachedTranslation: string;

    onBeforeRender() {

        if (!this.cachedTranslation) {
            this.cachedTranslation = t(this.key, {...this.values || {}, ...this.options || {}});
        }
    }

    render() {
        return this.cachedTranslation;
    }
}