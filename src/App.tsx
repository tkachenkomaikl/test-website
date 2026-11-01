import { useEffect, useState } from "react";

function App() {
  const pfps: string[] = [
    '/assets/osage circle.png',
    '/assets/nero circle.png',
    '/assets/mizuki circle.png'
  ];

  const [message, setMessage] = useState("");

  useEffect(() => {
    // Make this inner function async
    async function fetchData() {
      const res = await fetch("/api/test");
      const data = await res.json() as { message: string };
      setMessage(data.message);
    }

    fetchData();
  }, []);

  console.log(message);

  return (
    <>
      <div className="select-none pointer-events-none w-screen h-60 sm:h-80 2xl:h-120 overflow-hidden">
        <img src="/assets/dielgi.png" className="w-full h-full object-cover object-[center_25%] [mask-image:linear-gradient(to_top,transparent_0%,black_10%,black_80%,transparent_100%),linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] [mask-composite:source-in] grayscale-40" />
      </div>
      <div className="select-none pointer-events-none w-screen h-30 flex justify-center items-center relative">
        {pfps.map((src, index) => {
          return (
            <img key={index} src={src} className={`w-30 h-30 absolute bottom-15 animate-pfp-cycle-mobile md:animate-pfp-cycle-pc`} style={{ animationDelay: `${index * 2}s` }} />
          )
        })}
      </div>
      <div className="w-screen flex justify-center items-center relative">
        <div className="select-none absolute left-162.3 bottom-5"><h1 className="font-L tracking-wide text-center cursor-default text-3xl duration-250 hover:text-4xl hover:text-fuchsia-700 dark:hover:text-fuchsia-400 italic">Demi</h1></div>
        <div className="absolute left-162.3"><h1 className="text-gray-800 dark:text-gray-500 italic cursor-default">Hi!</h1></div>
      </div>
    </>
  )
}

export default App
