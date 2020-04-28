const VALIDATIONS = {
  NOT_EMPTY: 'NOT_EMPTY',
  EMAIL: 'EMAIL',
};

const EMAIL_REGEX = /\S+@\S+\.\S+/;

export const VALIDATORS = {
  [VALIDATIONS.NOT_EMPTY]: {
    validate: value => value && value.trim() !== '',
    message: 'This field is required',
  },
  [VALIDATIONS.EMAIL]: {
    validate: value => EMAIL_REGEX.test(value),
    message: 'The value does not match a valid email format'
  }
};

const validateField = (validators, value) => {
  if (!validators) {
    return;
  }

  const validationWithError = validators.find(validator => {
    const validation = VALIDATORS[validator];

    return validation ? !validation.validate(value) : false;
  });

  return validationWithError ? VALIDATORS[validationWithError].message : '';
}

export default validateField;
