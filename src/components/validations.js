import * as yup from 'yup';

const validations = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email(),
});

export default validations ;