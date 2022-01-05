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