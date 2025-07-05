export type FriendInvite = {
  id: string;
  email: string;
  status: FriendInviteStatus;
  createdAt: string;
  profileImage?: string;
};

export enum FriendInviteStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}
