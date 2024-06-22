import ProcessList from "./ProcessList";

function Process() {
  return (
    <section
      id="process"
      className="wawa anchor relative z-10 overflow-hidden pb-16 
    pt-[60px] md:pb-[60px] md:pt-[60px] xl:pb-[100px] xl:pt-[100px] 2xl:pb-[100px] 2xl:pt-[100px]
    "
    >
      <div className="container flex flex-col md:flex-row">
        <div className="container pt-8">
          <iframe
            style={{ minHeight: "300px", width:"100%" }}
            src="https://www.youtube.com/embed/4qesaIz8KMs?si=VIpKzSq4aDnVZvFFe&mute=1"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="container ">
          <ProcessList />
        </div>
      </div>
    </section>
  );
}

export default Process;
