'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Phone, Mail, MapPin, Clock, Users, Award, Utensils } from 'lucide-react'
import { useState, useEffect } from "react"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('accueil')
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'apropos', 'services', 'menu', 'galerie', 'evenements', 'temoignages', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Slideshow effect for hero images
  useEffect(() => {
    const images = ["/hero1.png", "/hero2.png", "/hero3.png", "/hero4.png", "/hero5.png"]
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white font-mediterranean">
{/* Fixed Navigation */}
<nav className="fixed top-0 left-0 right-0 z-50 bg-[#3c2f2f]/95 backdrop-blur-md text-white px-6 py-4 shadow-lg border-b border-tunisian-gold/30">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    {/* Logo / Name */}
    <div className="text-2xl font-serif font-bold tracking-wide text-tunisian-gold flex items-center">
      <span className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center mr-2 border-2 border-tunisian-gold">
      <Image
        src="/logo.png"
        alt="Lella Fatma Logo"
        width={60}
        height={60}
        className="object-cover w-10 h-10"
      />
      </span>
    </div>

    {/* Desktop Nav */}
    <div className="hidden md:flex space-x-6 text-sm font-medium tracking-wide">
      {[
        { id: 'accueil', label: 'Accueil' },
        { id: 'apropos', label: 'À Propos' },
        { id: 'services', label: 'Nos Services' },
        { id: 'menu', label: 'Menu' },
        { id: 'galerie', label: 'Galerie' },
        { id: 'evenements', label: 'Événements' },
        { id: 'temoignages', label: 'Témoignages' },
        { id: 'contact', label: 'Contact' },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`hover:text-tunisian-gold transition-colors ${
            activeSection === item.id ? 'text-tunisian-gold underline underline-offset-4' : ''
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <Button
        onClick={() => scrollToSection('menu')}
        variant="ghost"
        size="sm"
        className="text-white "
      >
        Menu
      </Button>
    </div>
  </div>
</nav>

      {/* Hero Section with Slideshow */}
      <section
        id="accueil"
        className="relative h-screen bg-cover bg-center section-padding"
      >
        {/* Slideshow Images */}
        {["/hero1.png", "/hero2.png", "/hero3.png", "/hero4.png", "/hero5.png"].map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              heroIndex === idx ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden={heroIndex !== idx}
          />
        ))}
        <div className="absolute inset-0 bg-charcoal/50 z-10"></div>
        <div className="relative z-20 flex items-center justify-center h-full text-center text-white px-6">
          <div className="max-w-4xl fade-in-up">
            <p className="text-lg mb-4 tracking-wider text-tunisian-gold">BIENVENUE CHEZ</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Lella Fatma Gafsa</h1>
            <p className="text-xl md:text-2xl mb-8 text-ivory-sand">
              Goûtez à l'authenticité de la cuisine traditionnelle tunisienne
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-ivory-sand/90">
              Un lieu où les recettes ancestrales prennent vie dans une ambiance chaleureuse, au cœur de Gafsa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-desert-clay hover:bg-desert-clay/90 px-8 py-3 text-lg"
                onClick={() => scrollToSection('menu')}
              >
                Voir le Menu
              </Button>
              <Button 
                variant="outline"
                className="border-ivory-sand text-charcoal hover:bg-ivory-sand hover:text-charcoal px-8 py-3 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                Réserver une Table
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="apropos" className="py-20 px-6 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-desert-clay font-semibold mb-2">NOTRE HISTOIRE</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Bienvenue à Lella Fatma, Gafsa</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-olive-grove mb-6 leading-relaxed text-lg">
                Situé au cœur de Gafsa, Lella Fatma est un café-restaurant qui allie le charme historique de sa façade à une
                ambiance intérieure moderne et élégante. Depuis des années, nous accueillons familles et visiteurs dans un cadre
                convivial et paisible, idéal pour savourer une cuisine tunisienne et méditerranéenne authentique.
              </p>
              <p className="text-olive-grove mb-8 leading-relaxed">
                Profitez de notre espace intérieur et extérieur accessible à tous, y compris aux personnes à mobilité réduite,
                tout en dégustant nos spécialités locales préparées avec soin. Chez Lella Fatma, votre expérience culinaire est au cœur de nos priorités.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-desert-clay mb-2">+20</div>
                  <div className="text-olive-grove">Années de Tradition</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-desert-clay mb-2">10k+</div>
                  <div className="text-olive-grove">Clients Satisfaits</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about.png"
                alt="Intérieur élégant de Lella Fatma"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-desert-clay text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8" />
                  <div>
                    <div className="font-bold">Restaurant Authentique</div>
                    <div className="text-sm opacity-90">Cuisine Tunisienne & Méditerranéenne</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-ivory-sand section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-desert-clay font-semibold mb-2">NOS SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Ce que Nous Offrons</h2>
            <p className="text-olive-grove max-w-2xl mx-auto">
              Profitez d’une expérience complète avec nos services adaptés à tous vos besoins culinaires et sociaux.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Utensils className="w-12 h-12" />,
                title: "Dîner sur Place & Café",
                description: "Ambiance chaleureuse avec des espaces intérieurs et extérieurs, parfaits pour familles et amis."
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Service Traiteur",
                description: "Organisation de repas pour événements privés, mariages, anniversaires et réunions d'affaires."
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Service à Emporter",
                description: "Commandez facilement vos plats et glaces préférés à emporter pour profiter chez vous."
              }
            ].map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-desert-clay mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-charcoal">{service.title}</h3>
                  <p className="text-olive-grove leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Menu Highlights */}
      <section id="menu" className="py-20 px-6 section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-desert-clay font-semibold mb-2">MEILLEURES VENTES</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Nos Spécialités</h2>
            <p className="text-olive-grove max-w-2xl mx-auto">
              Découvrez nos plats signatures et desserts glacés les plus appréciés par nos clients à Lella Fatma.
            </p>
          </div>

          <ul className="space-y-6 text-left max-w-md mx-auto">
            {[
              { name: "Shawarma Tunisien", price: "TND 12" },
              { name: "Grillade Mixte", price: "TND 35" },
              { name: "Pizza Margherita", price: "TND 18" },
              { name: "Salade Méditerranéenne", price: "TND 10" },
              { name: "Glace Artisanale", price: "TND 8" },
              { name: "Tarte aux Datte", price: "TND 7" },
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b border-desert-clay pb-3 last:border-none"
              >
                <span className="font-semibold text-charcoal">{item.name}</span>
                <span className="text-tunisian-gold font-bold">{item.price}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="border-desert-clay text-desert-clay hover:bg-desert-clay hover:text-white px-8 py-3"
            >
              Voir le Menu Complet
            </Button>
          </div>
        </div>
      </section>


      {/* Gallery Section */}
      <section id="galerie" className="py-20 px-6 bg-ivory-sand section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
        <p className="text-desert-clay font-semibold mb-2">GALERIE</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Découvrez Notre Univers</h2>
        <p className="text-olive-grove max-w-2xl mx-auto">
          Plongez dans l'atmosphère chaleureuse et conviviale de Lella Fatma à travers nos plats traditionnels, notre cadre élégant, et nos événements mémorables.
        </p>
          </div>

          {/* Gallery Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">

          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          {
            image: "/g1.png",
            title: "Grillade Mixte",
            category: "Plats",
          },
          {
            image: "/g2.png",
            title: "Salle à Manger Élégante",
            category: "Ambiance",
          },
          {
            image: "/g3.png",
            title: "Tarte aux Dattes",
            category: "Desserts",
          },
          {
            image: "/g4.png",
            title: "Salon Privé pour Événements",
            category: "Événements",
          },
          {
            image: "/g5.png",
            title: "Plateau de Fruits de Mer",
            category: "Plats",
          },
          {
            image: "/g6.png",
            title: "Bar à Glaces Artisanales",
            category: "Glaces",
          },
          {
            image: "/g7.png",
            title: "Réceptions de Mariage",
            category: "Événements",
          },
          {
            image: "/g8.png",
            title: "Pâtisseries Traditionnelles",
            category: "Desserts",
          }
        ].map((item, index) => (
          <div
            key={index}
            className="aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative"
          >
            <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          style={{ borderRadius: '0.75rem' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <p className="text-xs text-tunisian-gold mb-1">{item.category}</p>
            <h3 className="font-semibold text-base text-white drop-shadow">{item.title}</h3>
          </div>
            </div>
          </div>
        ))}
          </div>

          <div className="text-center mt-12">
        <Button
          variant="outline"
          className="border-desert-clay text-desert-clay hover:bg-desert-clay hover:text-white px-8 py-3"
        >
          Voir Plus de Photos
        </Button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="evenements" className="py-20 px-6 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-desert-clay font-semibold mb-2">ÉVÉNEMENTS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Célébrez Avec Nous</h2>
            <p className="text-olive-grove max-w-2xl mx-auto">
              Créez des souvenirs inoubliables dans notre cadre chaleureux et authentique à Lella Fatma. Nous organisons tous vos événements spéciaux avec soin et passion.
            </p>
          </div>

          {/* Event Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "💍",
                title: "Mariages & Réceptions",
                description: "Célébrez le plus beau jour de votre vie dans une ambiance intime et traditionnelle, avec un service personnalisé.",
                features: ["Menus personnalisés", "Décoration authentique", "Coordinateur dédié", "Jusqu'à 120 invités"],
              },
              {
                icon: "🎂",
                title: "Anniversaires & Fêtes Familiales",
                description: "Organisez des célébrations joyeuses avec nos espaces privés et nos options de menus adaptés à tous les âges.",
                features: ["Gâteau sur mesure", "Animations disponibles", "Salle privée", "Menu enfant inclus"],
              },
              {
                icon: "🤝",
                title: "Événements d'Entreprise",
                description: "Impressionnez vos clients et collaborateurs grâce à notre cadre élégant et à des prestations professionnelles complètes.",
                features: ["Équipement audiovisuel", "Menus business", "Service traiteur", "Parking privé"],
              }
            ].map((event, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-desert-clay">
                <CardContent className="pt-0">
                  <div className="text-4xl mb-4">{event.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-charcoal">{event.title}</h3>
                  <p className="text-olive-grove mb-6 leading-relaxed">{event.description}</p>
                  <ul className="space-y-2 mb-6">
                    {event.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-olive-grove">
                        <div className="w-2 h-2 bg-tunisian-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline"
                    className="w-full border-desert-clay text-desert-clay hover:bg-desert-clay hover:text-white"
                  >
                    Demander un Devis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-20 px-6 bg-mint-tea/10 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
        <p className="text-desert-clay font-semibold mb-2">TÉMOIGNAGES</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Ce que Disent Nos Clients</h2>
        <p className="text-olive-grove max-w-2xl mx-auto">
          Découvrez les expériences authentiques de nos clients qui apprécient la chaleur et la qualité de Lella Fatma.
        </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Amira Ben Ali",
            role: "Cliente Fidèle",
            content: "Une ambiance conviviale et des plats traditionnels d'une grande finesse. Le couscous et les pâtisseries sont à tomber !",
            rating: 5,
          },
          {
            name: "Noureddine Trabelsi",
            role: "Chef d'Entreprise",
            content: "Lella Fatma est le lieu idéal pour nos repas d'affaires. Service impeccable et cadre agréable, toujours un plaisir de revenir.",
            rating: 5,
          },
          {
            name: "Sonia Mansouri",
            role: "Organisatrice d'Événements",
            content: "Leur équipe a su rendre notre fête familiale magique. Qualité du service et des plats remarquable, je recommande vivement.",
            rating: 5,
          }
        ].map((testimonial, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-desert-clay flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    {testimonial.name.trim().charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">{testimonial.name}</h4>
                  <p className="text-sm text-olive-grove">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-tunisian-gold text-tunisian-gold" />
                ))}
              </div>
              <p className="text-olive-grove italic">"{testimonial.content}"</p>
            </CardContent>
          </Card>
        ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-desert-clay font-semibold mb-2">CONTACTEZ-NOUS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Réservez Votre Table</h2>
            <p className="text-olive-grove max-w-2xl mx-auto">
              Contactez-nous pour une réservation ou pour toute demande d'information sur nos services à Lella Fatma, Gafsa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-charcoal">Informations de Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-desert-clay mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Adresse</h4>
                    <p className="text-olive-grove">
                      Rue de la Médina, Quartier Lella Fatma<br />
                      Gafsa, Tunisie
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-desert-clay mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Téléphone</h4>
                    <p className="text-olive-grove">+216 75 123 456</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-desert-clay mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Email</h4>
                    <p className="text-olive-grove">contact@lellafatmagafsa.tn</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-desert-clay mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Horaires</h4>
                    <p className="text-olive-grove">
                      Lun - Dim : 8h00 - 23h00<br />
                      Service continu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-charcoal">Formulaire de Réservation</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Prénom</label>
                    <Input placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Nom</label>
                    <Input placeholder="Votre nom" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
                  <Input type="email" placeholder="votre@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Téléphone</label>
                  <Input type="tel" placeholder="Votre numéro de téléphone" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Date</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Heure</label>
                    <Input type="time" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Nombre de personnes</label>
                  <Input type="number" min="1" max="20" placeholder="2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Message (optionnel)</label>
                  <Textarea placeholder="Demandes spéciales, allergies, etc." rows={4} />
                </div>
                <Button className="w-full bg-desert-clay hover:bg-desert-clay/90 py-3">
                  Envoyer la Réservation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Lella Fatma Gafsa</h3>
            <p className="text-ivory-sand/70 mb-4 leading-relaxed">
              Votre destination culinaire à Gafsa, où tradition et saveurs authentiques se rencontrent.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-desert-clay rounded-full flex items-center justify-center cursor-pointer" aria-label="Facebook">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-desert-clay rounded-full flex items-center justify-center cursor-pointer" aria-label="Email">
                <span className="text-xs font-bold">@</span>
              </div>
              <div className="w-8 h-8 bg-desert-clay rounded-full flex items-center justify-center cursor-pointer" aria-label="LinkedIn">
                <span className="text-xs font-bold">in</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-ivory-sand/70">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'apropos', label: 'À Propos' },
                { id: 'services', label: 'Services' },
                { id: 'menu', label: 'Menu' },
                { id: 'galerie', label: 'Galerie' },
                { id: 'evenements', label: 'Événements' },
                { id: 'temoignages', label: 'Témoignages' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-ivory-sand transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-ivory-sand/70">
              <li><a href="#" className="hover:text-ivory-sand transition-colors">Traiteur</a></li>
              <li><a href="#" className="hover:text-ivory-sand transition-colors">Livraison</a></li>
              <li><a href="#" className="hover:text-ivory-sand transition-colors">Événements Privés</a></li>
              <li><a href="#" className="hover:text-ivory-sand transition-colors">Cartes Cadeaux</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-ivory-sand/70">
              <li>Rue de la Médina, Quartier Lella Fatma</li>
              <li>Gafsa, Tunisie</li>
              <li>+216 75 123 456</li> {/* Replace with actual number */}
              <li>contact@lellafatmagafsa.tn</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-ivory-sand/20 text-center text-sm text-ivory-sand/70">
          © 2024 Lella Fatma Gafsa. Tous droits réservés. | Politique de Confidentialité | Conditions d'Utilisation
        </div>
      </footer>

    </div>
  )
}
