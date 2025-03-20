export enum UserStatus {
  PendingProfile = 'pending_profile',
}

export interface User {
  profile: {
    email: string;
    status: UserStatus;
  };
}
