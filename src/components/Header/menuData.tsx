import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Trang Chủ",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Giới Thiệu",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Liên Hệ",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Chi Tiết",
    newTab: false,
    submenu: [
      {
        id: 43,
        title: "Dạng lưới",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Dạng sidebar",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Chi tiết",
        path: "/blog-details",
        newTab: false,
      },
    ],
  },
];
export default menuData;
