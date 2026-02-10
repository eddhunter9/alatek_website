import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/alatek-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="ALATEK" className="h-8 mb-4" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Innovative electronic products and software solutions powering the next generation of technology.
            </p>
          </div>

          {/* Company Details */}
          <div>
            <h4 className="font-semibold font-['Rajdhani'] text-lg mb-4 text-foreground">Company Details</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>ul. Elektroniczna 12</li>
              <li>00-001 Warszawa, Poland</li>
              <li>NIP: 123-456-78-90</li>
              <li>info@alatek.com</li>
              <li>+48 123 456 789</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold font-['Rajdhani'] text-lg mb-4 text-foreground">Social Media</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 Alatek, Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
