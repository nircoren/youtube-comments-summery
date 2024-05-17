import ProccessList from "./ProccessList";

function Proccess() {
  return (
    <section
    id="proccess"
      className="relative z-10 overflow-hidden bg-white pb-16 
    pt-[60px] dark:bg-dark md:pb-[60px] md:pt-[60px] xl:pb-[100px] xl:pt-[100px] 2xl:pb-[100px] 2xl:pt-[100px]
    "
    >
      <div className="container flex">
        <div className="container">
            <img className="h-full" src="/proccess.jpg" alt="" />
        </div>
        <div className="container ">
          <ProccessList/>
        </div>
      </div>
    </section>
  );
}

export default Proccess;
