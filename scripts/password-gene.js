/*

1. You should have a generatePassword function with a parameter. You can name the parameter whatever you like.
2. Your generatePassword function should return a string.
3. Your generatePassword function should return a new string that is the correct length.
4. Your function should return a randomly generated password with valid characters.
5. Your function should return a randomly generated password which contains more than one unique character.
6. Your function should return a new random string each time it is called.
7. You should have a password variable.
8. Your password variable should be a string.
9. You should call the generatePassword function with a numeric argument and store the returned password in the password variable.
10. You should log a single string combining Generated password: and the password separated by a single space using + or a template literal.

*/

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
