import El from "../../library/El";
import allCard from "../card/allCards";
import logo from "../../../img/logo-divar.jpg";
const main = () => {
  return El({
    element: "div",
    className: " lg:mt-0 mt-28",
    // className: "px-6",
    child: [
      El({
        element: "div",

        child: [
          El({
            element: "p",
            className: "text-xs text-slate-500 lg:text-end m-6",
            child: "دیوار تهران: انواع آگهی ها و خدمات در تهران",
          }),
        ],
      }),
      El({
        element: "div",
        child: allCard(),
      }),
      El({
        element: "div",
        className:
          "lg:hidden flex text-center mx-auto items-center gap-2 justify-around w-full h-14 bg-white fixed bottom-0 shadow-xl border-gray-100 border-t-2",
        child: [
          El({
            element: "div",
            className: "flex flex-wrap justify-center items-center",
            child: [
              El({
                element: "img",
                src: logo,
                className: "w-9 inline",
              }),
              El({
                element: "span",
                className: "text-red-600 text-sm",
                child: "آکهی ها",
              }),
            ],
          }),
          El({
            element: "div",
            // className: "flex flex-wrap",
            child: [
              El({
                element: "ion-icon",
                className: "align-middle text-center text-2xl",
                name: "options-outline",
              }),
              El({
                element: "span",
                className: "text-gray-600",
                child: "دسته‌ها",
              }),
            ],
          }),
          El({
            element: "div",
            child: [
              El({
                element: "ion-icon",
                className: "align-middle text-center text-2xl",
                name: "add-circle-outline",
              }),
              El({
                element: "span",
                className: "text-gray-600",
                child: "ثبت‌آگهی",
              }),
            ],
          }),
          El({
            element: "div",
            child: [
              El({
                element: "ion-icon",
                className: "align-middle text-center text-2xl",
                name: "chatbubble-outline",
              }),
              El({
                element: "span",
                className: "text-gray-600",
                child: "چت",
              }),
            ],
          }),
          El({
            element: "div",
            child: [
              El({
                element: "ion-icon",
                className: "align-middle text-center text-2xl",
                name: "person-outline",
              }),
              El({
                element: "span",
                className: "text-gray-600",
                child: "دیوار‌من",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default main;
