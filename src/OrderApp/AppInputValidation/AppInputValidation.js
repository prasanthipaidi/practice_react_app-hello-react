import {useState} from 'react';
function AppInputValidation() {
    const [UserInput,setUserInput] = useState('');
    const [UserBlur,setUserBlur] = useState(false);
    const InputHandler = (event) => {
        setUserInput(event.target.value);
    }
    const BlurHandler = (event) => {
        setUserBlur(true);
    }
    const emptyValidation = val => val.trim()!=='';
    const lenValidation = val => val.length<=5;
    const isValid = emptyValidation(UserInput);
    const hasError = !isValid && UserBlur;
    const isLenValid = lenValidation(UserInput);
    const hasLenError = !isLenValid && UserBlur;
    let pattern = /^[0-9a-zA-Z]+$/;
    let isAlphaValid = false;
    if(UserInput.match(pattern)) {
        isAlphaValid = true;
    }
    const hasAlphaError = !isAlphaValid && UserBlur;
    const reset = () => {
        setUserInput('');
        setUserBlur(false);
    }

    return {
        isValid,
        hasError,
        InputHandler,
        BlurHandler,
        reset,
        UserInput,
        isLenValid,
        hasLenError,
        hasAlphaError,
        isAlphaValid
    }
    
}
export default AppInputValidation;