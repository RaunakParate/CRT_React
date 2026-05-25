import React from "react";

const API_KEY = "19331efab369b35a2de5fa416394d815";

function useWeather() {
    const [weather, setWeather] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const fetchWeather = async (city) => {
        if (!city) return;

        setLoading(true);
        setError("");
        setWeather(null);

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

            const data = await res.json();

            if (data.cod !== 200) {
                setError("City not found");
                setWeather(null);
            } else {
                setWeather(data);
            }
        } catch {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return { weather, loading, error, fetchWeather };
}

export default useWeather;