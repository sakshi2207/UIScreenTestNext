import Image from "next/image";

export default function Home() {
  return (
  <>
  <nav className="flex justify-evenly align-baseline">
    <img src="./icon.svg" alt="icon"/>
    <ul className="flex justify-center gap-3">
      <li><a>Solution</a></li>
      <li><a>Solution</a></li>
      <li><a>Solution</a></li>
    </ul>
    <button className="px-5 py-2 ">Request Demo</button>
  </nav>
  <main>
   <section className="flex justify-between items-center py-10 xs:flex-col">
   <div className="flex-1 mx-10">
    <h1 className="text-3xl font-bold text-center">Avaya Call Reporting Reinvented</h1>
    <p className="text-base my-5">Step into the future of call center analytics with Comstice Avaya Call Reporting solution. Say goodbye to the need for an Avaya AES server and extra licenses for every agent, and say hello to a world of insightful analytics, cradle-to-grave reports, and automated agent and team reports by email.</p>
    <button className="my-5 px-4 py-2 bg-blue-500 text-white rounded">Request Demo</button>
   </div>
    <img src="./hero.svg" alt="hero" className="flex-1 justify-end width-30 lg:order-1"/>
   </section>
   <section className="grid sm:grid-cols-3 grid-cols-1 my-10 px-10 gap-4 py-10 bg-gray-100">
   <div className="px-10 align-center">
   <img src="./download.svg" alt="downlod" className=" w-10 h-10 circle rounded-full"/>
   <h3 className="text-lg font-bold ">Lower Cost of Ownership</h3>
    <p className="text-base my-5 ">No Avaya AES TSAPI license costs with CMS-Based Reporting and real-time feed.</p>
   </div>
   <div className="px-10 ">
   <img src="./download.svg" alt="downlod" className="w-10 h-10 circle rounded-full row-span-2"/>
    <h3>Lower Cost of Ownership</h3>
    <p>No Avaya AES TSAPI license costs with CMS-Based Reporting and real-time feed.</p>
   </div>
   <div className="px-10">
   <img src="./download.svg" alt="downlod" className="w-10 h-10 circle rounded-full"/>
    <h3>Lower Cost of Ownership</h3>
    <p>No Avaya AES TSAPI license costs with CMS-Based Reporting and real-time feed.</p>
   </div>
   </section>
  </main>
  </>
  );
}
