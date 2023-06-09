import {object, string} from "yup";
export default object ({
    email: string()
    .email("Email must be a valid one")
    .required("Email is definetly required..."),
    password:string()
    .required()
    .min(8, "minimum password is 8 so make a big one")
    .max(10,"maximum is 10 show dont make a big one"),
});