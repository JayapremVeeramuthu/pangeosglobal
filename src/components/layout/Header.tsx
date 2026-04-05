import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    {
      label: "Brands",
      path: "/brands",
      submenu: [
        { label: "PANGEOS", path: "/brands/pangeos", description: "Premium Men's Collection" },
        { label: "GO SMILEY", path: "/brands/go-smiley", description: "Women's Fashion" },
        { label: "KIDS VIBE", path: "/brands/kids-vibe", description: "Children's Wear" },
        { label: "SOFTOUCH COZY", path: "/brands/softouch-cozy", description: "Winter Collection" },
      ],
    },
    {
      label: "Categories",
      path: "/categories",
      submenu: [
        { label: "Men's – Pangeos", path: "/categories/mens" },
        { label: "Women's – Go Smiley", path: "/categories/womens" },
        { label: "Kids – Kids Vibe", path: "/categories/kids" },
        { label: "Winter Wear – Softouch Cozy", path: "/categories/winter" },
      ],
    },
    {
      label: "Customized Wear",
      path: "/customized-wear",
      submenu: [
        { label: "Corporate", path: "/customized-wear/corporate" },
        { label: "School", path: "/customized-wear/school" },
        { label: "Promotion", path: "/customized-wear/promotion" },
        { label: "Medical", path: "/customized-wear/medical" },
      ],
    },
    {
      label: "About Us",
      path: "/about",
      submenu: [
        { label: "Intent", path: "/about/intent" },
        { label: "Vision", path: "/about/vision" },
        { label: "Mission", path: "/about/mission" },
        { label: "Objectives", path: "/about/objectives" },
        { label: "Leadership", path: "/about/leadership" },
        { label: "Quality Policy", path: "/about/quality-policy" },
        { label: "Social Responsibility", path: "/about/social-responsibility" },
      ],
    },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-corporate">
        <div className="flex items-center justify-between h-18 lg:h-22">

         {/* Logo */}
<Link to="/" className="flex items-center space-x-3">
  <img
    src="/nav.png"
    alt="PANGEOS Clothing Industries Logo"
    className="h-10 w-auto lg:h-20"
  />
  {/* <span className="text-xl lg:text-2xl font-heading font-bold tracking-tight text-primary">
    PANGEOS
  </span> */}
</Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`nav-link flex items-center gap-1 py-6 ${
                    isActive(item.path) ? "nav-link-active" : ""
                  }`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-64 bg-card border border-border shadow-lg py-2 animate-fade-in">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block px-4 py-3 text-sm hover:bg-secondary transition-colors"
                      >
                        <span className="font-medium text-foreground">{subItem.label}</span>
                        {"description" in subItem && (
                          <span className="block text-xs text-muted-foreground mt-0.5">
                            {subItem.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container-corporate py-4">
            {menuItems.map((item) => (
              <div key={item.label} className="border-b border-border/50 last:border-0">
                <Link
                  to={item.path}
                  className="block py-3 text-sm font-medium"
                  onClick={() => !item.submenu && setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-4 pb-3 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
