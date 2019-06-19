import {Bean} from "@springtype/core";
import * as i18next from "i18next";
import {LanguageChangedHandler} from "./interface/LanguageChangedHandler";

@Bean
export class Translator {

    async changeLanguage(language: string): Promise<void> {
        return new Promise((resolve) => {
            i18next.changeLanguage(language, resolve);
        });
    }

    async isInitialized(): Promise<void> {

        return new Promise((resolve) => {
            i18next.init({}, resolve);
        });
    }

    getActiveLanguage(): string {
        return i18next.language;
    }

    onLanguageChanged(eventHandler: LanguageChangedHandler) {
        i18next.on('languageChanged', eventHandler);
    }

    get i18next() {
        return i18next;
    }
}