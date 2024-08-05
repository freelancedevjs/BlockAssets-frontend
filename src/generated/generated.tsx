import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type CreateDisclosureInput = {
  content: Scalars['String']['input'];
  name: Scalars['String']['input'];
  property: PropertyIdInput;
  status: DisclosureStatus;
};

export type CreateFaqInput = {
  content: Scalars['String']['input'];
  status?: InputMaybe<FaqStatus>;
  title: Scalars['String']['input'];
};

export type CreateNewsInput = {
  content: Scalars['String']['input'];
  image: Scalars['Upload']['input'];
  status: NewsStatus;
  title: Scalars['String']['input'];
};

export type CreateNoticeInput = {
  category?: InputMaybe<NoticeCategory>;
  content: Scalars['String']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
  property?: InputMaybe<PropertyIdInput>;
  status?: InputMaybe<NoticeStatus>;
  title: Scalars['String']['input'];
};

export type CreateNotificationInput = {
  category: NotificationCategory;
  content: Scalars['String']['input'];
  mode: NotificationMode;
  properties?: InputMaybe<Array<PropertyIdInput>>;
  title: Scalars['String']['input'];
  users?: InputMaybe<Array<UserIdInput>>;
};

export type CreatePageInput = {
  content: Scalars['String']['input'];
  name: Scalars['String']['input'];
  status?: InputMaybe<PageStatus>;
};

export type CreatePropertyAttachmentInput = {
  image: Scalars['Upload']['input'];
  name: Scalars['String']['input'];
  property: PropertyIdInput;
  status: PropertyAttachmentStatus;
};

export type CreatePropertyImageInput = {
  image: Scalars['Upload']['input'];
  property: PropertyIdInput;
};

export type CreatePropertyInput = {
  basic_info: PropertyBasicInformationInput;
  content: Scalars['String']['input'];
  endsAt: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  startsAt: Scalars['DateTime']['input'];
  status: PropertyStatus;
  subscription_info: PropertySubscriptionInformationInput;
};

export type CreatePropertyNotificationInput = {
  property: PropertyIdInput;
};

export type CreateSubscriptionInput = {
  amount: Scalars['Float']['input'];
  property: PropertyIdInput;
  warranty: Scalars['Float']['input'];
};

export type CreateUserInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  companyName?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  dob?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  role: Scalars['String']['input'];
  state: Scalars['String']['input'];
  tnc_status: Scalars['Boolean']['input'];
  userType: UserType;
};

export type CreateVoteEntryInput = {
  action: VoteAction;
  vote: VoteIdInput;
};

export type CreateVoteInput = {
  content: Scalars['String']['input'];
  endsAt: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  property: PropertyIdInput;
  startsAt: Scalars['DateTime']['input'];
};

export type CreateWalletInput = {
  private_key: Scalars['String']['input'];
};

export type CursorInput = {
  contract_addresses?: InputMaybe<Array<Scalars['String']['input']>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
};

export type Disclosure = {
  __typename?: 'Disclosure';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  property: Property;
  slug: Scalars['String']['output'];
  status: DisclosureStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export enum DisclosureStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Faq = {
  __typename?: 'Faq';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: FaqStatus;
  title: Scalars['String']['output'];
};

export enum FaqStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type GetDisclosureType = {
  __typename?: 'GetDisclosureType';
  count?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<Disclosure>>;
};

export type GetFaqType = {
  __typename?: 'GetFaqType';
  count?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<Faq>>;
};

export type GetManyInput = {
  /** count or data or all, default = data */
  dataType?: InputMaybe<Scalars['String']['input']>;
  /** {key: "ASC" or "DESC" or "asc" or "desc" or 1 or -1} or {key: {direction: "ASC" or "DESC" or "asc" or "desc", nulls: "first" or "last" or "FIRST" or "LAST"}}} */
  order?: InputMaybe<Scalars['JSON']['input']>;
  pagination?: InputMaybe<IPagination>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};

export type GetNewsType = {
  __typename?: 'GetNewsType';
  count?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<News>>;
};

export type GetNoticeType = {
  __typename?: 'GetNoticeType';
  count?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<Notice>>;
};

export type GetNotificationType = {
  __typename?: 'GetNotificationType';
  count?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<Notification>>;
};

export type GetOneInput = {
  where: Scalars['JSON']['input'];
};

export type GetPageType = {
  __typename?: 'GetPageType';
  count?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<Page>>;
};

export type GetPropertyImageType = {
  __typename?: 'GetPropertyImageType';
  count?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<PropertyImage>>;
};

export type GetPropertyType = {
  __typename?: 'GetPropertyType';
  count?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<Property>>;
};

export type GetSubscriptionType = {
  __typename?: 'GetSubscriptionType';
  count?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<Subscription>>;
};

export type GetUserType = {
  __typename?: 'GetUserType';
  count?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<User>>;
};

export type GetVoteType = {
  __typename?: 'GetVoteType';
  count?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<Vote>>;
};

export type GrossFloorArea = {
  __typename?: 'GrossFloorArea';
  case: Scalars['String']['output'];
  total: Scalars['String']['output'];
};

export type GrossFloorAreaInput = {
  case: Scalars['String']['input'];
  total: Scalars['String']['input'];
};

export type GrossLandArea = {
  __typename?: 'GrossLandArea';
  case: Scalars['String']['output'];
  total: Scalars['String']['output'];
};

export type GrossLandAreaInput = {
  case: Scalars['String']['input'];
  total: Scalars['String']['input'];
};

export type IPagination = {
  /** Started from 0 */
  page: Scalars['Int']['input'];
  /** Size of page */
  size: Scalars['Int']['input'];
};

export type JwtWithUser = {
  __typename?: 'JwtWithUser';
  jwt: Scalars['String']['output'];
  user: User;
};

export type LogoutOutput = {
  __typename?: 'LogoutOutput';
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDisclosure: Disclosure;
  createFaq: Faq;
  createNews: News;
  createNotice: Notice;
  createNotification: Notification;
  createPage: Page;
  createProperty: Property;
  createPropertyAttachment: PropertyAttachment;
  createPropertyImage: PropertyImage;
  createPropertyNotification: PropertyNotification;
  createSubscription: Subscription;
  createUser: User;
  createVote: Vote;
  createVoteEntry: Vote;
  deleteAccount: LogoutOutput;
  deleteDisclosure: Scalars['JSON']['output'];
  deleteFaq: Scalars['JSON']['output'];
  deleteNews: Scalars['JSON']['output'];
  deleteNotice: Scalars['JSON']['output'];
  deleteNotification: Scalars['JSON']['output'];
  deletePage: Scalars['JSON']['output'];
  deleteProperty: Scalars['JSON']['output'];
  deletePropertyAttachment: Scalars['JSON']['output'];
  deletePropertyImage: Scalars['JSON']['output'];
  deletePropertyNotification: Scalars['JSON']['output'];
  deleteUser: Scalars['JSON']['output'];
  deleteVote: Scalars['JSON']['output'];
  resendEmailOtp: OtpOutput;
  resendPhoneOtp: OtpOutput;
  sendFunds: Scalars['String']['output'];
  sendMyOtp: OtpOutput;
  sendOtp: OtpOutput;
  signIn: JwtWithUser;
  signOut: LogoutOutput;
  signUp: JwtWithUser;
  updateDisclosure: Scalars['JSON']['output'];
  updateFaq: Scalars['JSON']['output'];
  updateMe: Scalars['JSON']['output'];
  updateNews: Scalars['JSON']['output'];
  updateNotice: Scalars['JSON']['output'];
  updateNotification: Scalars['JSON']['output'];
  updatePage: Scalars['JSON']['output'];
  updateProperty: Scalars['JSON']['output'];
  updatePropertyAttachment: Scalars['JSON']['output'];
  updatePropertyImage: Scalars['JSON']['output'];
  updateSubscription: Scalars['JSON']['output'];
  updateUser: Scalars['JSON']['output'];
  updateVote: Scalars['JSON']['output'];
  updateVoteEntry: Scalars['JSON']['output'];
  updateWallet: Wallet;
};


export type MutationCreateDisclosureArgs = {
  input: CreateDisclosureInput;
};


export type MutationCreateFaqArgs = {
  input: CreateFaqInput;
};


export type MutationCreateNewsArgs = {
  input: CreateNewsInput;
};


export type MutationCreateNoticeArgs = {
  input: CreateNoticeInput;
};


export type MutationCreateNotificationArgs = {
  input: CreateNotificationInput;
};


export type MutationCreatePageArgs = {
  input: CreatePageInput;
};


export type MutationCreatePropertyArgs = {
  input: CreatePropertyInput;
};


export type MutationCreatePropertyAttachmentArgs = {
  input: CreatePropertyAttachmentInput;
};


export type MutationCreatePropertyImageArgs = {
  input: CreatePropertyImageInput;
};


export type MutationCreatePropertyNotificationArgs = {
  input: CreatePropertyNotificationInput;
};


export type MutationCreateSubscriptionArgs = {
  input: CreateSubscriptionInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateVoteArgs = {
  input: CreateVoteInput;
};


export type MutationCreateVoteEntryArgs = {
  input: CreateVoteEntryInput;
};


export type MutationDeleteDisclosureArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteFaqArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteNewsArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteNoticeArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteNotificationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePageArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeletePropertyArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePropertyAttachmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePropertyImageArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePropertyNotificationArgs = {
  input: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteVoteArgs = {
  id: Scalars['String']['input'];
};


export type MutationResendEmailOtpArgs = {
  input: OtpReSendInput;
};


export type MutationResendPhoneOtpArgs = {
  input: OtpReSendInput;
};


export type MutationSendFundsArgs = {
  input: SendFundsInput;
};


export type MutationSendMyOtpArgs = {
  input: MyOtpSendInput;
};


export type MutationSendOtpArgs = {
  input: OtpSendInput;
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUpdateDisclosureArgs = {
  id: Scalars['String']['input'];
  input: UpdateDisclosureInput;
};


export type MutationUpdateFaqArgs = {
  id: Scalars['Float']['input'];
  input: UpdateFaqInput;
};


export type MutationUpdateMeArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateNewsArgs = {
  id: Scalars['String']['input'];
  input: UpdateNewsInput;
};


export type MutationUpdateNoticeArgs = {
  id: Scalars['Float']['input'];
  input: UpdateNoticeInput;
};


export type MutationUpdateNotificationArgs = {
  id: Scalars['String']['input'];
  input: UpdateNotificationInput;
};


export type MutationUpdatePageArgs = {
  id: Scalars['Float']['input'];
  input: UpdatePageInput;
};


export type MutationUpdatePropertyArgs = {
  id: Scalars['String']['input'];
  input: UpdatePropertyInput;
};


export type MutationUpdatePropertyAttachmentArgs = {
  id: Scalars['String']['input'];
  input: UpdatePropertyAttachmentInput;
};


export type MutationUpdatePropertyImageArgs = {
  id: Scalars['String']['input'];
  input: UpdatePropertyImageInput;
};


export type MutationUpdateSubscriptionArgs = {
  id: Scalars['Float']['input'];
  input: UpdateSubscriptionInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  input: UpdateUserAdminInput;
};


export type MutationUpdateVoteArgs = {
  id: Scalars['String']['input'];
  input: UpdateVoteInput;
};


export type MutationUpdateVoteEntryArgs = {
  input: CreateVoteEntryInput;
};


export type MutationUpdateWalletArgs = {
  privateKey: CreateWalletInput;
};

export type MyOtpSendInput = {
  email?: InputMaybe<Scalars['Boolean']['input']>;
  phone?: InputMaybe<Scalars['Boolean']['input']>;
};

export type News = {
  __typename?: 'News';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  status: NewsStatus;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum NewsStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Notice = {
  __typename?: 'Notice';
  category: NoticeCategory;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  slug: Scalars['String']['output'];
  status: NoticeStatus;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum NoticeCategory {
  Dividend = 'DIVIDEND',
  Other = 'OTHER',
  Property = 'PROPERTY',
  Subscription = 'SUBSCRIPTION'
}

export enum NoticeStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Notification = {
  __typename?: 'Notification';
  category: NotificationCategory;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  mode: NotificationMode;
  property?: Maybe<Property>;
  readAt: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export enum NotificationCategory {
  Dividend = 'DIVIDEND',
  Other = 'OTHER',
  Property = 'PROPERTY',
  Subscription = 'SUBSCRIPTION'
}

export enum NotificationMode {
  All = 'ALL',
  Email = 'EMAIL',
  Sms = 'SMS'
}

export type OtpOutput = {
  __typename?: 'OtpOutput';
  data: OtpOutputData;
  token: Scalars['String']['output'];
};

export type OtpOutputData = {
  __typename?: 'OtpOutputData';
  account: Scalars['String']['output'];
  attemptsRemaining: Scalars['Float']['output'];
  expiresAt: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  resendAt: Scalars['Float']['output'];
};

export type OtpReSendInput = {
  token: Scalars['String']['input'];
};

export type OtpSendInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type OtpVerifyInput = {
  otp: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type Page = {
  __typename?: 'Page';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  status: PageStatus;
  user: User;
};

export enum PageStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Property = {
  __typename?: 'Property';
  attachments?: Maybe<Array<PropertyAttachment>>;
  basic_info: Scalars['JSON']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  disclosures?: Maybe<Array<Disclosure>>;
  dividend_address?: Maybe<Scalars['String']['output']>;
  endsAt: Scalars['DateTime']['output'];
  firstDepositDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<PropertyImage>>;
  name: Scalars['String']['output'];
  notices?: Maybe<Array<Notice>>;
  notifications?: Maybe<Array<PropertyNotification>>;
  secondDepositDate: Scalars['DateTime']['output'];
  slug: Scalars['String']['output'];
  somi_cold_wallet_address?: Maybe<Scalars['String']['output']>;
  startsAt: Scalars['DateTime']['output'];
  status: PropertyStatus;
  subscription_info: Scalars['JSON']['output'];
  subscriptions?: Maybe<Array<Subscription>>;
  updatedAt: Scalars['DateTime']['output'];
  usdt_cold_wallet_address?: Maybe<Scalars['String']['output']>;
  user_notifications?: Maybe<Array<Notification>>;
  votes?: Maybe<Array<Vote>>;
};

export type PropertyAttachment = {
  __typename?: 'PropertyAttachment';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  property: Property;
  status: PropertyAttachmentStatus;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export enum PropertyAttachmentStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type PropertyBasicInformationInput = {
  address: Scalars['String']['input'];
  completion_date: Scalars['String']['input'];
  floor: Scalars['String']['input'];
  government_land_value: Scalars['String']['input'];
  gross_floor_area: GrossFloorAreaInput;
  land_area: GrossLandAreaInput;
  zoning: Scalars['String']['input'];
};

export type PropertyIdInput = {
  id: Scalars['String']['input'];
};

export type PropertyImage = {
  __typename?: 'PropertyImage';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  property: Property;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type PropertyNotification = {
  __typename?: 'PropertyNotification';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  property: Property;
  updatedAt: Scalars['DateTime']['output'];
};

export enum PropertyStatus {
  Closed = 'CLOSED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type PropertySubscriptionInformationInput = {
  allocation_date: Scalars['String']['input'];
  apr: Scalars['Float']['input'];
  frequency: Scalars['String']['input'];
  listing_date: Scalars['String']['input'];
  total_cap: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  getDisclosure: Disclosure;
  getDisclosures: GetDisclosureType;
  getFaqs: GetFaqType;
  getManyDisclosureList: GetDisclosureType;
  getManyFaqList: GetFaqType;
  getManyNews: GetNewsType;
  getManyNewsList: GetNewsType;
  getManyNoticeList: GetNoticeType;
  getManyNotices: GetNoticeType;
  getManyNotificationList: GetNotificationType;
  getManyPageList: GetPageType;
  getManyPropertyImageList: GetPropertyImageType;
  getManyPropertyList: GetPropertyType;
  getManySubscriptionList: GetSubscriptionType;
  getManyUserList: GetUserType;
  getManyVoteList: GetVoteType;
  getMe: User;
  getMyNotifications: GetNotificationType;
  getMyOneSubscription: Subscription;
  getMySubscriptionList: GetSubscriptionType;
  getMyVote: Vote;
  getMyVotes: GetVoteType;
  getNews: News;
  getNotice: Notice;
  getOneDisclosure: Disclosure;
  getOneFaq: Faq;
  getOneImage: PropertyImage;
  getOneNews: News;
  getOneNotice: Notice;
  getOneNotification: Notification;
  getOnePage: Page;
  getOneProperty: Property;
  getOneSubscription: Subscription;
  getOneUser: User;
  getOneVote: Vote;
  getPage: Page;
  getPages: GetPageType;
  getProperties: GetPropertyType;
  getProperty: Property;
  getPropertyImage: PropertyImage;
  getPropertyImages: GetPropertyType;
  getVoteProgress: Vote;
  getWalletBalances: WalletAssets;
  getWalletTransactions: Array<TransactionPage>;
};


export type QueryGetDisclosureArgs = {
  input: GetOneInput;
};


export type QueryGetDisclosuresArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetFaqsArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetManyDisclosureListArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetManyFaqListArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetManyNewsArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetManyNewsListArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetManyNoticeListArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetManyNoticesArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetManyNotificationListArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetManyPageListArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetManyPropertyImageListArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetManyPropertyListArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetManySubscriptionListArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetManyUserListArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetManyVoteListArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetMyNotificationsArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetMyOneSubscriptionArgs = {
  input: GetOneInput;
};


export type QueryGetMySubscriptionListArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetMyVoteArgs = {
  input?: InputMaybe<GetOneInput>;
};


export type QueryGetMyVotesArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetNewsArgs = {
  input: GetOneInput;
};


export type QueryGetNoticeArgs = {
  input: GetOneInput;
};


export type QueryGetOneDisclosureArgs = {
  input: GetOneInput;
};


export type QueryGetOneFaqArgs = {
  input: GetOneInput;
};


export type QueryGetOneImageArgs = {
  input: GetOneInput;
};


export type QueryGetOneNewsArgs = {
  input: GetOneInput;
};


export type QueryGetOneNoticeArgs = {
  input: GetOneInput;
};


export type QueryGetOneNotificationArgs = {
  input: GetOneInput;
};


export type QueryGetOnePageArgs = {
  input: GetOneInput;
};


export type QueryGetOnePropertyArgs = {
  input: GetOneInput;
};


export type QueryGetOneSubscriptionArgs = {
  input: GetOneInput;
};


export type QueryGetOneUserArgs = {
  input: GetOneInput;
};


export type QueryGetOneVoteArgs = {
  input: GetOneInput;
};


export type QueryGetPageArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetPagesArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetPropertiesArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetPropertyArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetPropertyImageArgs = {
  input: GetOneInput;
};


export type QueryGetPropertyImagesArgs = {
  input?: InputMaybe<GetManyInput>;
};


export type QueryGetVoteProgressArgs = {
  input?: InputMaybe<VoteIdInput>;
};


export type QueryGetWalletBalancesArgs = {
  input?: InputMaybe<CursorInput>;
};


export type QueryGetWalletTransactionsArgs = {
  input?: InputMaybe<CursorInput>;
};

export type SendFundsInput = {
  amount: Scalars['String']['input'];
  emailOtp: OtpVerifyInput;
  toAddress: Scalars['String']['input'];
  tokenAddress: Scalars['String']['input'];
};

export type SignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignUpInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  companyName?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  dob?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  emailOtp: OtpVerifyInput;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  smsOtp: OtpVerifyInput;
  state: Scalars['String']['input'];
  tnc_status: Scalars['Boolean']['input'];
  userType: UserType;
};

export type Subscription = {
  __typename?: 'Subscription';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  deposit_amount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  property: Property;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  warranty: Scalars['Float']['output'];
};

export type TransactionPage = {
  __typename?: 'TransactionPage';
  nextCursor?: Maybe<Scalars['String']['output']>;
  transactions: Scalars['JSON']['output'];
};

export type UpdateDisclosureInput = {
  content: Scalars['String']['input'];
  name: Scalars['String']['input'];
  property: PropertyIdInput;
  status: DisclosureStatus;
};

export type UpdateFaqInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<FaqStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNewsInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  status?: InputMaybe<NewsStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNoticeInput = {
  category?: InputMaybe<NoticeCategory>;
  content?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  property?: InputMaybe<PropertyIdInput>;
  status?: InputMaybe<NoticeStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNotificationInput = {
  title: Scalars['String']['input'];
};

export type UpdatePageInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PageStatus>;
};

export type UpdatePropertyAttachmentInput = {
  image: Scalars['Upload']['input'];
  name: Scalars['String']['input'];
  property: PropertyIdInput;
  status: PropertyAttachmentStatus;
};

export type UpdatePropertyImageInput = {
  image: Scalars['Upload']['input'];
  property: PropertyIdInput;
};

export type UpdatePropertyInput = {
  basic_info: PropertyBasicInformationInput;
  content: Scalars['String']['input'];
  endsAt: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  startsAt: Scalars['DateTime']['input'];
  status: PropertyStatus;
  subscription_info: PropertySubscriptionInformationInput;
};

export type UpdateSubscriptionInput = {
  amount: Scalars['Float']['input'];
  warranty: Scalars['Float']['input'];
};

export type UpdateUserAdminInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  confirm_new_password?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailOtp?: InputMaybe<OtpVerifyInput>;
  marketing?: InputMaybe<Scalars['Boolean']['input']>;
  new_password?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneOtp?: InputMaybe<OtpVerifyInput>;
};

export type UpdateVoteInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startsAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User = {
  __typename?: 'User';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  companyName?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dob: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  marketing: Scalars['Boolean']['output'];
  new_email: Scalars['String']['output'];
  notifications?: Maybe<Array<Notification>>;
  pages?: Maybe<Array<Page>>;
  phone: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  property_notifications?: Maybe<Array<PropertyNotification>>;
  role: Scalars['String']['output'];
  state: Scalars['String']['output'];
  subscriptions?: Maybe<Array<Subscription>>;
  tnc_status: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userType: UserType;
  vote_entries?: Maybe<Array<VoteEntry>>;
  wallet?: Maybe<Wallet>;
};

export type UserIdInput = {
  id: Scalars['String']['input'];
};

export enum UserType {
  Corporate = 'CORPORATE',
  Individual = 'INDIVIDUAL'
}

export type Vote = {
  __typename?: 'Vote';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  endsAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  property: Property;
  slug: Scalars['String']['output'];
  startsAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  vote_entries?: Maybe<Array<VoteEntry>>;
};

export enum VoteAction {
  Approve = 'APPROVE',
  Reject = 'REJECT'
}

export type VoteEntry = {
  __typename?: 'VoteEntry';
  action: VoteAction;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  vote: Vote;
};

export type VoteIdInput = {
  id: Scalars['String']['input'];
};

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type WalletAssets = {
  __typename?: 'WalletAssets';
  tokens: Scalars['JSON']['output'];
};

export type SendOtpMutationMutationVariables = Exact<{
  input: OtpSendInput;
}>;


export type SendOtpMutationMutation = { __typename?: 'Mutation', sendOtp: { __typename?: 'OtpOutput', token: string, data: { __typename?: 'OtpOutputData', account: string, attemptsRemaining: number, expiresAt: number, id: string, resendAt: number } } };

export type SignUpMutationMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutationMutation = { __typename?: 'Mutation', signUp: { __typename?: 'JwtWithUser', jwt: string, user: { __typename?: 'User', address: string, city: string, country: string, createdAt: any, dob: any, email: string, firstName?: string | null, id: string, lastName?: string | null, phone: string, postalCode: string, state: string, updatedAt: any, userType: UserType, companyName?: string | null } } };

export type ResendEmailOtpMutationVariables = Exact<{
  input: OtpReSendInput;
}>;


export type ResendEmailOtpMutation = { __typename?: 'Mutation', resendEmailOtp: { __typename?: 'OtpOutput', token: string, data: { __typename?: 'OtpOutputData', account: string, expiresAt: number, id: string, resendAt: number, attemptsRemaining: number } } };

export type ResendPhoneOtpMutationVariables = Exact<{
  input: OtpReSendInput;
}>;


export type ResendPhoneOtpMutation = { __typename?: 'Mutation', resendPhoneOtp: { __typename?: 'OtpOutput', token: string, data: { __typename?: 'OtpOutputData', account: string, attemptsRemaining: number, expiresAt: number, id: string, resendAt: number } } };

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'JwtWithUser', jwt: string, user: { __typename?: 'User', firstName?: string | null, lastName?: string | null, email: string, userType: UserType, createdAt: any } } };

export type GetUserQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQueryQuery = { __typename?: 'Query', getMe: { __typename?: 'User', firstName?: string | null, lastName?: string | null, dob: any, email: string, userType: UserType, companyName?: string | null, phone: string, country: string, tnc_status: boolean } };

export type DisclosuresQueryVariables = Exact<{
  input?: InputMaybe<GetManyInput>;
}>;


export type DisclosuresQuery = { __typename?: 'Query', getDisclosures: { __typename?: 'GetDisclosureType', count?: number | null, data?: Array<{ __typename?: 'Disclosure', content: string, createdAt: any, id: string, name: string, slug: string, status: DisclosureStatus, updatedAt: any, property: { __typename?: 'Property', slug: string } }> | null } };

export type DisclosureDetailQueryVariables = Exact<{
  input: GetOneInput;
}>;


export type DisclosureDetailQuery = { __typename?: 'Query', getDisclosure: { __typename?: 'Disclosure', content: string, createdAt: any, id: string, name: string, slug: string, status: DisclosureStatus, updatedAt: any, property: { __typename?: 'Property', slug: string, name: string } } };

export type CreatePropertyNotificationMutationVariables = Exact<{
  input: CreatePropertyNotificationInput;
}>;


export type CreatePropertyNotificationMutation = { __typename?: 'Mutation', createPropertyNotification: { __typename?: 'PropertyNotification', createdAt: any, id: string, updatedAt: any } };

export type GetPropertyQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetPropertyQuery = { __typename?: 'Query', getProperty: { __typename?: 'Property', basic_info: any, subscription_info: any, content: string, createdAt: any, endsAt: any, firstDepositDate: any, id: string, name: string, secondDepositDate: any, slug: string, startsAt: any, status: PropertyStatus, updatedAt: any, disclosures?: Array<{ __typename?: 'Disclosure', content: string, createdAt: any, id: string, name: string, slug: string, status: DisclosureStatus, updatedAt: any }> | null, images?: Array<{ __typename?: 'PropertyImage', createdAt: any, id: string, updatedAt: any, url: string }> | null, attachments?: Array<{ __typename?: 'PropertyAttachment', createdAt: any, id: string, url: string, name?: string | null, status: PropertyAttachmentStatus, updatedAt: any }> | null, votes?: Array<{ __typename?: 'Vote', content: string, createdAt: any, endsAt: any, id: string, name: string, slug: string, startsAt: any, updatedAt: any }> | null } };

export type GetPropertiesQueryVariables = Exact<{
  input?: InputMaybe<GetManyInput>;
}>;


export type GetPropertiesQuery = { __typename?: 'Query', getProperties: { __typename?: 'GetPropertyType', count?: number | null, data?: Array<{ __typename?: 'Property', createdAt: any, basic_info: any, subscription_info: any, endsAt: any, firstDepositDate: any, id: string, name: string, secondDepositDate: any, slug: string, startsAt: any, status: PropertyStatus, updatedAt: any, content: string, attachments?: Array<{ __typename?: 'PropertyAttachment', createdAt: any, id: string, status: PropertyAttachmentStatus, updatedAt: any, url: string }> | null, disclosures?: Array<{ __typename?: 'Disclosure', content: string, createdAt: any, id: string, name: string, slug: string, status: DisclosureStatus, updatedAt: any }> | null, images?: Array<{ __typename?: 'PropertyImage', createdAt: any, id: string, updatedAt: any, url: string }> | null, subscriptions?: Array<{ __typename?: 'Subscription', amount: number, createdAt: any, deposit_amount: number, id: string, updatedAt: any, warranty: number }> | null, votes?: Array<{ __typename?: 'Vote', content: string, createdAt: any, endsAt: any, id: string, name: string, slug: string, startsAt: any, updatedAt: any }> | null }> | null } };

export type UpdateWalletMutationVariables = Exact<{
  privateKey: CreateWalletInput;
}>;


export type UpdateWalletMutation = { __typename?: 'Mutation', updateWallet: { __typename?: 'Wallet', address: string, createdAt: any, id: string, updatedAt: any } };

export type UpdateMeMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateMeMutation = { __typename?: 'Mutation', updateMe: any };

export type SendMyOtpMutationVariables = Exact<{
  input: MyOtpSendInput;
}>;


export type SendMyOtpMutation = { __typename?: 'Mutation', sendMyOtp: { __typename?: 'OtpOutput', data: { __typename?: 'OtpOutputData', expiresAt: number } } };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: { __typename?: 'LogoutOutput', success: boolean } };

export type DeleteAccountMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAccountMutation = { __typename?: 'Mutation', deleteAccount: { __typename?: 'LogoutOutput', success: boolean } };

export type GetFaqsQueryVariables = Exact<{
  input?: InputMaybe<GetManyInput>;
}>;


export type GetFaqsQuery = { __typename?: 'Query', getFaqs: { __typename?: 'GetFaqType', count?: number | null, data?: Array<{ __typename?: 'Faq', content: string, id: string, status: FaqStatus, title: string }> | null } };

export type GetNoticeQueryVariables = Exact<{
  input: GetOneInput;
}>;


export type GetNoticeQuery = { __typename?: 'Query', getNotice: { __typename?: 'Notice', content: string, id: string, image?: string | null, slug: string, status: NoticeStatus, title: string } };

export type GetManyNoticesQueryVariables = Exact<{
  input?: InputMaybe<GetManyInput>;
}>;


export type GetManyNoticesQuery = { __typename?: 'Query', getManyNotices: { __typename?: 'GetNoticeType', count?: number | null, data?: Array<{ __typename?: 'Notice', content: string, id: string, image?: string | null, slug: string, status: NoticeStatus, title: string }> | null } };

export type GetManyPageListQueryVariables = Exact<{
  input?: InputMaybe<GetManyInput>;
}>;


export type GetManyPageListQuery = { __typename?: 'Query', getPages: { __typename?: 'GetPageType', count?: number | null, data?: Array<{ __typename?: 'Page', content: string, id: string, name: string, slug: string, status: PageStatus }> | null } };

export type GetOnePageQueryVariables = Exact<{
  input: GetOneInput;
}>;


export type GetOnePageQuery = { __typename?: 'Query', getOnePage: { __typename?: 'Page', id: string, name: string, content: string, status: PageStatus, slug: string } };

export type GetManyVoteListQueryVariables = Exact<{
  input?: InputMaybe<GetManyInput>;
}>;


export type GetManyVoteListQuery = { __typename?: 'Query', getMyVotes: { __typename?: 'GetVoteType', count?: number | null, data?: Array<{ __typename?: 'Vote', content: string, createdAt: any, endsAt: any, id: string, name: string, slug: string, startsAt: any, updatedAt: any }> | null } };

export type GetOneVoteQueryVariables = Exact<{
  input: GetOneInput;
}>;


export type GetOneVoteQuery = { __typename?: 'Query', getMyVote: { __typename?: 'Vote', content: string, createdAt: any, endsAt: any, id: string, name: string, slug: string, startsAt: any, updatedAt: any } };


export const SendOtpMutationDocument = gql`
    mutation SendOtpMutation($input: OtpSendInput!) {
  sendOtp(input: $input) {
    data {
      account
      attemptsRemaining
      expiresAt
      id
      resendAt
    }
    token
  }
}
    `;
export type SendOtpMutationMutationFn = Apollo.MutationFunction<SendOtpMutationMutation, SendOtpMutationMutationVariables>;

/**
 * __useSendOtpMutationMutation__
 *
 * To run a mutation, you first call `useSendOtpMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendOtpMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendOtpMutationMutation, { data, loading, error }] = useSendOtpMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendOtpMutationMutation(baseOptions?: Apollo.MutationHookOptions<SendOtpMutationMutation, SendOtpMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendOtpMutationMutation, SendOtpMutationMutationVariables>(SendOtpMutationDocument, options);
      }
export type SendOtpMutationMutationHookResult = ReturnType<typeof useSendOtpMutationMutation>;
export type SendOtpMutationMutationResult = Apollo.MutationResult<SendOtpMutationMutation>;
export type SendOtpMutationMutationOptions = Apollo.BaseMutationOptions<SendOtpMutationMutation, SendOtpMutationMutationVariables>;
export const SignUpMutationDocument = gql`
    mutation SignUpMutation($input: SignUpInput!) {
  signUp(input: $input) {
    jwt
    user {
      address
      city
      country
      createdAt
      dob
      email
      firstName
      id
      id
      lastName
      phone
      postalCode
      state
      updatedAt
      userType
      companyName
    }
  }
}
    `;
export type SignUpMutationMutationFn = Apollo.MutationFunction<SignUpMutationMutation, SignUpMutationMutationVariables>;

/**
 * __useSignUpMutationMutation__
 *
 * To run a mutation, you first call `useSignUpMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutationMutation, { data, loading, error }] = useSignUpMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutationMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutationMutation, SignUpMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutationMutation, SignUpMutationMutationVariables>(SignUpMutationDocument, options);
      }
export type SignUpMutationMutationHookResult = ReturnType<typeof useSignUpMutationMutation>;
export type SignUpMutationMutationResult = Apollo.MutationResult<SignUpMutationMutation>;
export type SignUpMutationMutationOptions = Apollo.BaseMutationOptions<SignUpMutationMutation, SignUpMutationMutationVariables>;
export const ResendEmailOtpDocument = gql`
    mutation ResendEmailOtp($input: OtpReSendInput!) {
  resendEmailOtp(input: $input) {
    data {
      account
      expiresAt
      id
      resendAt
      attemptsRemaining
    }
    token
  }
}
    `;
export type ResendEmailOtpMutationFn = Apollo.MutationFunction<ResendEmailOtpMutation, ResendEmailOtpMutationVariables>;

/**
 * __useResendEmailOtpMutation__
 *
 * To run a mutation, you first call `useResendEmailOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendEmailOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendEmailOtpMutation, { data, loading, error }] = useResendEmailOtpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResendEmailOtpMutation(baseOptions?: Apollo.MutationHookOptions<ResendEmailOtpMutation, ResendEmailOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResendEmailOtpMutation, ResendEmailOtpMutationVariables>(ResendEmailOtpDocument, options);
      }
export type ResendEmailOtpMutationHookResult = ReturnType<typeof useResendEmailOtpMutation>;
export type ResendEmailOtpMutationResult = Apollo.MutationResult<ResendEmailOtpMutation>;
export type ResendEmailOtpMutationOptions = Apollo.BaseMutationOptions<ResendEmailOtpMutation, ResendEmailOtpMutationVariables>;
export const ResendPhoneOtpDocument = gql`
    mutation ResendPhoneOtp($input: OtpReSendInput!) {
  resendPhoneOtp(input: $input) {
    data {
      account
      attemptsRemaining
      expiresAt
      id
      resendAt
    }
    token
  }
}
    `;
export type ResendPhoneOtpMutationFn = Apollo.MutationFunction<ResendPhoneOtpMutation, ResendPhoneOtpMutationVariables>;

/**
 * __useResendPhoneOtpMutation__
 *
 * To run a mutation, you first call `useResendPhoneOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendPhoneOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendPhoneOtpMutation, { data, loading, error }] = useResendPhoneOtpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResendPhoneOtpMutation(baseOptions?: Apollo.MutationHookOptions<ResendPhoneOtpMutation, ResendPhoneOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResendPhoneOtpMutation, ResendPhoneOtpMutationVariables>(ResendPhoneOtpDocument, options);
      }
export type ResendPhoneOtpMutationHookResult = ReturnType<typeof useResendPhoneOtpMutation>;
export type ResendPhoneOtpMutationResult = Apollo.MutationResult<ResendPhoneOtpMutation>;
export type ResendPhoneOtpMutationOptions = Apollo.BaseMutationOptions<ResendPhoneOtpMutation, ResendPhoneOtpMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($input: SignInInput!) {
  signIn(input: $input) {
    jwt
    user {
      firstName
      lastName
      email
      userType
      createdAt
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const GetUserQueryDocument = gql`
    query getUserQuery {
  getMe {
    firstName
    lastName
    dob
    email
    userType
    companyName
    phone
    country
    tnc_status
  }
}
    `;

/**
 * __useGetUserQueryQuery__
 *
 * To run a query within a React component, call `useGetUserQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQueryQuery, GetUserQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQueryQuery, GetUserQueryQueryVariables>(GetUserQueryDocument, options);
      }
export function useGetUserQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQueryQuery, GetUserQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQueryQuery, GetUserQueryQueryVariables>(GetUserQueryDocument, options);
        }
export function useGetUserQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQueryQuery, GetUserQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQueryQuery, GetUserQueryQueryVariables>(GetUserQueryDocument, options);
        }
export type GetUserQueryQueryHookResult = ReturnType<typeof useGetUserQueryQuery>;
export type GetUserQueryLazyQueryHookResult = ReturnType<typeof useGetUserQueryLazyQuery>;
export type GetUserQuerySuspenseQueryHookResult = ReturnType<typeof useGetUserQuerySuspenseQuery>;
export type GetUserQueryQueryResult = Apollo.QueryResult<GetUserQueryQuery, GetUserQueryQueryVariables>;
export function refetchGetUserQueryQuery(variables?: GetUserQueryQueryVariables) {
      return { query: GetUserQueryDocument, variables: variables }
    }
export const DisclosuresDocument = gql`
    query Disclosures($input: GetManyInput) {
  getDisclosures(input: $input) {
    data {
      content
      createdAt
      property {
        slug
      }
      id
      name
      slug
      status
      updatedAt
    }
    count
  }
}
    `;

/**
 * __useDisclosuresQuery__
 *
 * To run a query within a React component, call `useDisclosuresQuery` and pass it any options that fit your needs.
 * When your component renders, `useDisclosuresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDisclosuresQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDisclosuresQuery(baseOptions?: Apollo.QueryHookOptions<DisclosuresQuery, DisclosuresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DisclosuresQuery, DisclosuresQueryVariables>(DisclosuresDocument, options);
      }
export function useDisclosuresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DisclosuresQuery, DisclosuresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DisclosuresQuery, DisclosuresQueryVariables>(DisclosuresDocument, options);
        }
export function useDisclosuresSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<DisclosuresQuery, DisclosuresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DisclosuresQuery, DisclosuresQueryVariables>(DisclosuresDocument, options);
        }
export type DisclosuresQueryHookResult = ReturnType<typeof useDisclosuresQuery>;
export type DisclosuresLazyQueryHookResult = ReturnType<typeof useDisclosuresLazyQuery>;
export type DisclosuresSuspenseQueryHookResult = ReturnType<typeof useDisclosuresSuspenseQuery>;
export type DisclosuresQueryResult = Apollo.QueryResult<DisclosuresQuery, DisclosuresQueryVariables>;
export function refetchDisclosuresQuery(variables?: DisclosuresQueryVariables) {
      return { query: DisclosuresDocument, variables: variables }
    }
export const DisclosureDetailDocument = gql`
    query DisclosureDetail($input: GetOneInput!) {
  getDisclosure(input: $input) {
    content
    createdAt
    property {
      slug
      name
    }
    id
    name
    slug
    status
    updatedAt
  }
}
    `;

/**
 * __useDisclosureDetailQuery__
 *
 * To run a query within a React component, call `useDisclosureDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useDisclosureDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDisclosureDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDisclosureDetailQuery(baseOptions: Apollo.QueryHookOptions<DisclosureDetailQuery, DisclosureDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DisclosureDetailQuery, DisclosureDetailQueryVariables>(DisclosureDetailDocument, options);
      }
export function useDisclosureDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DisclosureDetailQuery, DisclosureDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DisclosureDetailQuery, DisclosureDetailQueryVariables>(DisclosureDetailDocument, options);
        }
export function useDisclosureDetailSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<DisclosureDetailQuery, DisclosureDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DisclosureDetailQuery, DisclosureDetailQueryVariables>(DisclosureDetailDocument, options);
        }
export type DisclosureDetailQueryHookResult = ReturnType<typeof useDisclosureDetailQuery>;
export type DisclosureDetailLazyQueryHookResult = ReturnType<typeof useDisclosureDetailLazyQuery>;
export type DisclosureDetailSuspenseQueryHookResult = ReturnType<typeof useDisclosureDetailSuspenseQuery>;
export type DisclosureDetailQueryResult = Apollo.QueryResult<DisclosureDetailQuery, DisclosureDetailQueryVariables>;
export function refetchDisclosureDetailQuery(variables: DisclosureDetailQueryVariables) {
      return { query: DisclosureDetailDocument, variables: variables }
    }
export const CreatePropertyNotificationDocument = gql`
    mutation CreatePropertyNotification($input: CreatePropertyNotificationInput!) {
  createPropertyNotification(input: $input) {
    createdAt
    id
    updatedAt
  }
}
    `;
export type CreatePropertyNotificationMutationFn = Apollo.MutationFunction<CreatePropertyNotificationMutation, CreatePropertyNotificationMutationVariables>;

/**
 * __useCreatePropertyNotificationMutation__
 *
 * To run a mutation, you first call `useCreatePropertyNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePropertyNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPropertyNotificationMutation, { data, loading, error }] = useCreatePropertyNotificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePropertyNotificationMutation(baseOptions?: Apollo.MutationHookOptions<CreatePropertyNotificationMutation, CreatePropertyNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePropertyNotificationMutation, CreatePropertyNotificationMutationVariables>(CreatePropertyNotificationDocument, options);
      }
export type CreatePropertyNotificationMutationHookResult = ReturnType<typeof useCreatePropertyNotificationMutation>;
export type CreatePropertyNotificationMutationResult = Apollo.MutationResult<CreatePropertyNotificationMutation>;
export type CreatePropertyNotificationMutationOptions = Apollo.BaseMutationOptions<CreatePropertyNotificationMutation, CreatePropertyNotificationMutationVariables>;
export const GetPropertyDocument = gql`
    query GetProperty($input: String!) {
  getProperty(input: $input) {
    basic_info
    subscription_info
    content
    createdAt
    disclosures {
      content
      createdAt
      id
      name
      slug
      status
      updatedAt
    }
    endsAt
    firstDepositDate
    id
    images {
      createdAt
      id
      updatedAt
      url
    }
    attachments {
      createdAt
      id
      url
      name
      status
      updatedAt
    }
    name
    secondDepositDate
    slug
    startsAt
    status
    updatedAt
    votes {
      content
      createdAt
      endsAt
      id
      name
      slug
      startsAt
      updatedAt
    }
  }
}
    `;

/**
 * __useGetPropertyQuery__
 *
 * To run a query within a React component, call `useGetPropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertyQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPropertyQuery(baseOptions: Apollo.QueryHookOptions<GetPropertyQuery, GetPropertyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPropertyQuery, GetPropertyQueryVariables>(GetPropertyDocument, options);
      }
export function useGetPropertyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPropertyQuery, GetPropertyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPropertyQuery, GetPropertyQueryVariables>(GetPropertyDocument, options);
        }
export function useGetPropertySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPropertyQuery, GetPropertyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPropertyQuery, GetPropertyQueryVariables>(GetPropertyDocument, options);
        }
export type GetPropertyQueryHookResult = ReturnType<typeof useGetPropertyQuery>;
export type GetPropertyLazyQueryHookResult = ReturnType<typeof useGetPropertyLazyQuery>;
export type GetPropertySuspenseQueryHookResult = ReturnType<typeof useGetPropertySuspenseQuery>;
export type GetPropertyQueryResult = Apollo.QueryResult<GetPropertyQuery, GetPropertyQueryVariables>;
export function refetchGetPropertyQuery(variables: GetPropertyQueryVariables) {
      return { query: GetPropertyDocument, variables: variables }
    }
export const GetPropertiesDocument = gql`
    query GetProperties($input: GetManyInput) {
  getProperties(input: $input) {
    count
    data {
      attachments {
        createdAt
        id
        status
        updatedAt
        url
      }
      createdAt
      basic_info
      subscription_info
      disclosures {
        content
        createdAt
        id
        name
        slug
        status
        updatedAt
      }
      endsAt
      firstDepositDate
      id
      images {
        createdAt
        id
        updatedAt
        url
      }
      name
      secondDepositDate
      slug
      startsAt
      status
      subscriptions {
        amount
        createdAt
        deposit_amount
        id
        updatedAt
        warranty
      }
      updatedAt
      votes {
        content
        createdAt
        endsAt
        id
        name
        slug
        startsAt
        updatedAt
      }
      content
    }
  }
}
    `;

/**
 * __useGetPropertiesQuery__
 *
 * To run a query within a React component, call `useGetPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertiesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPropertiesQuery(baseOptions?: Apollo.QueryHookOptions<GetPropertiesQuery, GetPropertiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPropertiesQuery, GetPropertiesQueryVariables>(GetPropertiesDocument, options);
      }
export function useGetPropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPropertiesQuery, GetPropertiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPropertiesQuery, GetPropertiesQueryVariables>(GetPropertiesDocument, options);
        }
export function useGetPropertiesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPropertiesQuery, GetPropertiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPropertiesQuery, GetPropertiesQueryVariables>(GetPropertiesDocument, options);
        }
export type GetPropertiesQueryHookResult = ReturnType<typeof useGetPropertiesQuery>;
export type GetPropertiesLazyQueryHookResult = ReturnType<typeof useGetPropertiesLazyQuery>;
export type GetPropertiesSuspenseQueryHookResult = ReturnType<typeof useGetPropertiesSuspenseQuery>;
export type GetPropertiesQueryResult = Apollo.QueryResult<GetPropertiesQuery, GetPropertiesQueryVariables>;
export function refetchGetPropertiesQuery(variables?: GetPropertiesQueryVariables) {
      return { query: GetPropertiesDocument, variables: variables }
    }
export const UpdateWalletDocument = gql`
    mutation UpdateWallet($privateKey: CreateWalletInput!) {
  updateWallet(privateKey: $privateKey) {
    address
    createdAt
    id
    updatedAt
  }
}
    `;
export type UpdateWalletMutationFn = Apollo.MutationFunction<UpdateWalletMutation, UpdateWalletMutationVariables>;

/**
 * __useUpdateWalletMutation__
 *
 * To run a mutation, you first call `useUpdateWalletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWalletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWalletMutation, { data, loading, error }] = useUpdateWalletMutation({
 *   variables: {
 *      privateKey: // value for 'privateKey'
 *   },
 * });
 */
export function useUpdateWalletMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWalletMutation, UpdateWalletMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWalletMutation, UpdateWalletMutationVariables>(UpdateWalletDocument, options);
      }
export type UpdateWalletMutationHookResult = ReturnType<typeof useUpdateWalletMutation>;
export type UpdateWalletMutationResult = Apollo.MutationResult<UpdateWalletMutation>;
export type UpdateWalletMutationOptions = Apollo.BaseMutationOptions<UpdateWalletMutation, UpdateWalletMutationVariables>;
export const UpdateMeDocument = gql`
    mutation UpdateMe($input: UpdateUserInput!) {
  updateMe(input: $input)
}
    `;
export type UpdateMeMutationFn = Apollo.MutationFunction<UpdateMeMutation, UpdateMeMutationVariables>;

/**
 * __useUpdateMeMutation__
 *
 * To run a mutation, you first call `useUpdateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeMutation, { data, loading, error }] = useUpdateMeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeMutation, UpdateMeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(UpdateMeDocument, options);
      }
export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export type UpdateMeMutationResult = Apollo.MutationResult<UpdateMeMutation>;
export type UpdateMeMutationOptions = Apollo.BaseMutationOptions<UpdateMeMutation, UpdateMeMutationVariables>;
export const SendMyOtpDocument = gql`
    mutation SendMyOtp($input: MyOtpSendInput!) {
  sendMyOtp(input: $input) {
    data {
      expiresAt
    }
  }
}
    `;
export type SendMyOtpMutationFn = Apollo.MutationFunction<SendMyOtpMutation, SendMyOtpMutationVariables>;

/**
 * __useSendMyOtpMutation__
 *
 * To run a mutation, you first call `useSendMyOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMyOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMyOtpMutation, { data, loading, error }] = useSendMyOtpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendMyOtpMutation(baseOptions?: Apollo.MutationHookOptions<SendMyOtpMutation, SendMyOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMyOtpMutation, SendMyOtpMutationVariables>(SendMyOtpDocument, options);
      }
export type SendMyOtpMutationHookResult = ReturnType<typeof useSendMyOtpMutation>;
export type SendMyOtpMutationResult = Apollo.MutationResult<SendMyOtpMutation>;
export type SendMyOtpMutationOptions = Apollo.BaseMutationOptions<SendMyOtpMutation, SendMyOtpMutationVariables>;
export const SignOutDocument = gql`
    mutation SignOut {
  signOut {
    success
  }
}
    `;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
      }
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const DeleteAccountDocument = gql`
    mutation DeleteAccount {
  deleteAccount {
    success
  }
}
    `;
export type DeleteAccountMutationFn = Apollo.MutationFunction<DeleteAccountMutation, DeleteAccountMutationVariables>;

/**
 * __useDeleteAccountMutation__
 *
 * To run a mutation, you first call `useDeleteAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountMutation, { data, loading, error }] = useDeleteAccountMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteAccountMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAccountMutation, DeleteAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAccountMutation, DeleteAccountMutationVariables>(DeleteAccountDocument, options);
      }
export type DeleteAccountMutationHookResult = ReturnType<typeof useDeleteAccountMutation>;
export type DeleteAccountMutationResult = Apollo.MutationResult<DeleteAccountMutation>;
export type DeleteAccountMutationOptions = Apollo.BaseMutationOptions<DeleteAccountMutation, DeleteAccountMutationVariables>;
export const GetFaqsDocument = gql`
    query GetFaqs($input: GetManyInput) {
  getFaqs(input: $input) {
    count
    data {
      content
      id
      status
      title
    }
  }
}
    `;

/**
 * __useGetFaqsQuery__
 *
 * To run a query within a React component, call `useGetFaqsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFaqsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFaqsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetFaqsQuery(baseOptions?: Apollo.QueryHookOptions<GetFaqsQuery, GetFaqsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFaqsQuery, GetFaqsQueryVariables>(GetFaqsDocument, options);
      }
export function useGetFaqsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFaqsQuery, GetFaqsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFaqsQuery, GetFaqsQueryVariables>(GetFaqsDocument, options);
        }
export function useGetFaqsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFaqsQuery, GetFaqsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFaqsQuery, GetFaqsQueryVariables>(GetFaqsDocument, options);
        }
export type GetFaqsQueryHookResult = ReturnType<typeof useGetFaqsQuery>;
export type GetFaqsLazyQueryHookResult = ReturnType<typeof useGetFaqsLazyQuery>;
export type GetFaqsSuspenseQueryHookResult = ReturnType<typeof useGetFaqsSuspenseQuery>;
export type GetFaqsQueryResult = Apollo.QueryResult<GetFaqsQuery, GetFaqsQueryVariables>;
export function refetchGetFaqsQuery(variables?: GetFaqsQueryVariables) {
      return { query: GetFaqsDocument, variables: variables }
    }
export const GetNoticeDocument = gql`
    query GetNotice($input: GetOneInput!) {
  getNotice(input: $input) {
    content
    id
    image
    slug
    status
    title
  }
}
    `;

/**
 * __useGetNoticeQuery__
 *
 * To run a query within a React component, call `useGetNoticeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNoticeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNoticeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetNoticeQuery(baseOptions: Apollo.QueryHookOptions<GetNoticeQuery, GetNoticeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNoticeQuery, GetNoticeQueryVariables>(GetNoticeDocument, options);
      }
export function useGetNoticeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNoticeQuery, GetNoticeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNoticeQuery, GetNoticeQueryVariables>(GetNoticeDocument, options);
        }
export function useGetNoticeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetNoticeQuery, GetNoticeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNoticeQuery, GetNoticeQueryVariables>(GetNoticeDocument, options);
        }
export type GetNoticeQueryHookResult = ReturnType<typeof useGetNoticeQuery>;
export type GetNoticeLazyQueryHookResult = ReturnType<typeof useGetNoticeLazyQuery>;
export type GetNoticeSuspenseQueryHookResult = ReturnType<typeof useGetNoticeSuspenseQuery>;
export type GetNoticeQueryResult = Apollo.QueryResult<GetNoticeQuery, GetNoticeQueryVariables>;
export function refetchGetNoticeQuery(variables: GetNoticeQueryVariables) {
      return { query: GetNoticeDocument, variables: variables }
    }
export const GetManyNoticesDocument = gql`
    query GetManyNotices($input: GetManyInput) {
  getManyNotices(input: $input) {
    count
    data {
      content
      id
      image
      slug
      status
      title
    }
  }
}
    `;

/**
 * __useGetManyNoticesQuery__
 *
 * To run a query within a React component, call `useGetManyNoticesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetManyNoticesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetManyNoticesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetManyNoticesQuery(baseOptions?: Apollo.QueryHookOptions<GetManyNoticesQuery, GetManyNoticesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetManyNoticesQuery, GetManyNoticesQueryVariables>(GetManyNoticesDocument, options);
      }
export function useGetManyNoticesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetManyNoticesQuery, GetManyNoticesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetManyNoticesQuery, GetManyNoticesQueryVariables>(GetManyNoticesDocument, options);
        }
export function useGetManyNoticesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetManyNoticesQuery, GetManyNoticesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetManyNoticesQuery, GetManyNoticesQueryVariables>(GetManyNoticesDocument, options);
        }
export type GetManyNoticesQueryHookResult = ReturnType<typeof useGetManyNoticesQuery>;
export type GetManyNoticesLazyQueryHookResult = ReturnType<typeof useGetManyNoticesLazyQuery>;
export type GetManyNoticesSuspenseQueryHookResult = ReturnType<typeof useGetManyNoticesSuspenseQuery>;
export type GetManyNoticesQueryResult = Apollo.QueryResult<GetManyNoticesQuery, GetManyNoticesQueryVariables>;
export function refetchGetManyNoticesQuery(variables?: GetManyNoticesQueryVariables) {
      return { query: GetManyNoticesDocument, variables: variables }
    }
export const GetManyPageListDocument = gql`
    query GetManyPageList($input: GetManyInput) {
  getPages(input: $input) {
    count
    data {
      content
      id
      name
      slug
      status
    }
  }
}
    `;

/**
 * __useGetManyPageListQuery__
 *
 * To run a query within a React component, call `useGetManyPageListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetManyPageListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetManyPageListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetManyPageListQuery(baseOptions?: Apollo.QueryHookOptions<GetManyPageListQuery, GetManyPageListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetManyPageListQuery, GetManyPageListQueryVariables>(GetManyPageListDocument, options);
      }
export function useGetManyPageListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetManyPageListQuery, GetManyPageListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetManyPageListQuery, GetManyPageListQueryVariables>(GetManyPageListDocument, options);
        }
export function useGetManyPageListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetManyPageListQuery, GetManyPageListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetManyPageListQuery, GetManyPageListQueryVariables>(GetManyPageListDocument, options);
        }
export type GetManyPageListQueryHookResult = ReturnType<typeof useGetManyPageListQuery>;
export type GetManyPageListLazyQueryHookResult = ReturnType<typeof useGetManyPageListLazyQuery>;
export type GetManyPageListSuspenseQueryHookResult = ReturnType<typeof useGetManyPageListSuspenseQuery>;
export type GetManyPageListQueryResult = Apollo.QueryResult<GetManyPageListQuery, GetManyPageListQueryVariables>;
export function refetchGetManyPageListQuery(variables?: GetManyPageListQueryVariables) {
      return { query: GetManyPageListDocument, variables: variables }
    }
export const GetOnePageDocument = gql`
    query GetOnePage($input: GetOneInput!) {
  getOnePage(input: $input) {
    id
    name
    content
    status
    slug
  }
}
    `;

/**
 * __useGetOnePageQuery__
 *
 * To run a query within a React component, call `useGetOnePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOnePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOnePageQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOnePageQuery(baseOptions: Apollo.QueryHookOptions<GetOnePageQuery, GetOnePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOnePageQuery, GetOnePageQueryVariables>(GetOnePageDocument, options);
      }
export function useGetOnePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOnePageQuery, GetOnePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOnePageQuery, GetOnePageQueryVariables>(GetOnePageDocument, options);
        }
export function useGetOnePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOnePageQuery, GetOnePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOnePageQuery, GetOnePageQueryVariables>(GetOnePageDocument, options);
        }
export type GetOnePageQueryHookResult = ReturnType<typeof useGetOnePageQuery>;
export type GetOnePageLazyQueryHookResult = ReturnType<typeof useGetOnePageLazyQuery>;
export type GetOnePageSuspenseQueryHookResult = ReturnType<typeof useGetOnePageSuspenseQuery>;
export type GetOnePageQueryResult = Apollo.QueryResult<GetOnePageQuery, GetOnePageQueryVariables>;
export function refetchGetOnePageQuery(variables: GetOnePageQueryVariables) {
      return { query: GetOnePageDocument, variables: variables }
    }
export const GetManyVoteListDocument = gql`
    query GetManyVoteList($input: GetManyInput) {
  getMyVotes(input: $input) {
    count
    data {
      content
      createdAt
      endsAt
      id
      name
      slug
      startsAt
      updatedAt
    }
  }
}
    `;

/**
 * __useGetManyVoteListQuery__
 *
 * To run a query within a React component, call `useGetManyVoteListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetManyVoteListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetManyVoteListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetManyVoteListQuery(baseOptions?: Apollo.QueryHookOptions<GetManyVoteListQuery, GetManyVoteListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetManyVoteListQuery, GetManyVoteListQueryVariables>(GetManyVoteListDocument, options);
      }
export function useGetManyVoteListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetManyVoteListQuery, GetManyVoteListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetManyVoteListQuery, GetManyVoteListQueryVariables>(GetManyVoteListDocument, options);
        }
export function useGetManyVoteListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetManyVoteListQuery, GetManyVoteListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetManyVoteListQuery, GetManyVoteListQueryVariables>(GetManyVoteListDocument, options);
        }
export type GetManyVoteListQueryHookResult = ReturnType<typeof useGetManyVoteListQuery>;
export type GetManyVoteListLazyQueryHookResult = ReturnType<typeof useGetManyVoteListLazyQuery>;
export type GetManyVoteListSuspenseQueryHookResult = ReturnType<typeof useGetManyVoteListSuspenseQuery>;
export type GetManyVoteListQueryResult = Apollo.QueryResult<GetManyVoteListQuery, GetManyVoteListQueryVariables>;
export function refetchGetManyVoteListQuery(variables?: GetManyVoteListQueryVariables) {
      return { query: GetManyVoteListDocument, variables: variables }
    }
export const GetOneVoteDocument = gql`
    query GetOneVote($input: GetOneInput!) {
  getMyVote(input: $input) {
    content
    createdAt
    endsAt
    id
    name
    slug
    startsAt
    updatedAt
  }
}
    `;

/**
 * __useGetOneVoteQuery__
 *
 * To run a query within a React component, call `useGetOneVoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneVoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneVoteQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneVoteQuery(baseOptions: Apollo.QueryHookOptions<GetOneVoteQuery, GetOneVoteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneVoteQuery, GetOneVoteQueryVariables>(GetOneVoteDocument, options);
      }
export function useGetOneVoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneVoteQuery, GetOneVoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneVoteQuery, GetOneVoteQueryVariables>(GetOneVoteDocument, options);
        }
export function useGetOneVoteSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOneVoteQuery, GetOneVoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOneVoteQuery, GetOneVoteQueryVariables>(GetOneVoteDocument, options);
        }
export type GetOneVoteQueryHookResult = ReturnType<typeof useGetOneVoteQuery>;
export type GetOneVoteLazyQueryHookResult = ReturnType<typeof useGetOneVoteLazyQuery>;
export type GetOneVoteSuspenseQueryHookResult = ReturnType<typeof useGetOneVoteSuspenseQuery>;
export type GetOneVoteQueryResult = Apollo.QueryResult<GetOneVoteQuery, GetOneVoteQueryVariables>;
export function refetchGetOneVoteQuery(variables: GetOneVoteQueryVariables) {
      return { query: GetOneVoteDocument, variables: variables }
    }