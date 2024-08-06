"use client"

import { useState, useEffect } from 'react';

export default function Countdown({ to }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(to) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className='text-2xl font-bold' key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className='w-[400px] h-[50px]'>
      {timerComponents.length && <span className='block text-yellow-500'>Termina en:</span>}
      {timerComponents.length ? timerComponents : <span className='text-2xl font-bold text-yellow-500'>Se termino!</span>}
    </div>
  );
};
