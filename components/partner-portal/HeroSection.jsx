const HeroSection = () => {
  return (
    <div className="hero-section bg-aiesec-blue min-h-[80vh] flex items-center justify-center text-center relative p-5 mb-0">
      <div className="content text-white mb-5">
        <div className="container">
          <h1 className="text-6xl font-bold p-5">Partner Portal</h1>

          <svg id="stroke" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
            <defs>
              <path id="line" d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
                    fill="none" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
            </defs>
          </svg>
          <div className="underline-wrapper">
            <svg className="button-stroke" viewBox="0 0 154 13">
              <use href="#line"></use>
            </svg>
            <svg className="button-stroke" viewBox="0 0 154 13">
              <use href="#line"></use>
            </svg>
          </div>
        </div>
        <h4 className="text-3xl p-2 font-thin mt-16">Explore opportunities from our partners</h4>
      </div>
      <a href="#main" className="p-8"><div className="scroll-down"></div></a>
    </div>

  )
}

export default HeroSection;