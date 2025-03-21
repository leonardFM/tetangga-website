export default function ContactUs() {
    return (
      <div className="container mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          We'd love to hear from you! Reach out to us for any inquiries or support.
        </p>
  
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Your Name</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
  
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
  
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
  
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-2">Our Contact Details</h2>
          <p className="text-gray-700">📍 123 Street, Jakarta, Indonesia</p>
          <p className="text-gray-700">📧 Email: <a href="mailto:support@tetangga.com" className="text-blue-600 hover:underline">support@tetangga.com</a></p>
          <p className="text-gray-700">📞 Phone: +62 812 3456 7890</p>
        </div>
      </div>
    );
  }
  