function generatePassword(num) {
    
    /* This creates the pool of selctable characters */
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    /* set random number parameters*/
    const min = 0;
    const max = characters.length;
    
    /* Create container for new string*/
    let newPassword = "";

    /* Generate random number */
    function getRandomChar() {
        return characters[Math.floor(Math.random() * (max - min - 1) + min)];
    }

    /* select random character and add to newPassword string*/
    while(newPassword.length < num) {
        newPassword += getRandomChar();
    }

    return newPassword;

}
