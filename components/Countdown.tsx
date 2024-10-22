"use client";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);
import React, { useEffect, useState } from "react";

export default function Countdown() {
  const electionDate = dayjs("2023-02-23");
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const diff = electionDate.diff(now, "second");
      const duration = dayjs.duration(diff, "second");
      setTimeLeft(
        duration.format("D [days] H [hours] m [minutes] s [seconds]")
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [electionDate]);
  return (
    <div className="bg-red-400 space-y-5 pb-5">
      <div className="uppercase text-center space-y-3 pt-10 text-white">
        <h1 className="font-bold text-2xl tracking-wider">
          the election countdown!
        </h1>

        <p className="font-semibold capitalize text-xl">
          The future of Ghana is in your hands. Every vote counts!
        </p>
      </div>
      <div className="space-y-5 text-center">
        <h2 className="capitalize font-semibold text-center text-blue-500/60 text-xl">
          {timeLeft ? `Time left until election: ${timeLeft}` : "Election Day!"}
        </h2>

        <p className="text-white font-semibold capitalize text-xl">
          Be the change you want to see. Vote wisely for the future of Ghana!
        </p>
      </div>
    </div>
  );
}
