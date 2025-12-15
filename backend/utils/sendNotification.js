const sendEmail = (to, subject, message) => {
console.log(` Email sent to: ${to}\nSubject: ${subject}\nMessage: ${message}`);
};


const sendSMS = (to, message) => {
console.log(` SMS sent to: ${to}\nMessage: ${message}`);
};


module.exports = { sendEmail, sendSMS };