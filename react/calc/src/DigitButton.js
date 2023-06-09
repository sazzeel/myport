import { ACTIONS } from "./App"

export default function DigitButton({dispatch, digit}) {
    return (
        <buttton 
        onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit }  })}
        >
            {digit}
            </buttton>

    )
}