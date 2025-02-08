// packages

const ContactUs: React.FC = async () => {

  return (
    <section className="py-10 px-6">
      {/* Section Title */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>

      {/* Righthand side of the form */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center space-y-4 sm:space-y-0 md:space-x-[20px] lg:space-x-[90px] min-h-[80vh]">
        {/* Form */}
        <form className="shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4 w-full sm:w-auto">
          <p className="text-white font-bold mb-4">Enter Your Message</p>

          {/* Name Section */}
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Name</label>
            <input 
              className="appearance-none border rounded w-full sm:w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="name" 
              type="text"
            />
          </div>

          {/* Email Section */}
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Email</label>
            <input 
              className="appearance-none border rounded w-full sm:w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              type="email" 
            />
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Subject</label>
            <input 
              className="appearance-none border rounded w-full sm:w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>

          {/* Message Box */}
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Message</label>
            <textarea 
              className="appearance-none border rounded w-full sm:w-[400px] h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" 
              id="message" 
              placeholder="Your message"
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="flex items-center">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="button"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Image */}
        <img 
          src="/images/photos/mupy_glasses.png" 
          alt="Mupy image" 
          className="w-64 sm:w-80 rounded-lg shadow-md"
        />
      </div>



    </section>
  );
};

export default ContactUs;
