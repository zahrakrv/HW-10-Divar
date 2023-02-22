import Navbar from "./components/navbar";
import sideBar from "./components/sideBar";
import main from "./components/main/main";
// import Container from "./layout/Container";
import El from "./library/El";
import article from "./layout/container/index";
// import NavBarMob from "./components/navbarMob/navBarMob";

const App = () => {
  const app = El({
    element: "div",
    child: [Navbar(), article()],
    className: "w-full h-full mx-auto",
  });
  return app;
};
export default App;
