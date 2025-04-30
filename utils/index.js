import pomodoroImg from "../assets/images/pomodoro.png";
import short from "../assets/images/short.png";
import long from "../assets/images/long.png";

export const pomodoro = [
  {
    id: 0,
    time: 25 * 60,
    image: pomodoroImg,
    display: "Foco",
  },
  {
    id: 1,
    time: 5 * 60,
    image: short,
    display: "Pausa curta",
  },
  {
    id: 2,
    time: 15 * 60,
    image: long,
    display: "Pausa longa",
  },
];
