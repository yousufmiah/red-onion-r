import { useEffect, useState } from "react";

const useData = () => {
  const [breakfasts, setBreakfasts] = useState([]);
  const [lunch, setLaunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  useEffect(() => {
    fetch("Breakfast.json")
      .then((res) => res.json())
      .then((data) => setBreakfasts(data));
  }, []);

  useEffect(() => {
    fetch("Lunch.json")
      .then((res) => res.json())
      .then((data) => setLaunch(data));
  }, []);

  useEffect(() => {
    fetch("Dinner.json")
      .then((res) => res.json())
      .then((data) => setDinner(data));
  }, []);
  return [breakfasts, lunch, dinner];
};

export default useData;
