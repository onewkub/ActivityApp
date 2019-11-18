import { AbstractControl } from '@angular/forms';

export const  PassMathcer = (control: AbstractControl) => {
    const password = control.get('password');
    const password_confirmation = control.get("password_confirmation");
    console.log(`${password.value} : ${password_confirmation.value}`)
    // if(!password || !password_confirmation) return null;
    return password.value === password_confirmation.value ? null : { notMatchPass : true};
    // console.log(control.value);
    // return null;
};
