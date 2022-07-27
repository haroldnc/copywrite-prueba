import { NEW_TEXT } from "./actionsTypes";

export function newText(text) {
    return {
        type: NEW_TEXT,
        payload: text,
    };
}
