import { ValidationErrors, AbstractControl } from '@angular/forms';

export class ChangePasswordValidators{
    static shouldBeCorrect(c: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(c.value !== "123"){
                    console.log("hello")
                    resolve({ shouldBeCorrect : true})
                }
                else resolve(null);
            },2000);
        });
    }
    static shouldMatch(c: AbstractControl): ValidationErrors | null {
        let newPassword = c.get("newPassword");
        let confirmPassword = c.get("confirmPassword");
        if(newPassword.value !== confirmPassword.value){
            return {shouldMatch:true}
        }
        return null;
    }
}