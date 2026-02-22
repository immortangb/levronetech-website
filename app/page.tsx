import { 
  Wrench, 
  Laptop, 
  Camera, 
  HeadphonesIcon, 
  CheckCircle, 
  Clock, 
  Shield, 
  Award, 
  Phone, 
  Mail, 
  MapPin 
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Levrone <span className="text-primary-600">Technologies</span>
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-primary-600 transition">Services</Link>
              <Link href="#products" className="text-gray-700 hover:text-primary-600 transition">Products</Link>
              <Link href="#about" className="text-gray-700 hover:text-primary-600 transition">About</Link>
              <Link href="#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</Link>
            </div>
            <Link 
              href="#contact" 
              className="hidden md:inline-flex bg-primary-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4">
                Professional IT Services in Bloemfontein
              </h2>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Expert Tech Solutions For Your <span className="text-gradient">Digital World</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Professional laptop repairs, sales, and IT support services in Bloemfontein. Fast, reliable, and affordable technology solutions for homes and businesses.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                  <Wrench className="w-6 h-6 text-primary-600 mb-2" />
                  <p className="text-sm text-gray-600">Hardware Repairs</p>
                  <p className="text-xl font-bold text-gray-900">From R750</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                  <Camera className="w-6 h-6 text-teal-600 mb-2" />
                  <p className="text-sm text-gray-600">CCTV Installation</p>
                  <p className="text-xl font-bold text-gray-900">From R2500</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                  <Clock className="w-6 h-6 text-primary-600 mb-2" />
                  <p className="text-sm text-gray-600">Business Hours</p>
                  <p className="text-lg font-bold text-gray-900">Mon-Fri 08:00-16:00</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-600 to-teal-500 text-white p-4 rounded-xl flex items-center gap-3">
                <Award className="w-8 h-8 flex-shrink-0" />
                <div>
                  <p className="font-bold">10% Student Discount</p>
                  <p className="text-sm opacity-90">UFS Bloemfontein students save on all services with valid student card!</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-teal-400 rounded-3xl transform rotate-3 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&auto=format&fit=crop&q=80" 
                alt="Tech Repair Professional" 
                className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Our Services</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Comprehensive Tech Solutions</h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From repairs to installations, we handle all your technology needs with expertise and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80" 
                  alt="Laptop Repair" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Wrench className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Laptop & Desktop Repairs</h4>
                </div>
                <p className="text-gray-600">
                  Screen replacement, battery issues, keyboard repairs, motherboard fixes, and hardware upgrades.
                </p>
              </div>
            </div>

            <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80" 
                  alt="Laptop Sales" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Laptop className="w-6 h-6 text-teal-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Laptop Sales</h4>
                </div>
                <p className="text-gray-600">
                  New and refurbished laptops from top brands. Apple, HP, Dell, Lenovo, Asus, and more.
                </p>
              </div>
            </div>

            <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&auto=format&fit=crop&q=80" 
                  alt="CCTV Installation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Camera className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">CCTV Installation</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Professional security camera installation for homes and businesses.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex justify-between border-b pb-2">
                    <span>Home CCTV (2 cameras)</span>
                    <span className="font-semibold text-primary-600">From R2,500</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Home CCTV (4 cameras)</span>
                    <span className="font-semibold text-primary-600">From R4,500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Business CCTV (8 cameras)</span>
                    <span className="font-semibold text-primary-600">From R8,500</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80" 
                  alt="IT Support" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <HeadphonesIcon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">IT Support & Advice</h4>
                </div>
                <p className="text-gray-600">
                  24/7 technical support, system optimization, virus removal, and expert IT consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Our Products</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Laptops & Computers</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Browse our selection of quality laptops from top brands. All devices come with warranty and support.
              </p>
              <Link 
                href="#contact" 
                className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                View All Products
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80" 
                alt="Laptop Products" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
                alt="About Us" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">About Us</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Technology Partner in Bloemfontein
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Levrone Technologies is your local IT expert, providing comprehensive technology solutions for individuals and businesses.
              </p>
              <p className="text-gray-600 mb-8">
                From laptop repairs to CCTV installations, our skilled technicians handle it all. We use quality parts and the latest techniques.
              </p>
              <ul className="space-y-3">
                {[
                  "Certified technicians with years of experience",
                  "Quality parts and components",
                  "Fast turnaround times",
                  "Affordable pricing",
                  "Warranty on all repairs"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary-300 uppercase tracking-wide mb-2">Why Choose Us</h2>
            <h3 className="text-3xl lg:text-4xl font-bold">The Levrone Technologies Difference</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: Award, title: "Expert Technicians", desc: "Certified professionals with years of hands-on experience." },
              { icon: Shield, title: "Quality Parts", desc: "Only genuine and high-quality replacement parts." },
              { icon: Clock, title: "Fast Service", desc: "Most repairs completed within 24-48 hours." },
              { icon: CheckCircle, title: "Affordable Pricing", desc: "Competitive rates without compromising quality." },
              { icon: Shield, title: "Warranty Protection", desc: "All work comes with warranty. Satisfaction guaranteed." }
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                <feature.icon className="w-10 h-10 mx-auto mb-4 text-teal-400" />
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Testimonials</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">What Our Customers Say</h3>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <div className="text-6xl text-primary-200 absolute top-4 left-4">&ldquo;</div>
            <p className="text-lg text-gray-700 mb-6 relative z-10 italic">
              Levrone Technologies saved my business! My laptop crashed with all my important files, and they recovered everything within 24 hours. Professional, fast, and affordable service.
            </p>
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80" 
                alt="Sarah M" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-gray-900">Sarah M.</p>
                <p className="text-sm text-gray-600">Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Solve Your Tech Problems?</h3>
          <p className="text-lg mb-8 opacity-90">Get in touch today for a free quote. Fast, reliable service guaranteed.</p>
          <Link 
            href="#contact" 
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Contact Us</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                Have a question or need a quote? Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">UFS, Bloemfontein, 9301</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">brian@levronetech.co.za</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">Mon-Fri: 08:00-16:00</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-500 to-primary-600 text-white p-6 rounded-xl mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6" />
                  <h4 className="font-bold text-lg">10% Student Discount!</h4>
                </div>
                <p className="text-sm opacity-90">
                  UFS Bloemfontein students save on all services and products. Just show your valid student card!
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-4">Quick Pricing</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span>Basic Repairs</span><span className="font-semibold text-primary-600">From R350</span></li>
                  <li className="flex justify-between"><span>Hardware Repairs</span><span className="font-semibold text-primary-600">From R750</span></li>
                  <li className="flex justify-between"><span>CCTV Installation</span><span className="font-semibold text-primary-600">From R2500</span></li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition">
                    <option>Select a service...</option>
                    <option>Laptop/Desktop Repair</option>
                    <option>Laptop Sales</option>
                    <option>CCTV Installation</option>
                    <option>IT Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="Describe your issue or requirements..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold hover:bg-primary-700 transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Levrone Technologies</h4>
              <p className="text-sm">Professional IT services in Bloemfontein. Your trusted technology partner.</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="#services" className="hover:text-white transition">Repairs</Link></li>
                <li><Link href="#services" className="hover:text-white transition">Sales</Link></li>
                <li><Link href="#services" className="hover:text-white transition">CCTV</Link></li>
                <li><Link href="#services" className="hover:text-white transition">IT Support</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="#about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-sm">
                <li>UFS, Bloemfontein</li>
                <li>brian@levronetech.co.za</li>
                <li>Mon-Fri: 08:00-16:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Levrone Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
