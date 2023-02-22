import El from "../../library/El";

// const card = (props)=>{
// return El({
//     element:'div',

// })
// }
// const variants={

// } ;
const card = ({
  element = "div",
  child,
  title,
  condition,
  price,
  date,
  src,
  ...rest
}) => {
  return El({
    element: element,
    className:
      "inline-block text-sm p-2 rounded-md border border-slate-300 lg:w-80 w-full",
    child: [
      El({
        element: "div",
        className: "flex items-center",
        child: [
          El({
            element: "div",
            className: "flex flex-col gap-1",
            child: [
              El({
                element: "h2",
                className: "font-bold text-base mb-2",
                child: title,
              }),
              El({
                element: "p",
                className: "text-sm text-gray-500",
                child: condition,
              }),
              El({
                element: "p",
                className: "text-sm text-gray-500",
                child: price,
              }),
              El({
                element: "p",
                className: "text-sm text-gray-400",
                child: date,
              }),
            ],
          }),
          El({
            element: "img",
            className: "w-36",
            src: src,
          }),
        ],
      }),
    ],
  });
};

export default card;
