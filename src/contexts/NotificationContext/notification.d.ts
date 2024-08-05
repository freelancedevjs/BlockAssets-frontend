interface Property {
  id: string;
  slug: string;
}

export interface Notification {
  category: string;
  title: string;
  content: string;
  createdAt: string;
  id: string;
  mode: string;
  readAt: string | null;
  property: Property;
  updatedAt: string;
}

export interface GetMyNotificationsResponse {
  getMyNotifications: {
    count: number;
    data: Notification[];
  };
}
