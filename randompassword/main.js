// random password generator


function generate_password(length,lowercase,uppercase,numbers,special){
  
  const lowcs = 'abcdefghijklmnopqrstuvwxyz';
  const uprcs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '1234567890';
  const spcl = '~!@#$%^&*()"|?><';

  let allowedchars = "";
  let password = "";

  allowedchars += lowercase ? lowcs:"";
  allowedchars += uppercase ? uprcs:"";
  allowedchars += numbers ? nums:"";
  allowedchars += special ? spcl:"";

  if(length<=0){
    return 'length cannot be negative or 0';
  }
  if(allowedchars.length === 0){
    return 'you should select any one for the password';
  }

  for(let i=0;i<length;i++){
    let randomps = Math.floor(Math.random()*allowedchars.length);
    password += allowedchars[randomps];
  }

  return password;
}


const passwordlength =12;
const lowercase = true;
const uppercase =true;
const numbers = false;
const special = true;

const password = generate_password(passwordlength,lowercase,uppercase,numbers,special);
console.log(`Generated password: ${password}`);