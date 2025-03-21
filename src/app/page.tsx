import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white text-teal-800 font-sans flex flex-col items-center justify-center text-center py-20 px-6">
      <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Tetangga <span className="text-teal-600">Apps</span>
          </h1>
            <p className="mt-4 text-lg text-gray-700">
              Tetangga adalah aplikasi warga yang dirancang untuk memberikan informasi terbaru serta kemudahan dalam mengakses berita, komunitas, dan layanan penting dalam satu platform.
            </p>

          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Download on Google Play">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32"/>
            </a>
            <a href="#" aria-label="Download on the App Store">
            <img src="https://ekoran.id/assets/img/app-store-badge.svg" alt="App Store" className="w-32"/>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
            {/* Dekorasi Lingkaran */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 opacity-30 blur-1xl rounded-full"></div>
            <div className="absolute top-20 left-10 w-24 h-24 bg-blue-400 opacity-20 blur-1xl rounded-full"></div>
            <div className="absolute bottom-10 right-5 w-32 h-32 bg-blue-300 opacity-25 blur-1xl rounded-full"></div>
            <div className="absolute -bottom-16 -left-16 w-20 h-20 bg-blue-500 opacity-40 blur-xl rounded-full"></div>

            {/* Gambar HP */}
            <Image
              src="/image/hp.png"
              width={300}
              height={600}
              alt="Tetangga App"
              className="relative z-10 drop-shadow-lg"
            />
          </div>

      </section>

      {/* Fitur Utama */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-extrabold text-teal-700 tracking-wide">Fitur Utama</h2>
        <p className="text-lg text-gray-600 mt-3">Jelajahi keunggulan aplikasi kami yang dirancang untuk kenyamanan Anda.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { 
              title: "Mudah Digunakan", 
              desc: "Antarmuka intuitif yang ramah pengguna.", 
              icon: "🖥️" 
            },
            { 
              title: "Fitur Lengkap", 
              desc: "Berbagai fitur menarik yang mendukung kebutuhan Anda.", 
              icon: "⚙️" 
            },
            { 
              title: "Gratis", 
              desc: "Gunakan aplikasi tanpa biaya tambahan.", 
              icon: "💰" 
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md transform hover:-translate-y-3 transition-all duration-300 border border-gray-200"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-teal-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Call to Action */}
      <section
        id="download"
        className="w-full py-20 bg-gradient-to-r from-teal-400 to-teal-600 text-white text-center relative overflow-hidden"
      >
        {/* Dekorasi Lingkaran */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500 opacity-30 rounded-full animate-ping"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-teal-300 opacity-20 rounded-full animate-bounce"></div>

        {/* Konten */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold tracking-wide animate-fade-in">
            Unduh Sekarang
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-lg mx-auto animate-slide-up">
            Dapatkan aplikasi ini dan nikmati fiturnya sekarang juga. Tersedia untuk Android dan iOS.
          </p>

          {/* Tombol Download */}
          <div className="mt-6 flex justify-center gap-6 animate-slide-up">
            <a
              href="#"
              className="px-6 py-3 bg-white text-teal-700 font-medium rounded-full shadow-lg flex items-center space-x-2 hover:bg-teal-100 transition transform hover:scale-105"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-36"/>
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-white text-teal-700 font-medium rounded-full shadow-lg flex items-center space-x-2 hover:bg-teal-100 transition transform hover:scale-105"
            >
              <img src="https://ekoran.id/assets/img/app-store-badge.svg" alt="App Store" className="w-36"/>
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full bg-gray-900 text-white py-12 mt-8 text-center">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3">
              {[
                { text: "Privacy Policy", link: "/privacy-policy" },
                { text: "Contact Us", link: "/contact-us" },
                { text: "About Us", link: "/about-us" },
                { text: "Account Deletion", link: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link} 
                    className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition duration-300"
                  >
                    <span className="text-teal-400">›</span> <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 flex items-start space-x-2">
              <span className="text-teal-400">📍</span> 
              <span>Jl. Tanah Abang III No 23A, Jakarta Pusat, DKI Jakarta 10160, Indonesia</span>
            </p>
            <p className="mt-3 text-gray-400 flex items-center space-x-2">
              <span className="text-teal-400">📞</span> <span>021 – 2128 2598</span>
            </p>
            <p className="mt-3 text-gray-400 flex items-center space-x-2">
              <span className="text-teal-400">✉️</span> <span>contact@ekoran.id</span>
            </p>
          </div>

        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Tetangga Apps. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
