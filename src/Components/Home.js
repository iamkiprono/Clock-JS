// import React from "react";
// import { useState } from "react";

// const Home = () => {
//   const [today, setToday] = useState();

//   const update = () => {
//     const time = new Date().toLocaleTimeString();
//     setToday(time);
//   };
//   setInterval(update, 1000);

//   return (
//     <div>
//       <h1>{today}</h1>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { useState } from "react";

const Home = () => {
  const [sec, setSec] = useState();
  const [min, setMin] = useState();
  const [hour, setHour] = useState();

  const update = () => {
    const secs = new Date().getSeconds();

    if (secs < 10) {
      setSec(`0${secs}`);
    } else {
      setSec(secs);
    }

    const mins = new Date().getMinutes();
    if (mins < 10) {
      setMin(`0${mins}`);
    } else {
      
      setMin(mins);
    }
   
    const hours = new Date().getHours();
    setHour(hours);
  };
  setInterval(update, 1000);
  return (
    <div>
      <br />
      {hour}:{min}:{sec}
    </div>
  );
};

export default Home;
