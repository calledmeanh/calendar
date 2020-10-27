import moment from "moment";
import { CONFIG } from "../constants";
export const DateUtils = {
  prev,
  next,
  today,
  getWeek,
  isToday,
};

function prev(currentDate: string): string {
  return moment(currentDate).subtract(1, "days").format(CONFIG.DEFAULT_DATE_FOTMAT);
}

function next(currentDate: string): string {
  return moment(currentDate).add(1, "days").format(CONFIG.DEFAULT_DATE_FOTMAT);
}
function today(): string {
  return moment().format(CONFIG.DEFAULT_DATE_FOTMAT);
}

type CustomWeek = {
  number: number;
  text: string;
  origin: Date;
};

function getWeek(): CustomWeek[] {
  const week: CustomWeek[] = [];

  let startOfWeek: moment.Moment = moment().startOf("isoWeek");
  let endOfWeek: moment.Moment = moment().endOf("isoWeek");

  while (startOfWeek <= endOfWeek) {
    const JSDate = startOfWeek.toDate();
    week.push({ number: JSDate.getDate(), text: CONFIG.WEEK[JSDate.getDay()], origin: JSDate });
    startOfWeek = startOfWeek.clone().add(1, "d");
  }
  return week;
}

function isToday(date: string): boolean {
  const today = moment().format(CONFIG.DEFAULT_DATE_FOTMAT);
  const anotherDay = moment(date).format(CONFIG.DEFAULT_DATE_FOTMAT);

  const isToday: boolean = today === anotherDay;
  return isToday;
}
