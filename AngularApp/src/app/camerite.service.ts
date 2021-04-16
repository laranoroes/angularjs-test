import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Cameras {
  id: number,
  brand: string,
  model: string,
  image: string,
  price: number,
  stock: number
}

export interface Contacts {
  name: string,
  email: string,
  phone: string,
  province: string,
  city: string,
  message: string
}

const baseURL = "http://localhost:3000/api";

@Injectable({
  providedIn: 'root'
})

export class CameriteService {

  constructor(private http: HttpClient) { }

  getCameras() {
    return this.http.get<Cameras[]>(`${baseURL}/cameras`)
  }

  postForm(contact) {
    return this.http.post((`${baseURL}/contact`), contact)
  }
}