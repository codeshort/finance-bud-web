import { action, makeObservable, observable } from 'mobx';
import type { FriendsDetails, UserDetails } from '../../types/stores/UserTypes';
import type { GroupDetails } from '../../types/stores/GroupTypes';
import type { BalanceDetails } from '../../types/stores/ExpensesTypes';

class UserStore {
  @observable
  currentUser: UserDetails = {} as UserDetails;
  @observable
  isLoggedIn = false;
  @observable
  authToken: string = '';
  @observable
  friendsList: FriendsDetails[] = [];
  @observable
  pendingFriendRequests: FriendsDetails[] = [];
  @observable
  groups: GroupDetails[] = [];
  @observable
  balances: BalanceDetails[] = [];

  constructor() {
    makeObservable(this);
  }

  @action resetStore() {
    this.currentUser = {} as UserDetails;
    this.isLoggedIn = false;
    this.authToken = '';
    this.friendsList = [];
    this.pendingFriendRequests = [];
    this.groups = [];
    this.balances = [];
  }

  @action
  setCurrentUser(user: UserDetails) {
    this.currentUser = user;
    this.isLoggedIn = true;
  }

  @action
  setAuthToken(token: string) {
    this.authToken = token;
  }

  @action
  setFriendsList(friends: FriendsDetails[]) {
    this.friendsList = friends;
  }

  @action
  setPendingFriendRequests(requests: FriendsDetails[]) {
    this.pendingFriendRequests = requests;
  }

  @action
  setGroups(groups: GroupDetails[]) {
    this.groups = groups;
  }

  @action
  setBalances(balances: BalanceDetails[]) {
    this.balances = balances;
  }

  @action
  login(user: UserDetails, token: string) {
    this.setCurrentUser(user);
    this.setAuthToken(token);
  }

  @action
  logout() {
    this.resetStore();
  }
}

export const userStore = new UserStore();
