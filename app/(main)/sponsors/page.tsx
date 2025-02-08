const Sponsors: React.FC = async () => {

  return (
    <section>
      <section className="py-10 px-6">
        
        {/* Section Title */}
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold">Sponsors</h1>
        </div>

      </section>

      {/* Description */}
      <section className="bg-slate-600 py-6 px-6 mb-20">
        <h2 className="text-2xl text-white font-bold mb-4">Our Sponsors</h2>
        <p className="py-4">
          At MathSoc, we’re passionate about empowering the next generation of problem solvers, analysts, and innovators. Mathematics is at the core of countless industries, from finance and technology to engineering and data science, and we strive to connect our members with the opportunities that will help them thrive.
        </p>

        <p className="py-4">
          Our goals wouldn’t be possible without the support of our industry partners who help us provide endless opportunities for our members to explore their future pathways and unleash their true potential.
        </p>

        <p className="py-4">
          Interested in partnering with us? Get in touch at <b>sponsorships.unswmathsoc@gmail.com</b>
        </p>
      </section>


      {/* Sponsors */}
      <section className="py-6 px-6 mb-20">
        <h2 className="text-4xl text-center font-bold mb-20">Our Sponsors</h2>
        <div className="flex flex-col items-center space-y-8 mb-20">
          <a href="https://www.janestreet.com/" target="_blank">
            <img className="w-96" src="/images/logos/jane_street_logo.png" alt="jane street logo" />
          </a>
        </div>

        <div className="flex flex-row justify-center items-center space-x-8 mb-20">
          <a href="https://www.optiver.com/" target="_blank">
            <img className="w-96" src="/images/logos/optiver_logo.png" alt="optiver logo" />
          </a>

          <a href="https://www.imc.com/" target="_blank">
            <img className="w-96" src="/images/logos/imc_logo.png" alt="imc logo" />
          </a>
        </div>

        <div className="flex flex-row justify-center items-center space-x-8 mb-20">
          <a href="https://www.quantium.com/" target="_blank">
            <img className="w-96" src="/images/logos/quantium_logo.webp" alt="quantium logo" />
          </a>

          <a href="https://www.citadelsecurities.com/" target="_blank">
            <img className="w-96" src="/images/logos/citadel_securities_logo.webp" alt="citadel logo" />
          </a>
        </div>

        <div className="flex flex-row justify-center items-center space-x-8 mb-20">
          <a href="https://www.flowtraders.com/" target="_blank">
            <img className="w-96" src="/images/logos/flow_traders_logo.webp" alt="flow traders logo" />
          </a>
          
          <a href="https://www.auroraenergy.com.au/" target="_blank">
            <img className="w-96" src="/images/logos/aurora_logo.webp" alt="aurora logo" />
          </a>
        </div>
      </section>


    </section>
  );
};

export default Sponsors;
