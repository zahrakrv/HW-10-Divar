import El from "../../library/El";
import Button from "../button";
import logo from "../../../img/logo-divar.jpg";

const Navbar = () => {
  return El({
    element: "nav",
    className: "fixed lg:relative",
    child: [
      El({
        element: "div",
        className:
          "flex lg:justify-between bg-white w-full border-b border-solid p-2 lg:pr-12 ",
        child: [
          El({
            element: "div",
            className: "flex items-center gap-10 relative w-full lg:w-3/5 ",
            child: [
              El({
                element: "img",
                src: logo,
                className: "hidden lg:block border-l border-solid pl-2",
              }),
              El({
                element: "a",
                href: "#",
                className:
                  "absolute lg:right-20 left-24 justify-center lg:w-max lg:block lg:inline hover:bg-gray-100 hover-text-black hover:font-bold text-slate-400 rounded p-3",
                child: [
                  El({
                    element: "ion-icon",
                    name: "location-outline",
                    className: "text-slate-500 items-end ml-1 align-middle",
                  }),
                  El({
                    element: "span",
                    child: "تهران",
                  }),
                ],
              }),
              El({
                element: "div",
                href: "#",
                className:
                  " hidden lg:inline hover:bg-gray-100 lg:w-max hover-text-black hover:font-bold text-slate-400 rounded p-3 mr-20 text-sm",
                child: [
                  El({
                    element: "span",
                    child: "دسته ها",
                  }),
                  El({
                    element: "ion-icon",
                    name: "chevron-down-outline",
                    className:
                      "text-slate-500 text-sm items-end mr-2 align-middle",
                  }),
                ],
              }),
              El({
                element: "div",
                className: "w-full",
                child: [
                  El({
                    element: "input",
                    placeholder: "جستجو در همه ی آگهی ها",
                    className:
                      "lg:w-96 w-full rounded bg-slate-100 focus:outline-none p-2",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "hidden lg:block",
            child: [
              Button({
                element: "a",
                href: "#",
                child: "دیوار من",
                variant: "link",
              }),
              Button({
                element: "a",
                href: "#",
                child: "چت",
                variant: "link",
              }),
              Button({
                element: "a",
                href: "#",
                child: "پشتیبانی",
                variant: "link",
              }),
              Button({
                element: "a",
                href: "#",
                child: "ثبت آگهی",
                variant: "contained",
              }),
              // El({
              //   element:"hr",
              //   className:"",
              // }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className:
          "lg:hidden bg-white flex w-full h-14 overflow-x-hidden gap-2 jutify-center items-center",
        child: [
          El({
            element: "div",
            className:
              "flex shadow-md p-1 px-2 text-sm border-2 rounded-3xl items-center gap-1 ",
            child: [
              El({
                element: "ion-icon",
                className: "align-middle",
                name: "options-outline",
              }),
              El({
                element: "span",
                child: " فیلترها",
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "flex shadow-md p-1 px-2 text-sm border-2 rounded-3xl items-center gap-1",
            child: [
              El({
                element: "ion-icon",
                className: "align-middle",
                name: "options-outline",
              }),
              El({
                element: "span",
                className: "text-sm",
                child: "دسته",
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "flex shadow-md p-1 px-2 text-sm border-2 rounded-3xl items-center gap-1",
            child: [
              // El({
              //   element: "ion-icon",
              //   className: "align-middle",
              //   name: "options-outline",
              // }),
              El({
                element: "span",
                child: "خودرو",
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "flex shadow-md p-1 px-2 text-sm border-2 rounded-3xl items-center gap-1",
            child: [
              // El({
              //   element: "ion-icon",
              //   className: "align-middle",
              //   name: "options-outline",
              // }),
              El({
                element: "span",
                child: " فروش",
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "flex shadow-md p-1 px-2 text-sm border-2 rounded-3xl items-center gap-1",
            child: [
              // El({
              //   element: "ion-icon",
              //   className: "align-middle",
              //   name: "options-outline",
              // }),
              El({
                element: "span",
                child: " موبایل",
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "flex shadow-md p-1 px-2 text-sm border-2 rounded-3xl items-center gap-1",
            child: [
              // El({
              //   element: "ion-icon",
              //   className: "align-middle",
              //   name: "options-outline",
              // }),
              El({
                element: "span",
                child: " حیوانات",
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "flex shadow-md p-1 px-2 text-sm border-2 rounded-3xl items-center gap-1",
            child: [
              // El({
              //   element: "ion-icon",
              //   className: "align-middle",
              //   name: "options-outline",
              // }),
              El({
                element: "span",
                child: " فیلترها",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default Navbar;
