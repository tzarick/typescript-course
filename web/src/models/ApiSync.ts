import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number; // must match UserProps (optional as well)
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    // create a new post: POST - /posts
    // update a post: PUT - /posts/:id
    const { id } = data;
    if (id) {
      // PUT
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // POST
      return axios.post(this.rootUrl, data);
    }
  }
}
