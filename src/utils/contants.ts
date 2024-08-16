import { namePage, ROUTE } from "../utils/mock";
import { IMAGES } from "./image";

export const listTab = [
  {
    title: namePage.aboutUs,
    link: ROUTE.ABOUTUS,
  },
  {
    title: namePage.pdVideos,
    link: ROUTE.PDVIDEOS,
  },
  {
    title: namePage.textBooks,
    link: ROUTE.TEXTBOOKS,
  },
  {
    title: namePage.blog,
    link: ROUTE.BLOG,
  },
  {
    title: namePage.contactUs,
    link: ROUTE.CONTACTUS,
  },
];

export const listFooter = [
  {
    title: "starplus education",
    subTitle: [
      {
        name: "115A Commonwealth Drive #05-12 Tanglin Halt Industrial Estate Singapore 149596",
      },
    ],
  },
  {
    title: "subcription",
    subTitle: [
      {
        name: "Subscribe to our mailing list to receive latest updates and events",
      },
    ],
  },
  {
    title: "about",
    subTitle: [
      {
        name: "About Us",
      },
      {
        name: "Policy",
      },
      {
        name: "Terms and Conditions",
      },
    ],
  },
  {
    title: "support",
    subTitle: [
      {
        name: "Contact Us",
      },
      {
        name: "Help Center",
      },
    ],
  },
];

export const listVideo = {
  title: "Professional Development Videos",
  product: [
    {
      key: 1,
      name: "Grade 1: Video 1",
      series: "A",
      subject: "Math",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 50,
      imageUrl: IMAGES.product.product,
    },
    {
      key: 2,
      name: "Grade 2: Video 1",
      series: "A",
      subject: "Math",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 10,
      imageUrl: IMAGES.product.product,
    },
  ],
};

export const listBook = {
  title: "Textbooks",
  product: [
    {
      key: 1,
      name: "Text Book 1",
      author: "David Khalifa",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 150,
      imageUrl: IMAGES.product.product,
    },
    {
      key: 2,
      name: "Text Book 2",
      author: "David Khalifa",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 111,
      imageUrl: IMAGES.product.product,
    },
  ],
};
