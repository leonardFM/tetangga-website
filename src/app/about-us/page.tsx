export default function AboutUs() {
    return (
      <div className="container mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Learn more about our mission, values, and what drives us forward.
        </p>
  
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            We are a passionate team dedicated to providing high-quality services and innovative solutions.
            Our mission is to empower individuals and businesses by leveraging cutting-edge technology.
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to revolutionize the way people interact with technology by offering seamless and 
            efficient solutions. We believe in innovation, integrity, and excellence.
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li><strong>Innovation:</strong> We embrace change and push boundaries.</li>
            <li><strong>Integrity:</strong> We build trust through transparency and honesty.</li>
            <li><strong>Excellence:</strong> We strive to exceed expectations in all we do.</li>
            <li><strong>Collaboration:</strong> We work together to create impactful solutions.</li>
          </ul>
        </div>
  
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <p className="text-gray-700">
            We are a diverse team of experts, committed to making a difference.
          </p>
          <a
            href="/team"
            className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    );
  }
  