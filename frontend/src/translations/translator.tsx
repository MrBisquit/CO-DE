// Language imports
import en_gb from "./en-gb";
import es_es from "./es-es";

// Types
export interface Translation {
    name?: string | "CO-DE",
    serverStatus?: {
        serverStatus?: string | "Server status",
        great?: string | "Great"
    },
    currentTranslation?: {
        currentTranslation?: string | "Current translation",
        lang?: string | "EN-GB"
    }
}
export interface TranslationType {
    name: string,
    data: Translation
}

// List of translations (Needs to be updated)
const translations: Record<string, TranslationType> = {
    "en-gb" : {
        name: "en-gb",
        data : en_gb
    },
    "es-es" : {
        name : "es-es",
        data : es_es
    }
};

// Variables
let currentTranslation: string = "en-gb";

if(getLanguageCookie() == null) {
    setLanguageCookie("en-gb");
} else {
    currentTranslation = getLanguageCookie() || "en-gb";
}

/**
 * Gets the current set of translations for the UI to use.
 * @returns {Translation} The current translations.
 */
export function GetCurrentTranslation(): Translation {
    return translations[currentTranslation].data;
}

/**
 * Sets the current translation. (To be updated via UI)
 * @param {TranslationType} type The translation to use next time GetCurrentTranslation is called.
 */
export function SetCurrentTranslation(translation: TranslationType): void {
    if(!checkTranslation(translation)) {
        throw new Error("Invalid translation.");
    }
    currentTranslation = translation.name;
}

export function GetTranslations(): Record<string, TranslationType> {
    return translations;
}

// Utilities
function checkTranslation(translation: TranslationType): boolean {
    let valid: boolean = false;
    /*for (let i = 0; i < translations.length; i++) {
        if(translations[i] == translation) {
            valid = true;
        }
    }*/

    valid = checkExists(translations[translation.name])

    return valid;
}

function checkExists(value: any) {
    return value != null && value != undefined && value != "";
}

function setLanguageCookie(language: string) {
    document.cookie = `language=${language}; path=/`;
}

function getLanguageCookie() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'language') {
        return value;
      }
    }
    return null;
}