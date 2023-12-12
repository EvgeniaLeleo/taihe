import { makeAutoObservable } from 'mobx';

export default class TaiheStore {
  isShopPage = false;

  isMobileMenuVisible = false;

  windowWidth = window.innerWidth;

  constructor() {
    makeAutoObservable(this);
    this.isShopPage = false;
  }

  setIsShopPage = (value) => {
    this.isShopPage = value;
  };

  getData = async ({ url, callback }) => {
    try {
      const response = await fetch(url);
      callback(await response.json());
    } catch (error) {
      throw new Error(error);
    }
  };

  setIsMobileMenuVisible = (value) => {
    this.isMobileMenuVisible = value;
  };

  setWindowWidth = (value) => {
    this.windowWidth = value;
  };
}
