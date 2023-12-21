import { makeAutoObservable } from 'mobx';

export default class TaiheStore {
  isShopPage = false;

  isCoursesPage = false;

  isMobileMenuVisible = false;

  isLoading = false;

  windowWidth = window.innerWidth;

  constructor() {
    makeAutoObservable(this);
    this.isShopPage = false;
  }

  setIsLoading = (value) => {
    this.isLoading = value;
  };

  setIsShopPage = (value) => {
    this.isShopPage = value;
  };

  setIsCoursesPage = (value) => {
    this.isCoursesPage = value;
  };

  getData = async ({ url, callback }) => {
    this.setIsLoading(true);

    try {
      const response = await fetch(url);
      callback(await response.json());
    } catch (error) {
      throw new Error(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  setIsMobileMenuVisible = (value) => {
    this.isMobileMenuVisible = value;
  };

  setWindowWidth = (value) => {
    this.windowWidth = value;
  };
}
