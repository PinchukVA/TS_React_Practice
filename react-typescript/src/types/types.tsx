export interface IUSerAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IUSerAddress,
}

export interface IToDO {
  id: number,
  userId: number,
  completed: boolean,
  title: string,
}

export interface IUserPageParams {
  id:string,
}