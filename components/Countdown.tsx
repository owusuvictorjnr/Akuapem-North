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
    <div>
      {timeLeft ? `Time left until election: ${timeLeft}` : "Election Day!"}
    </div>
  );
}
