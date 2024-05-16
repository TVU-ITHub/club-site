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
    link: "/project",
    active: "",
    sub_menus: [
      { link: "/project", title: "Ban chủ nhiệm" },
      { link: "/project-details", title: "Ban cố vấn" },
      { link: "/project-details", title: "Thành viên" },
    ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Sự kiện",
    link: "/blog",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Blog" },
      { link: "/blog-list", title: "Blog List" },
      { link: "/blog-details", title: "Blog Details" },
      { link: "/blog-details-2", title: "Blog Details 02" },
    ],
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
