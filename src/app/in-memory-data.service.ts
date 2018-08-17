import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clients = [
       {
      id:0,
      name: 'cengiz'
      },
      {
      id:1,
      name: 'berardozzi'
      },
      {
      id:2,
      name: 'thomas'
      },
      {
      id:3,
      name: 'pierre'
      },
      {
      id:4,
      name: 'lucas'
      },{
      id:6,
      name: 'fred'
      },{
      id:7,
      name: 'titi'
      },{
      id:8,
      name: 'david'
      },{
      id:9,
      name: 'luc'
      },

    ];
    return {clients};
  }
}
