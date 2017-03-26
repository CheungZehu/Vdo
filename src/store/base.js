import axios from 'axios'

// axios.get('/v2/movie/in_theaters', {'city': '广州'})
// 	.then((result) => {
// 		console.log(result)
// 	})

const HOST = '/api/'

export default function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(HOST + url, { params })
      .then((res) => {
        resolve(res.data);
      }).catch(err => reject(err));
  });
}