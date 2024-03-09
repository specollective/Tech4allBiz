const Hero = () => {
  return (
    <section className="flex justify-between flex-col md:flex-row w-full py-16">
      <div className="basis-1/3 flex flex-col py-8">
        <h1 className="text-[42px] font-bold mb-4">Tech4allBiz</h1>
        <p className="mb-8">
          Your description here. Keep it brief and informative to maintain the
          attention of your visitors.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2 text-black bg-[#F0C808] rounded hover:bg-[#C9A900] transition-colors">
            View Lessons
          </button>
          <button className="px-6 py-2 text-black border border-[#0E4873] rounded hover:bg-[#0E4873] hover:text-white transition-colors">
            Free Online Resources
          </button>
        </div>
      </div>
      <div className="border basis-1/2 flex">
        <iframe
          src="https://www.youtube.com/embed/lE6RYpe9IT0?si=73rcqCe79hdufTfT"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-auto aspect-video"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
