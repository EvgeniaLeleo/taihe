import { makeAutoObservable } from 'mobx';

export default class TaiheStore {
  isShopPage = false;

  constructor() {
    makeAutoObservable(this);
    this.isShopPage = false;
  }

  setIsShopPage = (value) => {
    this.isShopPage = value;
  };
}
