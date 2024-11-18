import {
  ChartPieIcon,
  ClapperboardIcon,
  FileTextIcon,
  ImagesIcon,
  LayoutDashboardIcon,
} from "lucide-react";

export const navItems = [
  {
    name: "Bảng điều khiển",
    icon: LayoutDashboardIcon,
    url: "/",
  },
  {
    name: "Tài liệu",
    icon: FileTextIcon,
    url: "/documents",
  },
  {
    name: "Hình ảnh",
    icon: ImagesIcon,
    url: "/images",
  },
  {
    name: "Phương tiện",
    icon: ClapperboardIcon,
    url: "/media",
  },
  {
    name: "Khác",
    icon: ChartPieIcon,
    url: "/others",
  },
];

export const actionsDropdownItems = [
  {
    label: "Đổi tên",
    icon: "/assets/icons/edit.svg",
    value: "rename",
  },
  {
    label: "Chi tiết",
    icon: "/assets/icons/info.svg",
    value: "details",
  },
  {
    label: "Chia sẻ",
    icon: "/assets/icons/share.svg",
    value: "share",
  },
  {
    label: "Tải xuống",
    icon: "/assets/icons/download.svg",
    value: "download",
  },
  {
    label: "Xóa",
    icon: "/assets/icons/delete.svg",
    value: "delete",
  },
];

export const sortTypes = [
  {
    label: "Ngày tạo (mới nhất)",
    value: "$createdAt-desc",
  },
  {
    label: "Ngày tạo (cũ nhất)",
    value: "$createdAt-asc",
  },
  {
    label: "Tên (A-Z)",
    value: "name-asc",
  },
  {
    label: "Tên (Z-A)",
    value: "name-desc",
  },
  {
    label: "Kích cỡ (Cao nhất)",
    value: "size-desc",
  },
  {
    label: "Kích cỡ (Thấp nhất)",
    value: "size-asc",
  },
];

export const avatarPlaceholderUrl =
  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";

export const MAX_FILE_SIZE = 50 * 1024 * 1024;
