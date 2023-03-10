import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faBook,
  faCircleCheck,
  faCircleInfo,
  faClock,
  faDropletSlash,
  faEnvelopeOpen,
  faMoneyBill,
  faPhone,
  faScrewdriverWrench,
  faStar,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";

import "./assets/tailwind.css";

library.add(
  faBars,
  faTimes,
  faBook,
  faDropletSlash,
  faClock,
  faCircleCheck,
  faStar,
  faPhone,
  faEnvelopeOpen,
  faMoneyBill,
  faScrewdriverWrench,
  faCircleInfo
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
