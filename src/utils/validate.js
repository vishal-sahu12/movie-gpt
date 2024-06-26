export const checkValidData= (email,password) =>{
    const isEmailVaid =/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isNameValid =/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    // if (!isNameValid) {
    //     return "Name is Invalid"
    // } else  
    if (!isEmailVaid) {
        return "Email Is Invalid"
    }
    else if (!isPassValid) {
        return "Password Is Invalid"
    } else{
        return null;
    }

   

    

   
}