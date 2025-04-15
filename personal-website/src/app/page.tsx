import Image from "next/image";


function Introduction() {
   return (
    <div className="flex flex-col items-center gap-6 p-7 md:gap-8 md:flex-row w-fill">
      <div className="flex">
        <Image className="shadox-xl rounded-md gap-6" src="/cat.png" width={500} height={900} alt="This is not my cat :("/>
      </div>
      <div className="flex flex-col rounded-md gap-7 p-7 w-screen h-100 items-center bg-red-400 ">
        <div>
          <span className="text-6xl">WELCOME</span>
          <span className="text-3xl"> I'm</span>
        </div>
        <span className="text-6xl">IAN KRISTONA</span>
        <div>
          <span className="text-3xl">The wanna be</span>
          <span className="text-6xl"> INTERN</span>
        </div>
      </div>
    </div>
   );
}

export default function Home() {
  return (
    <Introduction />
  );
}
