import { site } from "../data/site"

const TIME_ZONE = "America/Belem"
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

function toMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number)
  return hours * 60 + minutes
}

/** Current weekday (0 = Sunday) and minutes since midnight in the pharmacy's time zone. */
export function localNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date)

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? ""

  const hour = Number(get("hour")) % 24

  return {
    weekday: WEEKDAYS.indexOf(get("weekday")),
    minutes: hour * 60 + Number(get("minute")),
  }
}

export type OpenState = {
  isOpen: boolean
  /** The schedule entry that applies today. */
  today: (typeof site.hours)[number]
}

export function getOpenState(date = new Date()): OpenState {
  const { weekday, minutes } = localNow(date)
  const today = weekday === 0 ? site.hours[1] : site.hours[0]

  return {
    isOpen: minutes >= toMinutes(today.open) && minutes < toMinutes(today.close),
    today,
  }
}
