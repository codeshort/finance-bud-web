export type GroupDetails = {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
};
export type GroupWiseTransactionDetails = {
  groupDetails: GroupDetails;
  totalAmount: number;
  currency: string;
  totalOwed: number;
  totalOwedToMe: number;
  transactions: {
    id: string;
    description: string;
    amount: number;
    currency: string;
    paidBy: string;
  }[];
};
