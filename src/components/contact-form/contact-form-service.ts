import axios from 'axios';

export const sendForm = async (model: any) => {
  return axios.post('https://api.appfocused.com/api/email/send', {
    ...model
  });
};
