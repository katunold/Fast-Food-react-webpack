
export const validateUsername = username => (
		!!username && username.match(/^\w{4,40}/)
		? ''
		: 'Username should have at-least 4 and at-most 40 alphanumerics');

export const validatePassword = password => (password.match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/)
		? ''
		: 'Password should contain at-least one letter and one digit. It should be at-least 6 characters long');

export const validateEmail = email => (email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
		? ''
		: 'You have entered an invalid email address!');

export const validateContact = contact => (contact.match(/\d{10,13}/)
		? ''
		: 'Allowed format is (07********) with at-least 10 but not more that 13 digits');
