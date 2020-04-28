const VALIDATIONS = {
  NOT_EMPTY: 'NOT_EMPTY',
  EMAIL: 'EMAIL',
};

const EMAIL_REGEX = /\S+@\S+\.\S+/;

const VALIDATORS = {
  [VALIDATIONS.NOT_EMPTY]: {
    validate: value => value && value.trim() !== '',
    message: 'This field is required',
  },
  [VALIDATIONS.EMAIL]: {
    validate: value => EMAIL_REGEX.test(value),
    message: 'The value does not match a valid email format'
  }
};

export default VALIDATORS;
