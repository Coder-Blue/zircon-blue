/* eslint-disable no-unused-vars */

declare type FileType = "document" | "image" | "video" | "audio" | "other";

declare type ActionType = {
  label: string;
  icon: string;
  value: string;
};

declare type SearchParamProps = {
  params?: Promise<SegmentParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

declare type UploadFileProps = {
  file: File;
  ownerId: string;
  accountId: string;
  path: string;
};

declare type GetFilesProps = {
  types: FileType[];
  searchText?: string;
  sort?: string;
  limit?: number;
};

declare type RenameFileProps = {
  fileId: string;
  name: string;
  extension: string;
  path: string;
};

declare type UpdateFileUsersProps = {
  fileId: string;
  emails: string[];
  path: string;
};

declare type DeleteFileProps = {
  fileId: string;
  bucketFileId: string;
  path: string;
};

declare type FileUploaderProps = {
  ownerId: string;
  accountId: string;
  className?: string;
};

declare type MobileNavigationProps = {
  ownerId: string;
  accountId: string;
  fullName: string;
  avatar: string;
  email: string;
};

declare type SidebarProps = {
  fullName: string;
  avatar: string;
  email: string;
};

declare type ThumbnailProps = {
  type: string;
  extension: string;
  url: string;
  className?: string;
  imageClassName?: string;
};

declare type ShareInputProps = {
  file: Models.Document;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: (email: string) => void;
};
