import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-interface.response';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async createSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');

      const no: number = +segments[segments.length - 2];
      console.log(no, name);
    });

    return data.results;
  }
}
