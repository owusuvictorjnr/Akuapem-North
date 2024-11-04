"use client";

import React, { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2024-12-07T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set an interval to calculate remaining time every second
    const intervalId = setInterval(() => {
      const currentTime = Date.now(); // Ensures this is only calculated client-side
      const difference = targetDate - currentTime;

      if (difference <= 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="text-center p-5 bg- text- rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Countdown to Election 2024</h2>
      <div className="text-3xl font-bold flex justify-center text-[#F44336] space-x-5">
        <div>
          <p>{timeLeft.days}</p>
          <p className="text-sm">Days</p>
        </div>
        <div>
          <p>{timeLeft.hours}</p>
          <p className="text-sm">Hours</p>
        </div>
        <div>
          <p>{timeLeft.minutes}</p>
          <p className="text-sm">Minutes</p>
        </div>
        <div>
          <p>{timeLeft.seconds}</p>
          <p className="text-sm">Seconds</p>
        </div>
      </div>
      <div className="mt-5 text-[#536DFE]">
        <p className="text-sm font- capitalize md:text-xl">
          The future of Ghana is in your hands. Every vote counts!
        </p>

        <p className="text-sm font- capitalize md:text-xl">
          Be the change you want to see. Vote wisely for the future of Ghana!
        </p>
      </div>
    </div>
  );
};

export default Countdown;

// "use client";

// import dayjs from "dayjs";
// import duration from "dayjs/plugin/duration";
// dayjs.extend(duration);
// import React, { useEffect, useState } from "react";

// export default function Countdown() {
//   const electionDate = dayjs("2023-02-23");
//   const [timeLeft, setTimeLeft] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = dayjs();
//       const diff = electionDate.diff(now, "second");
//       const duration = dayjs.duration(diff, "second");
//       setTimeLeft(
//         duration.format("D [days] H [hours] m [minutes] s [seconds]")
//       );
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [electionDate]);
//   return (
//     <div className="bg-red-400 space-y-5 pb-5">
//       <div className="uppercase text-center space-y-3 pt-10 text-white">
//         <h1 className="font-bold text-2xl tracking-wider">
//           the election countdown!
//         </h1>

// <p className="font-semibold capitalize text-xl">
//   The future of Ghana is in your hands. Every vote counts!
// </p>
// </div>
// <div className="space-y-5 text-center">
//   <h2 className="capitalize font-semibold text-center text-blue-500/60 text-xl">
//     {timeLeft ? `Time left until election: ${timeLeft}` : "Election Day!"}
//   </h2>

// {/* <p className="text-white font-semibold capitalize text-xl">
//   Be the change you want to see. Vote wisely for the future of Ghana!
// </p> */}
//       </div>
//     </div>
//   );
// }
