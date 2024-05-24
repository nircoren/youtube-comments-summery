import ProcessList from "./ProcessList";

function Process() {
  return (
    <section
      id="process"
      className="anchor relative z-10 overflow-hidden bg-white pb-16 
    pt-[60px] dark:bg-dark md:pb-[60px] md:pt-[60px] xl:pb-[100px] xl:pt-[100px] 2xl:pb-[100px] 2xl:pt-[100px]
    "
    >
      <div className="container flex flex-col md:flex-row">
        <div className="container pt-8">
          <iframe
            style={{ minHeight: "300px", width:"100%" }}
            src="https://www.youtube.com/embed/IrFFOBziSQo"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          {/* <video muted preload="none" autoPlay>
            <source src="/https://youtu.be/IrFFOBziSQo" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video> */}
        </div>
        <div className="container ">
          <ProcessList />
        </div>
      </div>
    </section>
  );
}

export default Process;
