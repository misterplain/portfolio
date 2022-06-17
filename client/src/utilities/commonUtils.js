import Header from "../components/Header/Header";
import Component1 from "../components/Component1/Component1";
import Component2 from "../components/Component2/Component2";
import Component3 from "../components/Component3/Component3";
import Component4 from "../components/Component4/Component4";

export const TOTAL_SCREENS = [
  {
    screen_name: "Header",
    component: Header,
  },
  {
    screen_name: "Component1",
    component: Component1,
  },
  {
    screen_name: "Component2",
    component: Component2,
  },
  {
    screen_name: "Component3",
    component: Component3,
  },
  {
    screen_name: "Component4",
    component: Component4,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
