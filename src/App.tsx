import { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp, 
  Monitor, Laptop, Cpu, Shield, Wrench, CheckCircle, Star, 
  ArrowRight, GraduationCap, Camera, Headphones, HardDrive, 
  Battery, Keyboard, Droplets, Zap, Eye, Search, ShoppingCart,
  Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';
import { Toaster, toast } from 'sonner';

// Types
interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  specs: string;
  image: string;
  category: string;
  badge?: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  price?: string;
  features: string[];
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

// Product Data
const products: Product[] = [
  { id: 1, name: 'MacBook Air M2', brand: 'Apple', price: 18999, originalPrice: 21999, specs: 'M2 Chip, 8GB RAM, 256GB SSD, 13.6" Retina', image: '/images/laptop-apple.jpg', category: 'Premium', badge: 'Hot Deal' },
  { id: 2, name: 'HP Pavilion 15', brand: 'HP', price: 8999, specs: 'Intel i5, 8GB RAM, 512GB SSD, 15.6" FHD', image: '/images/laptop-hp.jpg', category: 'Business' },
  { id: 3, name: 'Dell XPS 13', brand: 'Dell', price: 15999, originalPrice: 17999, specs: 'Intel i7, 16GB RAM, 512GB SSD, 13.4" FHD+', image: '/images/laptop-dell.jpg', category: 'Premium', badge: 'Sale' },
  { id: 4, name: 'Lenovo ThinkPad E14', brand: 'Lenovo', price: 7499, specs: 'AMD Ryzen 5, 8GB RAM, 256GB SSD, 14" FHD', image: '/images/laptop-lenovo.jpg', category: 'Business' },
  { id: 5, name: 'Asus VivoBook 15', brand: 'Asus', price: 6499, specs: 'Intel i3, 4GB RAM, 256GB SSD, 15.6" FHD', image: '/images/laptop-asus.jpg', category: 'Budget' },
  { id: 6, name: 'Acer Aspire 5', brand: 'Acer', price: 5999, specs: 'Intel i3, 4GB RAM, 128GB SSD, 15.6" HD', image: '/images/laptop-acer.jpg', category: 'Budget', badge: 'Best Value' },
  { id: 7, name: 'MSI GF63 Thin', brand: 'MSI', price: 12999, specs: 'Intel i5, 8GB RAM, 512GB SSD, GTX 1650', image: '/images/laptop-msi.jpg', category: 'Gaming' },
  { id: 8, name: 'MacBook Pro 14', brand: 'Apple', price: 28999, specs: 'M3 Pro, 18GB RAM, 512GB SSD, 14.2" XDR', image: '/images/laptop-apple-pro.jpg', category: 'Premium' },
];

// Services Data
const services: Service[] = [
  {
    id: 1,
    title: 'Laptop Repairs',
    description: 'Expert repair services for all laptop brands and models. From screen replacements to motherboard repairs.',
    icon: <Laptop className="w-8 h-8" />,
    image: '/images/service-laptop-repair.jpg',
    price: 'From R350',
    features: [
      'Screen Replacement',
      'Battery Replacement',
      'Keyboard Repair',
      'Motherboard Repair',
      'Charging Port Fix',
      'Water Damage Repair',
      'Software Installation',
      'Virus Removal'
    ]
  },
  {
    id: 2,
    title: 'Desktop Repairs',
    description: 'Complete desktop computer repair and maintenance services for home and office.',
    icon: <Monitor className="w-8 h-8" />,
    image: '/images/service-desktop-repair.jpg',
    price: 'From R350',
    features: [
      'Hardware Diagnostics',
      'Power Supply Repair',
      'Graphics Card Issues',
      'RAM Upgrades',
      'Storage Solutions',
      'OS Installation',
      'Driver Updates',
      'Performance Optimization'
    ]
  },
  {
    id: 3,
    title: 'Hardware Services',
    description: 'Professional hardware repair, upgrades, and component replacement services.',
    icon: <Cpu className="w-8 h-8" />,
    image: '/images/service-hardware.jpg',
    price: 'From R750',
    features: [
      'Component Testing',
      'Hard Drive Recovery',
      'SSD Upgrades',
      'Cooling Solutions',
      'Thermal Paste Application',
      'Cable Management',
      'Custom Builds',
      'Preventive Maintenance'
    ]
  },
  {
    id: 4,
    title: 'CCTV Installation',
    description: 'Professional security camera installation and monitoring solutions for homes and businesses.',
    icon: <Camera className="w-8 h-8" />,
    image: '/images/service-cctv.jpg',
    price: 'From R2,500',
    features: [
      'HD Camera Installation',
      'Remote Monitoring Setup',
      'Motion Detection',
      'Night Vision Systems',
      'Cloud Storage',
      'Mobile App Access',
      'Maintenance Contracts',
      'System Upgrades'
    ]
  },
  {
    id: 5,
    title: 'IT Support',
    description: '24/7 IT support services for all your technical needs and emergencies.',
    icon: <Headphones className="w-8 h-8" />,
    image: '/images/service-it-support.jpg',
    price: 'Available 24/7',
    features: [
      'Remote Support',
      'On-site Assistance',
      'Network Setup',
      'Email Configuration',
      'Backup Solutions',
      'Security Consulting',
      'Software Training',
      'Emergency Repairs'
    ]
  },
  {
    id: 6,
    title: 'Data Recovery',
    description: 'Professional data recovery services for failed drives and corrupted storage.',
    icon: <HardDrive className="w-8 h-8" />,
    image: '/images/service-data-recovery.jpg',
    price: 'From R1,200',
    features: [
      'Hard Drive Recovery',
      'SSD Data Recovery',
      'USB Drive Recovery',
      'Memory Card Recovery',
      'RAID Recovery',
      'Deleted File Recovery',
      'Formatted Drive Recovery',
      'Encrypted Data Recovery'
    ]
  }
];

// Testimonials Data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mokoena',
    role: 'UFS Student',
    content: 'Amazing service! Got my laptop screen replaced within 24 hours. The 10% student discount really helped. Highly recommend!',
    rating: 5,
    image: '/images/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Dr. James Peterson',
    role: 'Lecturer, UFS',
    content: 'Professional and knowledgeable team. They recovered all my research data from a failed hard drive. Lifesavers!',
    rating: 5,
    image: '/images/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Thabo Nkosi',
    role: 'Business Owner',
    content: 'Installed CCTV cameras at my shop. Excellent work, clean installation, and the remote viewing feature is fantastic.',
    rating: 5,
    image: '/images/testimonial-3.jpg'
  },
  {
    id: 4,
    name: 'Emma van der Merwe',
    role: 'Student',
    content: 'Bought a refurbished laptop at a great price. Works perfectly and came with a warranty. Great value for money!',
    rating: 5,
    image: '/images/testimonial-4.jpg'
  }
];

// Brands
const brands = ['All', 'Apple', 'HP', 'Dell', 'Lenovo', 'Asus', 'Acer', 'MSI'];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Scroll handler for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = selectedBrand === 'All' 
    ? products 
    : products.filter(p => p.brand === selectedBrand);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" richColors />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold font-heading ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Levrone<span className="text-primary-500">Tech</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'Services', 'Products', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-primary-500/30 transition-all"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-2">
              {['Home', 'Services', 'Products', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-700 ${
              visibleSections.has('home') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <GraduationCap className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-white/90 text-sm font-medium">10% Discount for UFS Students</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-heading">
                Professional IT Solutions in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                  Bloemfontein
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 max-w-xl">
                Expert laptop repairs, sales, CCTV installation, and 24/7 IT support. 
                Your trusted technology partner with MSc-qualified engineers.
              </p>

              {/* Pricing Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-white/70 text-sm">Basic Repairs</span>
                  <span className="text-white font-bold ml-2">From R350</span>
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-white/70 text-sm">Hardware</span>
                  <span className="text-white font-bold ml-2">From R750</span>
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-white/70 text-sm">CCTV</span>
                  <span className="text-white font-bold ml-2">From R2,500</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-full hover:shadow-xl hover:shadow-white/20 transition-all flex items-center"
                >
                  Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all"
                >
                  Contact Us
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center text-white/80">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span className="text-sm">Same-Day Service</span>
                </div>
                <div className="flex items-center text-white/80">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span className="text-sm">Warranty Guaranteed</span>
                </div>
                <div className="flex items-center text-white/80">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span className="text-sm">MSc Qualified</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`hidden lg:block transition-all duration-700 delay-200 ${
              visibleSections.has('home') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl" />
                <img 
                  src="/images/hero-tech.jpg" 
                  alt="IT Services" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6 font-heading">
              Comprehensive IT Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From repairs to installations, we provide end-to-end technology services 
              tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`service-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg transition-all duration-700 ${
                  visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                      {service.price && (
                        <span className="px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
                          {service.price}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  {/* Expandable Features */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedService === service.id ? 'max-h-96' : 'max-h-0'
                  }`}>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    {expandedService === service.id ? (
                      <>Show Less <ChevronUp className="w-4 h-4 ml-1" /></>
                    ) : (
                      <>View All Services <ChevronDown className="w-4 h-4 ml-1" /></>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Products Section */}
      <section id="products" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            visibleSections.has('products') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Laptop Sales</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6 font-heading">
              Quality Laptops at Great Prices
            </h2>
            <p className="text-lg text-gray-600">
              New and refurbished laptops from top brands. All devices come with warranty and support.
            </p>
          </div>

          {/* Brand Filter */}
          <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${
            visibleSections.has('products') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedBrand === brand
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className={`product-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg transition-all duration-700 ${
                  visibleSections.has('products') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index % 4) * 100}ms` }}
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full">
                      {product.badge}
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      SALE
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {product.brand}
                    </span>
                    <span className="text-xs text-gray-500">{product.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.specs}</p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-primary-600">R{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">
                          R{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className={`text-center mt-12 transition-all duration-700 delay-300 ${
            visibleSections.has('products') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              onClick={() => toast.info('More products coming soon! Contact us for availability.')}
              className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/30 transition-all inline-flex items-center"
            >
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className={`relative transition-all duration-700 ${
              visibleSections.has('about') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl" />
                <img 
                  src="/images/about-team.jpg" 
                  alt="Levrone Technologies Team"
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 hidden lg:block">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 font-heading">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 font-heading">1000+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`space-y-6 transition-all duration-700 delay-200 ${
              visibleSections.has('about') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                Your Trusted IT Partner in Bloemfontein
              </h2>
              <p className="text-lg text-gray-600">
                Levrone Technologies is a premier IT solutions provider based in Bloemfontein, 
                serving the UFS community and beyond. Founded by a Computer Engineering MSc graduate, 
                we combine academic excellence with practical expertise.
              </p>
              <p className="text-gray-600">
                We specialize in laptop repairs, sales, CCTV installation, and comprehensive IT support. 
                Our mission is to make technology accessible and affordable for everyone, which is why 
                we offer a special 10% discount to UFS students.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">MSc Qualified</h4>
                    <p className="text-sm text-gray-600">Expert-level knowledge</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Warranty Guaranteed</h4>
                    <p className="text-sm text-gray-600">All repairs covered</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Same-Day Service</h4>
                    <p className="text-sm text-gray-600">Quick turnaround</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                    <p className="text-sm text-gray-600">Always available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
              Why Choose Levrone Technologies?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Wrench className="w-8 h-8" />, title: 'Expert Repairs', desc: 'Certified technicians with years of experience' },
              { icon: <Zap className="w-8 h-8" />, title: 'Fast Service', desc: 'Most repairs completed within 24 hours' },
              { icon: <Shield className="w-8 h-8" />, title: 'Quality Parts', desc: 'Only genuine and high-quality components' },
              { icon: <GraduationCap className="w-8 h-8" />, title: 'Student Friendly', desc: 'Special 10% discount for UFS students' },
            ].map((item, index) => (
              <div 
                key={index}
                className={`text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-700 hover:bg-white/20 ${
                  visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6 font-heading">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-700 ${
                  visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-accent-600 to-accent-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free quote. UFS students enjoy 10% off all services!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-accent-700 font-semibold rounded-full hover:shadow-xl transition-all"
            >
              Get Free Quote
            </button>
            <a 
              href="tel:0820499013"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className={`space-y-8 transition-all duration-700 ${
              visibleSections.has('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div>
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6 font-heading">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600">
                  Have a question or need a quote? Reach out to us and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">UFS Bloemfontein, 9301<br />South Africa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:0820499013" className="text-primary-600 hover:text-primary-700">
                      082 049 9013
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:brian@levronetech.co.za" className="text-primary-600 hover:text-primary-700">
                      brian@levronetech.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 08:00 - 16:00</p>
                    <p className="text-sm text-primary-600">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>

              {/* Pricing Info */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Our Pricing</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Basic Repairs</span>
                    <span className="font-bold text-primary-600">From R350</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Hardware Repairs</span>
                    <span className="font-bold text-primary-600">From R750</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">CCTV Installation</span>
                    <span className="font-bold text-primary-600">From R2,500</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-primary-200">
                  <div className="flex items-center text-accent-600">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    <span className="font-medium">10% Discount for UFS Students</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`bg-gray-50 rounded-2xl p-8 transition-all duration-700 delay-200 ${
              visibleSections.has('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Send us a Message</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="laptop-repair">Laptop Repair</option>
                    <option value="desktop-repair">Desktop Repair</option>
                    <option value="hardware">Hardware Service</option>
                    <option value="cctv">CCTV Installation</option>
                    <option value="it-support">IT Support</option>
                    <option value="data-recovery">Data Recovery</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold font-heading">
                  Levrone<span className="text-primary-400">Tech</span>
                </span>
              </div>
              <p className="text-gray-400">
                Professional IT solutions, laptop repairs, sales, and CCTV installation in Bloemfontein.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 font-heading">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Services', 'Products', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 font-heading">Our Services</h4>
              <ul className="space-y-3">
                <li><span className="text-gray-400">Laptop Repairs</span></li>
                <li><span className="text-gray-400">Desktop Repairs</span></li>
                <li><span className="text-gray-400">CCTV Installation</span></li>
                <li><span className="text-gray-400">IT Support</span></li>
                <li><span className="text-gray-400">Data Recovery</span></li>
                <li><span className="text-gray-400">Hardware Upgrades</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6 font-heading">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">UFS Bloemfontein, 9301</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  <a href="tel:0820499013" className="text-gray-400 hover:text-white">082 049 9013</a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  <a href="mailto:brian@levronetech.co.za" className="text-gray-400 hover:text-white">brian@levronetech.co.za</a>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">Mon-Fri: 08:00 - 16:00</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Levrone Technologies. All rights reserved.
            </p>
            <div className="flex items-center mt-4 sm:mt-0">
              <GraduationCap className="w-5 h-5 text-accent-500 mr-2" />
              <span className="text-gray-400 text-sm">10% Student Discount Available</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {selectedProduct.brand}
                </span>
                <span className="text-sm text-gray-500">{selectedProduct.category}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">{selectedProduct.name}</h3>
              <p className="text-gray-600 mb-4">{selectedProduct.specs}</p>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold text-primary-600">R{selectedProduct.price.toLocaleString()}</span>
                  {selectedProduct.originalPrice && (
                    <span className="text-lg text-gray-400 line-through ml-3">
                      R{selectedProduct.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    toast.success('Added to cart! Contact us to complete your purchase.');
                    setSelectedProduct(null);
                  }}
                  className="flex-1 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <button 
                  onClick={() => {
                    setSelectedProduct(null);
                    scrollToSection('contact');
                  }}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
