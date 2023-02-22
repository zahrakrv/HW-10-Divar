import El from "../../library/El";
import sideBar from "../../components/sideBar";
import allCard from "../../components/card/allCards";
import main from "../../components/main/main";

// const Container = (child) => {
//   return (El({
//       element:'div',
//       className:'w-auto mx-auto px-6 max-w-7xl',
//       child,
//   }) );
// }
const article = () => {
  return El({
    element: "div",
    className: "flex gap-5",
    child: [sideBar(), main()],
  });
};

export default article;
