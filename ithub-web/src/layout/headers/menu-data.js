const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Trang chủ",
    link: "/",
    active: "active",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Giới thiệu",
    link: "/about",
    active: "",
  },

  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Thành viên",
    link: "/member",
    active: "",
    sub_menus: [
      { link: "/leader", title: "Ban chủ nhiệm" },
      { link: "/counselor", title: "Ban cố vấn" },
      { link: "/member", title: "Thành viên" },
    ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Sự kiện",
    link: "/event",
    active: "",
    sub_menus: [],
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Liên hệ",
    link: "/contact",
    active: "",
  },
];
export default menu_data;
