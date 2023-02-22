import El from "../../library/El";

const variants = {
  contained: "bg-red-900 text-white font-bold text-center	",
  
  link: "bg-transparent text-slate-400 text-center hover:bg-gray-100 hover-text-black hover:font-bold",
};

const Button = ({ element = "button", child, variant="link" , ...rest }) => {
  return El({
    element: element,
    className: `${variants[variant]} inline-block rounded-md text-sm py-3 px-6`,
    child,
    ...rest,
  });
};

export default Button;
