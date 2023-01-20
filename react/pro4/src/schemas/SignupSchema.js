import * as Y from 'yup';

let SignupSchema = Y.object({
    fullname : Y.string().min(2, "Full Name must be 2 letters").required("Insert Your Full Name"),
    email : Y.string().email("Email id is not correct").required("Insert Your Email Id"),
    password : Y.string().min(6, "Insert Min 6 Cha").required("Insert Your Password"),
    re_pass : Y.string().required("Insert Re-Password").oneOf([Y.ref('password'), null], "Re-Password not matched"),
    contact : Y.number().required("Insert Your Contact Number")
})

export default SignupSchema;