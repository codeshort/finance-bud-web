import type { GroupDetails } from './GroupTypes';

export type BalanceDetails = {
  userId: string;
  totalBalance: number;
  currency: string;
  totalOwed: number;
  totalOwedToMe: number;
  groupWiseBalances: {
    groupDetails: GroupDetails;
    balanceOwed: number;
    balanceOwedToMe: number;
  }[];
};
