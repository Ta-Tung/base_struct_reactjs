const HOST = 'http://192.168.189.1/api/c';

export default {
  login: {
    method: 'POST',
    url: HOST + '/login',
  },
  wakeUp: {
    method: 'PUT',
    url: HOST + '/wake-up',
  },
  registerUser: {
    method: 'POST',
    url: HOST + '/register',
  },
  getAppInfo: {
    method: 'POST',
    url: HOST + '/app-infor',
  },
};
