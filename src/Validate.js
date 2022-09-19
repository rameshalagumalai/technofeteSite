export const validatePassword = (password) => {
  console.log(password);
  let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
};

export const checkPasswordMatch = (password, retypedPassword) => {
  if (password === retypedPassword) {
    return true;
  } else {
    return false;
  }
};

export const checkUniqueRollNumber = (rollno, email) => {
  let rollNumberFromEmail = email.substring(0, email.indexOf("@"));
  console.log(rollNumberFromEmail.toUpperCase() + " " + rollno.toUpperCase())
  if (rollNumberFromEmail.toUpperCase() === rollno.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

export const validateName = (name) => {
  let regex = /[a-zA-Z][a-zA-Z ]{2,}/;
  let isValid = regex.test(name);
  return isValid;
};

export const validateRollNumber = (rollno) => {
  if (rollno.length >= 8) {
    return true;
  } else {
    return false;
  }
};

export const validateEmail = (email) => {
  if (email.length > 8 && email.includes("@mcet.in")) {
    return true;
  } else {
    return false;
  }
};
