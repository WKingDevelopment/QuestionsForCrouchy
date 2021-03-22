function isEmptyOrSpace(str:string):boolean{
    return str === null || str.match(/^ *$/) !== null;
};


function validateEmail(email:string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateSubmission = (name:string|undefined, email:string|undefined, details:string, dateTime:Date):string => {
    if (name && isEmptyOrSpace(name)) { return 'Please enter an name.'; }
    if (email && isEmptyOrSpace(email)) { return 'Please enter an email.'; }
    if (details && isEmptyOrSpace(details)) { return 'Please enter a question.'; }
    return '';
}

const validateUser = (name:string, email:string): string => {
    if (isEmptyOrSpace(name)) { return 'Please enter an name.'; }
    if (isEmptyOrSpace(email)) { return 'Please enter an email.'; }
    if (!validateEmail(email)) { return `'${email}' is not in the correct format for an email.`; }
    return '';
  }

export { isEmptyOrSpace, validateEmail, validateUser, validateSubmission }