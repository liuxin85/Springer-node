import request from 'request';

import { createReadStream } from 'fs';

const formData = {
  firstname: 'Jason',
  lastname: 'Bourne',
  street: '1800 Colonia Fram Rd',
  city: 'langley',
  country: 'USA',
  upload: createReadStream('./bild.png'),
};

request.post(
  {
    url: 'http://localhost:8080/save',
    formData,
  },
  (err, response, body) => {
    if (err) {
      console.log(err);
    } else {
      console.log(body);
    }
  }
);
