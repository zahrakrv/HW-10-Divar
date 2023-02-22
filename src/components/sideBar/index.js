import El from "../../library/El";
import namad from "../../../img/e-namad.png";
import ecommerce from "../../../img/e-commerce.png";
import rasane from "../../../img/digital.png";

const sideBar = () => {
  return El({
    element: "div",
    className: "hidden lg:block w-auto mr-12 bg-white",
    child: [
      El({
        element: "div",
        // className: "overflow-scroll",
        child: [
          El({
            element: "p",
            child: "دسته ها",
            className: "mb-6 mt-3 text-xs",
          }),
          El({
            element: "div",
            className: "mb-3",
            child: [
              El({
                element: "a",
                child: El({
                  element: "ion-icon",
                  name: "home-outline",
                  className: "text-slate-500 items-end",
                }),
              }),
              El({
                element: "a",
                child: "املاک",
                href: "#",
                className: " mx-2 text-slate-500 items-center",
              }),
            ],
          }),
          El({
            element: "div",
            className: "mb-3 flex items-center",
            child: [
              El({
                element: "a",
                className: "flex items-end",
                child: El({
                  element: "ion-icon",
                  name: "car-sport-outline",
                  className: "text-slate-500",
                }),
              }),
              El({
                element: "a",
                className: "flex items-end",
                child: "وسایل نقلیه",
                href: "#",
                className: " mx-2 text-slate-500",
              }),
            ],
          }),
          El({
            element: "div",
            className: "mb-3",
            child: [
              El({
                element: "a",
                child: El({
                  element: "ion-icon",
                  name: "phone-portrait-outline",
                  className: "text-slate-500",
                }),
              }),
              El({
                element: "a",
                child: "کالای دیجیتال",
                href: "#",
                className: " mx-2 text-slate-500",
              }),
            ],
          }),
          El({
            element: "div",
            className: "mb-3",
            child: [
              El({
                element: "a",
                child: El({
                  element: "ion-icon",
                  name: "trophy-outline",
                  className: "text-slate-500",
                }),
              }),
              El({
                element: "a",
                child: "خانه و آشپزخانه",
                href: "#",
                className: " mx-2 text-slate-500",
              }),
            ],
          }),
          El({
            element: "div",
            className: "mb-3",

            child: [
              El({
                element: "a",
                child: El({
                  element: "ion-icon",
                  name: "trash-bin-outline",
                  className: "text-slate-500",
                }),
              }),
              El({
                element: "a",
                child: "خدمات",
                href: "#",
                className: " mx-2 text-slate-500",
              }),
            ],
          }),
          El({
            element: "div",
            className: "mb-3",

            child: [
              El({
                element: "a",
                child: El({
                  element: "ion-icon",
                  name: "watch-outline",
                  className: "text-slate-500",
                }),
              }),
              El({
                element: "a",
                child: "وسایل شخصی",
                href: "#",
                className: " mx-2 text-slate-500",
              }),
            ],
          }),
          El({
            element: "div",
            className: "mb-3",

            child: [
              El({
                element: "a",
                child: El({
                  element: "ion-icon",
                  name: "game-controller-outline",
                  className: "text-slate-500",
                }),
              }),
              El({
                element: "a",
                child: "سرگرمی و فراغت",
                href: "#",
                className: " mx-2 text-slate-500",
              }),
            ],
          }),
          El({
            element: "div",
            className: "mb-3",

            child: [
              El({
                element: "a",
                child: El({
                  element: "ion-icon",
                  name: "people-outline",
                  className: "text-slate-500",
                }),
              }),
              El({
                element: "a",
                child: "اجتماعی",
                href: "#",
                className: " mx-2 text-slate-500",
              }),
            ],
          }),
          El({
            element: "div",
            className: "mb-3",

            child: [
              El({
                element: "a",
                child: El({
                  element: "ion-icon",
                  name: "boat-outline",
                  className: "text-slate-500",
                }),
              }),
              El({
                element: "a",
                child: "تجهیزات و صنعتی",
                href: "#",
                className: " mx-2 text-slate-500",
              }),
            ],
          }),
          El({
            element: "div",
            className: "mb-5",

            child: [
              El({
                element: "a",
                child: El({
                  element: "ion-icon",
                  name: "bag-handle-outline",
                  className: "text-slate-500",
                }),
              }),
              El({
                element: "a",
                child: "استخدام و کاریابی",
                href: "#",
                className: " mx-2 text-slate-500",
              }),
            ],
          }),
          El({
            element: "div",
            className: "border-t border-solid py-3",
            child: [
              El({
                element: "ion-icon",
                name: "chevron-down-outline",
                className: "text-slate-500",
              }),
              El({
                element: "a",
                child: "محل",
                href: "#",
                className: " mx-2 text-slate-500",
              }),
            ],
          }),
          El({
            element: "div",
            className: "border-t border-solid py-3",
            child: [
              El({
                element: "ion-icon",
                name: "chevron-down-outline",
                className: "text-slate-500",
              }),
              El({
                element: "a",
                child: "قیمت",
                href: "#",
                className: " mx-2 text-slate-500",
              }),
            ],
          }),
          El({
            element: "div",
            className: "border-t border-solid py-3",
            child: [
              El({
                element: "ion-icon",
                name: "chevron-down-outline",
                className: "text-slate-500",
              }),
              El({
                element: "a",
                child: "وضعیت آگهی",
                href: "#",
                className: " mx-2 text-slate-500",
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "flex gap-6 pt-4 text-slate-400 my-2 border-t border-solid text-xs",
            child: [
              El({
                element: "a",
                child: "درباره ی دیوار",
                href: "#",
              }),
              El({
                element: "a",
                child: "دریافت برنامه",
                href: "#",
              }),
              El({
                element: "a",
                child: " بلاگ دیوار",
                href: "#",
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex gap-6 text-slate-400 my-4 text-xs",
            child: [
              El({
                element: "a",
                child: "کسب و کارها",
                href: "#",
              }),
              El({
                element: "a",
                child: "پشتیبانی و قوانین",
                href: "#",
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex text-xl text-slate-600 gap-6 justify-center",
            child: [
              El({
                element: "a",
                href: "#",
                child: [
                  El({
                    element: "ion-icon",
                    name: "logo-twitter",
                  }),
                ],
              }),
              El({
                element: "a",
                href: "#",
                child: [
                  El({
                    element: "ion-icon",
                    name: "logo-instagram",
                  }),
                ],
              }),
              El({
                element: "a",
                href: "#",
                child: [
                  El({
                    element: "ion-icon",
                    name: "logo-linkedin",
                  }),
                ],
              }),
              El({
                element: "a",
                href: "#",
                child: [
                  El({
                    element: "ion-icon",
                    name: "logo-youtube",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex mt-6",
            child: [
              El({
                element: "img",
                src: namad,
                className: "inline-block w-16 h-28",
              }),
              El({
                element: "img",
                src: ecommerce,
                className: "inline-block w-16 h-28",
              }),
              El({
                element: "img",
                src: rasane,
                className: "inline-block w-16 h-28",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export default sideBar;
