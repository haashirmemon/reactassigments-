import { useContext, useEffect, useState } from "react";
import { Themecontext } from '../context/themecontext';
function About() {
  
const {theme,settheme}= useContext(Themecontext)
  const [currentWeather, setCurrentWeather] = useState({
    weather: [],
  });
  const [city, setCity] = useState("karachi");

  useEffect(() => {
    console.log("Use effect ka function call hogya");
    getWeather();
  }, [city]);

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f136667cfcdb418bf8b7a4c5a542f00`
    )
      .then((res) => res.json())
      .then((res) => {
        setCurrentWeather(res);
      });
  };

  const temp = Math.round(currentWeather?.main?.temp - 273.15);
  const feelsLike = Math.round(currentWeather?.main?.feels_like - 273.15);
  const weatherCondtion = currentWeather?.weather ?  currentWeather?.weather[0]?.main : "";
  return (
    <div className={`${theme === 'light' ? "bg-white text-black" : "bg-zinc-400 text-white"}`}>
    <div>
      <h1 className="text text-4xl my-6 font-bold">Weather App</h1>
      <select
        name="city"
        onChange={(e) => setCity(e.target.value)}
        className="border px-3 py-4 bg-slate-200"
      >
        <option value="karachi">Karachi</option>
  <option value="lahore">Lahore</option>
  <option value="islamabad">Islamabad</option>
  <option value="rawalpindi">Rawalpindi</option>
  <option value="peshawar">Peshawar</option>
  <option value="quetta">Quetta</option>
  <option value="multan">Multan</option>
  <option value="faisalabad">Faisalabad</option>
  <option value="sialkot">Sialkot</option>
  <option value="hyderabad">Hyderabad</option>
  <option value="sukkur">Sukkur</option>
  <option value="bahawalpur">Bahawalpur</option>
  <option value="sargodha">Sargodha</option>
  <option value="gujranwala">Gujranwala</option>
  <option value="abbottabad">Abbottabad</option>
  <option value="muzzaffarabad">Muzaffarabad</option>
  <option value="gilgit">Gilgit</option>
      </select>

      <div className="shadow p-6 my-8 text-3xl bg-gray-300 font-bold">
        <div className="flex justify-between ">
          <h1>Temperature</h1>
          <h1>{temp} C</h1>
        </div>
        <div className="flex justify-between">
          <h1>Feels Like</h1>
          <h1>{feelsLike} C</h1>
        </div>
        <div className="flex justify-between">
          <h1>Weather</h1>
          <h1>{weatherCondtion}</h1>
        </div>
      </div>
    </div></div>
  );
}

export default About;