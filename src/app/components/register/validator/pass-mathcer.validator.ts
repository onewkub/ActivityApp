import { AbstractControl } from '@angular/forms';

export const  PassMathcer = (control: AbstractControl) => {
    const password = control.get('password');
    const password_confirmation = control.get("password_confirmation");
    // console.log(`${password.value} : ${password_confirmation.value}`)
    if(!password || !password_confirmation) return null;
    return password.value === password_confirmation.value ? null : control.get('password_confirmation').setErrors(({passNotMatch: true}));
    // if(password.value === password_confirmation.value) return null;
    // else {control.get('password_confirmation').setErrors({passNotMatch: true})};

};
