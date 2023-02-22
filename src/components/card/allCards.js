import El from "../../library/El";
import card from "../card/card";
import pic1 from "../../../img/pic1.png";
import pic2 from "../../../img/pic2.png";
import pic3 from "../../../img/pic3.png";
import pic4 from "../../../img/pic4.png";
import pic5 from "../../../img/pic5.png";
import pic6 from "../../../img/pic6.png";
import pic7 from "../../../img/pic7.png";
import pic8 from "../../../img/pic8.png";
import pic9 from "../../../img/pic9.png";
import pic10 from "../../../img/pic10.png";
import pic11 from "../../../img/pic11.png";
import pic12 from "../../../img/pic12.png";
import pic13 from "../../../img/pic13.png";
import pic14 from "../../../img/pic14.png";
import pic15 from "../../../img/pic15.png";
import pic16 from "../../../img/pic16.png";
import pic17 from "../../../img/pic17.png";
import pic18 from "../../../img/pic18.png";

const allCard = () => {
  return El({
    element: "div",
    className: "lg:grid lg:grid-cols-3 gap-2 gap-y-3 sm:grid sm:grid-cols-2",
    child: [
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: "دو عدد پرده حریر 180 در ارتفاع 280",
            condition: "کارکرده",
            price: "500,000 تومان",
            date: "لحظاتی پیش در پیروزی",
            src: pic1,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: "  تاب بازی رنگی مخصوص کودک آویز",
            condition: "در حد نو",
            price: "80,000 تومان",
            date: "لحظاتی پیش در سوهانک",
            src: pic2,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: "سالن زیبایی شیوا کاشت و خدمات ناخن",
            condition: " ",
            price: " ",
            date: "لحظاتی پیش در ستارخان",
            src: pic3,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: "109 متر واحد شهر زیبا، الاله ی شرقی",
            condition: "ودیعه: 200,000,000 تومان",
            price: " اجاره ماهانه 8,500,000 تومان",
            date: "آژانس املاک بزرگ آرتا در شهرزیبا",
            src: pic4,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: "بورس اهن و میلگرد تیراهن ورق نبشی ناودانی قوطی",
            condition: "نو",
            price: "توافقی",
            date: "لحظاتی پیش در شادآباد",
            src: pic5,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: "پژو پارس سال سفارشی Xu7 پلاس با مانیتور و...",
            condition: "0 کیلومتر",
            price: "توافقی",
            date: "نمایشگاه در امانیه",
            src: pic6,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: "ساعت کاسیو اورجینال قدیمی سالم",
            condition: "در حد نو",
            price: "470,000 تومان",
            date: "لحظاتی پیش در پونک",
            src: pic7,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: "جوجه طوطی عروس هلندی البینو دستی سرلاکی",
            condition: "",
            price: "800,000 تومان",
            date: "نمایشگاه در نازی آباد",
            src: pic8,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: "ترازو پند و کالباس بر محک سالم و تمیز",
            condition: "در حد نو",
            price: "4,500,000 تومان",
            date: "لحظاتی پیش در شهران شمالی",
            src: pic9,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: "بازی قابلنصب 5 Horizon Forbidden ps4 کپیخور",
            condition: "نو",
            price: "23,000,000 تومان",
            date: "فروشگاه پویا در هروی",
            src: pic10,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: " آباژور خانگی ایستاده مدل دار تزیینی",
            condition: "در حد نو",
            price: "1,100,000 تومان",
            date: "لحظاتی پیش در سعادت آباد",
            src: pic11,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: "اجاره آپارتمان 75 متر 2 خواب فول پونک اشرفی",
            condition: "ودیعه: 150,000,000 تومان",
            price: "اجاره ماهانه: 11,000,000 تومان",
            date: "آژانس املاک آرو در پونک",
            src: pic12,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: "وانت مزدا کارا دو کابین مدل 1401-",
            condition: "0 کیلومتر",
            price: "455,000,000 تومان",
            date: "لحظاتی پیش در صادقیه",
            src: pic13,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: " 65 متر واحد یک خواب (کوهسار درکه )",
            condition: "ودیعه: 700,000,000 تومان",
            price: "اجاره ماهانه:9,000,000 تومان",
            date: "مشاور حسام شجاعی در درکه",
            src: pic14,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: " میز ابزار کودک اسباب بازی سبز رنگ",
            condition: "در حد نو",
            price: "200,000 تومان",
            date: "نیم ساعت پیش در نارمک",
            src: pic15,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: " اپل iphone 13 با حافظه 256 گیگابایت",
            condition: "در حد نو",
            price: "45,500,000 تومان",
            date: "نیم ساعت پیش در بهارستان",
            src: pic16,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: " دزدگیر مجیکار ماجیکار اصلی کامل",
            condition: " ",
            price: "3,000,000 تومان",
            date: "نیم ساعت پیش در دریان نو",
            src: pic17,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-3 flex",
        child: [
          card({
            title: " یخچال ساید بای ساید دوو dd4s//0034mw /+",
            condition: "نو",
            price: "42,000,000 تومان",
            date: "فروشگاه نوین در دروازه شمیران",
            src: pic18,
          }),
        ],
      }),
    ],
  });
};
export default allCard;
