import online from "./assets/icon-online.svg";
import budgeting from "./assets/icon-budgeting.svg";
import onboarding from "./assets/icon-onboarding.svg";
import api from "./assets/icon-api.svg";
import currency from "./assets/image-currency.jpg";
import restaurant from "./assets/image-restaurant.jpg";
import plane from "./assets/image-plane.jpg";
import confetti from "./assets/image-confetti.jpg";

export const features = [
  {
    id: 1,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    icon: online,
  },
  {
    id: 2,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    icon: budgeting,
  },
  {
    id: 3,
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    icon: onboarding,
  },
  {
    id: 4,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    icon: api,
  },
];

export const articles = [
  {
    id: 1,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single currency with fees?",
    image: currency,
  },
  {
    id: 2,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you can treat yourself without worrying about overspending.",
    image: restaurant,
  },
  {
    id: 3,
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you're abroad. We'll even show you how to get the most out of your Easybank card while traveling.",
    image: plane,
  },
  {
    id: 4,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It’s easy to request an invite through the site and get early access to new features.",
    image: confetti,
  },
];
