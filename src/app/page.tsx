use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Globe } from "lucide-react";

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two women working together on software programming indoors, focusing on code." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation." },
  { "id": "feature-image-1", "url": "https://images.pexels.com/photos/34317747/pexels-photo-34317747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Desk" },
  { "id": "feature-image-2", "url": "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Detailed image of a server rack with glowing lights in a modern data center." },
  { "id": "social-proof-company1", "url": "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Interior view of Microsoft office with logo on wooden wall in Brussels, Belgium." },
  { "id": "social-proof-company2", "url": "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a tablet displaying Google's search screen, emphasizing technology and internet browsing." },
  { "id": "social-proof-company3", "url": "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up view of the Facebook app logo on a digital screen with blurred background." },
  { "id": "social-proof-company4", "url": "https://images.pexels.com/photos/4560039/pexels-photo-4560039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of the Amazon shopping app icon on a smartphone screen. Ideal for online shopping and technology themes." },
  { "id": "social-proof-company5", "url": "https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a black and white Apple logo on a desktop screen with a modern minimalist design." },
  { "id": "social-proof-company6", "url": "https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Visual representation of branding, identity, and marketing strategies." },
  { "id": "testimonial-1", "url": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation." },
  { "id": "testimonial-2", "url": "https://images.pexels.com/photos/34345272/pexels-photo-34345272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "professional woman portrait - Photo by Roman Biernacki" },
  { "id": "testimonial-3", "url": "https://images.pexels.com/photos/6963857/pexels-photo-6963857.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A woman manages finances at home, using a laptop and calculator on a wooden desk." },
  { "id": "testimonial-4", "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Overhead view of a diverse team in a business meeting using laptops and tablets." }
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Webild"
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Innovate with Us"
          description="Empowering your business with cutting-edge IT solutions."
          imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
          buttons={[
            { text: "Get Started", href: "#services" },
            { text: "Learn More", href: "#about" }
          ]}
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          title="About Us"
          description="Transforming businesses worldwide through innovative IT services."
          bulletPoints={[
            { title: "Expert Team", description: "Dedicated to excellence.", icon: Award },
            { title: "Global Reach", description: "Serving clients everywhere.", icon: Globe }
          ]}
          imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
        />
      </div>
      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Our Features"
          description="Discover what makes us unique."
          features={[
            {
              id: "01",
              title: "Custom Solutions",
              description: "Tailored solutions for your business needs.",
              imageSrc: assetMap.find(a => a.id === "feature-image-1")?.url ?? "/public/images/placeholder.webp"
            },
            {
              id: "02",
              title: "Reliable Infrastructure",
              description: "Robust and scalable technologies.",
              imageSrc: assetMap.find(a => a.id === "feature-image-2")?.url ?? "/public/images/placeholder.webp"
            }
          ]}
        />
      </div>
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Customer Reviews"
          description="Hear from our clients."
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechCorp",
              testimonial: "Exceptional service and technology.",
              imageSrc: assetMap.find(a => a.id === "testimonial-1")?.url ?? "/public/images/placeholder.webp"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              company: "InnovateLab",
              testimonial: "Transformed our IT infrastructure.",
              imageSrc: assetMap.find(a => a.id === "testimonial-2")?.url ?? "/public/images/placeholder.webp"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              company: "GrowthCo",
              testimonial: "Seamless collaboration and support.",
              imageSrc: assetMap.find(a => a.id === "testimonial-3")?.url ?? "/public/images/placeholder.webp"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Product Manager",
              company: "StartupXYZ",
              testimonial: "Innovative solutions delivered on time.",
              imageSrc: assetMap.find(a => a.id === "testimonial-4")?.url ?? "/public/images/placeholder.webp"
            }
          ]}
        />
      </div>
      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Trusted by Industry Leaders"
          description="Join numerous satisfied partners."
          logos={[
            assetMap.find(a => a.id === "social-proof-company1")?.url ?? "/public/images/placeholder.webp",
            assetMap.find(a => a.id === "social-proof-company2")?.url ?? "/public/images/placeholder.webp",
            assetMap.find(a => a.id === "social-proof-company3")?.url ?? "/public/images/placeholder.webp",
            assetMap.find(a => a.id === "social-proof-company4")?.url ?? "/public/images/placeholder.webp",
            assetMap.find(a => a.id === "social-proof-company5")?.url ?? "/public/images/placeholder.webp",
            assetMap.find(a => a.id === "social-proof-company6")?.url ?? "/public/images/placeholder.webp"
          ]}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="We'd love to hear from you. Send us a message."
          inputs={[
            { name: "name", type: "text", placeholder: "Name", required: true },
            { name: "email", type: "email", placeholder: "Email", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Type your message...",
            rows: 5,
            required: true
          }}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          columns={[
            { items: [{ label: "About", href: "about" }] },
            { items: [{ label: "Services", href: "services" }] },
            { items: [{ label: "Contact", href: "contact" }] }
          ]}
          logoText="Webild"
        />
      </div>
    </ThemeProvider>
  );
}
