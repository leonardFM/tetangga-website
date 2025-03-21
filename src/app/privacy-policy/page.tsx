export default function PrivacyPolicy() {
    return (
      <div className="container mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Last updated: March 21, 2025
        </p>
  
        <div className="max-w-3xl mx-auto space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to <strong>Tetangga</strong>. Your privacy is important to us, and this
              Privacy Policy explains how we collect, use, and protect your
              personal information when using our platform.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
            <p className="text-gray-700">
              We collect different types of information, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>Personal Information (name, email, phone number, etc.)</li>
              <li>Usage Data (IP address, browser type, device info)</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
            <p className="text-gray-700">
              Your data is used to improve our services, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>Providing and maintaining our services</li>
              <li>Personalizing user experience</li>
              <li>Sending updates and promotional messages (with your consent)</li>
              <li>Improving security and preventing fraud</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Data Protection & Security</h2>
            <p className="text-gray-700">
              We implement security measures to protect your personal data from unauthorized access,
              alteration, disclosure, or destruction. However, no method is 100% secure.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Third-Party Services</h2>
            <p className="text-gray-700">
              We may use third-party services (such as analytics and payment providers) that collect
              and process data on our behalf.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. We will notify you of significant
              changes via email or an in-app notification.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:support@tetangga.com" className="text-blue-600 hover:underline">
                support@tetangga.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    );
  }
  