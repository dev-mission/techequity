import axios from 'axios';

const instance = axios.create({
  headers: {
    Accept: 'application/json',
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location = '/login';
    }
    return Promise.reject(error);
  }
);

const Api = {
  auth: {
    login(email, password) {
      return instance.post('/api/auth/login', {email, password});
    },
    logout() {
      return instance.get('/api/auth/logout');
    },
    register(data) {
      return instance.post('/api/auth/register', data);
    }
  },
  passwords: {
    reset(email) {
      return instance.post('/api/passwords', {email});
    },
    get(token) {
      return instance.get(`/api/passwords/${token}`);
    },
    update(token, password) {
      return instance.patch(`/api/passwords/${token}`, {password});
    }
  },
  devices: {
    index() {
      return instance.get('/api/devices');
    },
    create(data) {
      return instance.post('/api/devices', data);
    },
    get(id) {
      return instance.get(`/api/devices/${id}`);
    },
    update(id, data) {
     // console.log(id);
      // console.log(data);
      return instance.patch(`/api/devices/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/devices/${id}`);
    }
  },
  events: {
    index() {
      return instance.get('/api/events');
    },
    create(data) {
      return instance.post('/api/events', data);
    },
    get(id) {
      return instance.get(`/api/events/${id}`);
    },
    update(id, data) {
     // console.log(id);
      // console.log(data);
      return instance.patch(`/api/events/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/events/${id}`);
    }
  },
  organizations: {
    index() {
      return instance.get('/api/organizations');
    },
    create(data) {
      return instance.post('/api/organizations', data);
    },
    get(id) {
      return instance.get(`/api/organizations/${id}`);
    },
    update(id, data) {
      return instance.patch(`/api/organizations/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/organizations/${id}`);
    }
  },
  programDirectors: {
    index() {
      return instance.get('/api/programDirectors');
    },
    create(data) {
      return instance.post('/api/programDirectors', data);
    },
    get(id) {
      return instance.get(`/api/programDirectors/${id}`);
    },
    update(id, data) {
     // console.log(id);
      // console.log(data);
      return instance.patch(`/api/programDirectors/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/programDirectors/${id}`);
    }
  },
  donors: {
    index() {
      return instance.get('/api/donors');
    },
    create(data) {
      return instance.post('/api/donors', data);
    },
    get(id) {
      return instance.get(`/api/donors/${id}`);
    },
    update(id, data) {
     // console.log(id);
      // console.log(data);
      return instance.patch(`/api/donors/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/donors/${id}`);
    }
  },
  students: {
    index() {
      return instance.get('/api/students');
    },
    create(data) {
      return instance.post('/api/students', data);
    },
    get(id) {
      return instance.get(`/api/students/${id}`);
    },
    update(id, data) {
     // console.log(id);
      // console.log(data);
      return instance.patch(`/api/students/${id}`, data);
    },
    delete(id) {
      return instance.delete(`/api/students/${id}`);
    }
  },
  users: {
    me() {
      return instance.get('/api/users/me');
    },
    index() {
      return instance.get('/api/users');
    }
  }
};

export default Api;
