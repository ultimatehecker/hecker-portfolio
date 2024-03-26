import { useLayoutEffect, useRef, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
    const favicon = useRef(document.querySelector("link[rel='icon']"));
    const logoRef = useRef(document.querySelector("#logo"));

    const handleClick = () => {
        setTheme(theme == 'light' ? 'dark' : 'light');
    }

    useLayoutEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add('dark');
            favicon.current?.setAttribute('href', `/logo-dark.svg`);
            logoRef.current?.setAttribute('src', `/logo-dark.svg`);
        } else {
            document.documentElement.classList.remove('dark');
            favicon.current?.setAttribute('href', `/logo-light.svg`);
            logoRef.current?.setAttribute('src', `/logo-light.svg`);
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button aria-label="Toggle Theme" onClick={handleClick} className="rounded-full bg-jet-500 p-3 text-2xl text-pearl-bush-500 dark:bg-pearl-bush-500 dark:text-jet-500">
            {theme === 'light' ? <BsFillMoonStarsFill aria-label="moon icon" /> : <BsFillSunFill aria-label="sun icon" />}
        </button>
    )
}