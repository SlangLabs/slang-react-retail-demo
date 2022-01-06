import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// The below function is taken from https://stackoverflow.com/a/61602724
export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

// The below function is taken from https://stackoverflow.com/a/37616104
export const objectFilter = (obj, predicate) =>
    Object.keys(obj)
        .filter(key => predicate(obj[key]))
        .reduce((res, key) => (res[key] = obj[key], res), {});

export const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
}

export const formatDate = (date) => {
    let hour = date.getHours()

    const ampm = hour > 12 ? 'PM' : 'AM'

    if (hour > 12) {
        hour = hour - 12;
    } else if (hour === 0) {
        hour = 12;
    }

    let minutes = date.getMinutes();

    if (minutes <= 9) {
        minutes = `0${minutes}`
    }

    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${hour}:${minutes} ${ampm}`
}