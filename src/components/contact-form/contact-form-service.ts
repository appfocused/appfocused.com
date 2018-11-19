import axios from 'axios';

export const sendForm = async (model: any) => {
  return axios.post(
    '/api/email/send',
    { ...model },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};
