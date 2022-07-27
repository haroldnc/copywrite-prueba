import { NEW_TEXT } from "./actionsTypes";
import axios from "axios";

export function newText(text) {
    return async (dispatch) => {
        return await axios
            .get(`https://localhost:3001/iecho?text=${text}`)
            .then((res) =>
                dispatch({
                    type: NEW_TEXT,
                    payload: res.data.text,
                })
            )
            .catch((err) => console.log(err.message));
    };
}
