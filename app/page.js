"use client";

import { useMemo, useState } from "react";

const eventTypes = [
  { id: "baby", name: "Baby Shower", icon: "♡", note: "Beautiful beginnings" },
  { id: "bridal", name: "Bridal Shower", icon: "◇", note: "Elegant celebrations" },
  { id: "engagement", name: "Engagement", icon: "✦", note: "The beginning of forever" },
  { id: "birthday", name: "Birthday", icon: "☆", note: "Celebrate beautifully" },
];

const themes = [
  {
    id: "blush",
    name: "Blush & Gold",
    colors: ["#e8c9c1", "#c6a66a", "#f7f2ea"],
  },
  {
    id: "neutral",
    name: "Neutral Luxe",
    colors: ["#d9d0c3", "#9b8e7e", "#f4efe7"],
  },
  {
    id: "white",
    name: "White Champagne",
    colors: ["#f5f2eb", "#d5c19a", "#ffffff"],
  },
  {
    id: "sage",
    name: "Sage Garden",
    colors: ["#9ca78e", "#ded8c8", "#f5f1e9"],
  },
];

const packages = [
  {
    id: "essential",
    name: "Essential",
    price: 349,
    description: "An elegant focal point for an intimate celebration.",
    features: [
      "Signature backdrop",
      "Personalized name or sign",
      "Balloon arrangement",
      "Styled plinth",
      "Setup & takedown",
    ],
  },
  {
    id: "signature",
    name: "Signature",
    price: 649,
    popular: true,
    description: "Our signature L&Y experience with elevated styling.",
    features: [
      "Layered premium backdrops",
      "Expanded balloon installation",
      "Personalized signage",
      "Two styled plinths",
      "Decor accents",
      "Setup & takedown",
    ],
  },
  {
    id: "luxe",
    name: "Luxe",
    price: 999,
    description: "A statement installation designed around your celebration.",
    features: [
      "Large custom backdrop installation",
      "Luxury balloon styling",
      "Premium signage",
      "Three styled plinths",
      "Floral accents",
      "Statement decor pieces",
      "Setup & takedown",
    ],
  },
];

const addons = [
  { id: "florals", name: "Premium Florals", price: 125, icon: "✿" },
  { id: "welcome", name: "Welcome Sign", price: 75, icon: "◇" },
  { id: "balloons", name: "Balloon Upgrade", price: 150, icon: "○" },
  { id: "plinth", name: "Extra Plinth", price: 65, icon: "▯" },
  { id: "table", name: "Table Styling", price: 175, icon: "⌑" },
  { id: "custom", name: "Custom Signage", price: 95, icon: "✦" },
];

const gallery = [
  {
    category: "baby",
    label: "Baby Shower",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85",
  },
  {
    category: "bridal",
    label: "Bridal Shower",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=85",
  },
  {
    category: "engagement",
    label: "Engagement",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    category: "birthday",
    label: "Birthday",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=85",
  },
];

function money(value) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [builderOpen, setBuilderOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [eventType, setEventType] = useState("");
  const [theme, setTheme] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [eventDate, setEventDate] = useState("");
  const [guests, setGuests] = useState(40);

  const [galleryFilter, setGalleryFilter] = useState("all");

  const pkg = packages.find((item) => item.id === selectedPackage);

  const total = useMemo(() => {
    const packagePrice = pkg?.price || 0;

    const addonPrice = selectedAddons.reduce((sum, id) => {
      const addon = addons.find((item) => item.id === id);
      return sum + (addon?.price || 0);
    }, 0);

    return packagePrice + addonPrice;
  }, [pkg, selectedAddons]);

  const event = eventTypes.find((item) => item.id === eventType);
  const selectedTheme = themes.find((item) => item.id === theme);

  const toggleAddon = (id) => {
    setSelectedAddons((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const openBuilder = () => {
    setBuilderOpen(true);
    setStep(1);
    setMenuOpen(false);
    document.body.style.overflow = "hidden";
  };

  const closeBuilder = () => {
    setBuilderOpen(false);
    document.body.style.overflow = "";
  };

  const nextStep = () => {
    setStep((current) => Math.min(current + 1, 6));
  };

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 1));
  };

  const filteredGallery =
    galleryFilter === "all"
      ? gallery
      : gallery.filter((item) => item.category === galleryFilter);

  const canContinue =
    (step === 1 && eventType) ||
    (step === 2 && theme) ||
    (step === 3 && selectedPackage) ||
    step === 4 ||
    (step === 5 && eventDate) ||
    step === 6;

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home">
          <span className="brand-mark">L&Y</span>
          <span className="brand-sub">EVENTS</span>
        </a>

        <nav className="desktop-nav">
          <a href="#services">Services</a>
          <a href="#portfolio">Our Work</a>
          <a href="#packages">Packages</a>
          <a href="#about">About</a>
        </nav>

        <button className="nav-cta" onClick={openBuilder}>
          Plan Your Event
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="menu-close"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#portfolio" onClick={() => setMenuOpen(false)}>
            Our Work
          </a>

          <a href="#packages" onClick={() => setMenuOpen(false)}>
            Packages
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <button onClick={openBuilder}>
            Plan Your Event →
          </button>
        </div>
      )}

      <section className="hero" id="home">
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow">
            OTTAWA · EVENT STYLING · DÉCOR · RENTALS
          </p>

          <h1>
            Your moment.
            <br />
            <em>Beautifully transformed.</em>
          </h1>

          <p className="hero-copy">
            Thoughtfully designed celebrations, statement installations and
            unforgettable details by Lida & Yalda.
          </p>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={openBuilder}
            >
              Build Your Event
              <span>→</span>
            </button>

            <a
              className="text-button"
              href="#portfolio"
            >
              Explore Our Work
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>Designed in Ottawa</span>
          <span className="scroll-indicator">
            SCROLL ↓
          </span>
        </div>
      </section>

      <section
        className="intro-section"
        id="services"
      >
        <div className="section-number">
          01
        </div>

        <div className="intro-heading">
          <p className="eyebrow dark">
            WHAT WE CREATE
          </p>

          <h2>
            More than décor.
            <br />
            <em>A complete atmosphere.</em>
          </h2>
        </div>

        <p className="intro-copy">
          From intimate celebrations to statement installations, every L&Y
          event is styled with intention. We bring together backdrops,
          balloons, florals, signage and carefully selected details into one
          cohesive experience.
        </p>
      </section>

      <section className="event-grid">
        {eventTypes.map((item, index) => (
          <button
            className="event-card"
            key={item.id}
            onClick={() => {
              setEventType(item.id);
              setBuilderOpen(true);
              setStep(2);
              document.body.style.overflow = "hidden";
            }}
          >
            <span className="event-number">
              0{index + 1}
            </span>

            <span className="event-icon">
              {item.icon}
            </span>

            <div>
              <h3>{item.name}</h3>
              <p>{item.note}</p>
            </div>

            <span className="event-arrow">
              ↗
            </span>
          </button>
        ))}
      </section>

      <section className="builder-promo">
        <div className="builder-promo-copy">
          <p className="eyebrow">
            THE L&Y EVENT BUILDER
          </p>

          <h2>
            Design your celebration
            <br />
            <em>in minutes.</em>
          </h2>

          <p>
            Choose your celebration, aesthetic, package and upgrades. Watch
            your estimated investment update as you create your event.
          </p>

          <button
            className="light-button"
            onClick={openBuilder}
          >
            Start Building
            <span>→</span>
          </button>
        </div>

        <div className="builder-preview">
          <div className="preview-window">
            <div className="preview-top">
              <span />
              <span />
              <span />
              <small>YOUR L&Y EVENT</small>
            </div>

            <div className="preview-body">
              <span className="preview-label">
                YOUR CELEBRATION
              </span>

              <h3>
                Signature Event
              </h3>

              <div className="preview-options">
                <div>
                  <span>01</span>
                  <p>Choose occasion</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Select your look</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Customize details</p>
                </div>
              </div>

              <div className="preview-total">
                <span>Estimated from</span>
                <strong>$649</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="portfolio-section"
        id="portfolio"
      >
        <div className="portfolio-heading">
          <div>
            <p className="eyebrow dark">
              SELECTED CELEBRATIONS
            </p>

            <h2>
              Designed to be
              <br />
              <em>remembered.</em>
            </h2>
          </div>

          <div className="gallery-filters">
            {[
              ["all", "All"],
              ["baby", "Baby"],
              ["bridal", "Bridal"],
              ["engagement", "Engagement"],
              ["birthday", "Birthday"],
            ].map(([id, name]) => (
              <button
                key={id}
                className={
                  galleryFilter === id
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setGalleryFilter(id)
                }
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid">
          {filteredGallery.map((item, index) => (
            <article
              className="gallery-item"
              key={`${item.category}-${index}`}
            >
              <img
                src={item.image}
                alt={`${item.label} event inspiration`}
              />

              <div className="gallery-overlay">
                <span>{item.label}</span>
                <strong>
                  View Celebration ↗
                </strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="packages-section"
        id="packages"
      >
        <div className="packages-heading">
          <p className="eyebrow">
            OUR COLLECTIONS
          </p>

          <h2>
            A beautiful starting point.
            <br />
            <em>Made uniquely yours.</em>
          </h2>
        </div>

        <div className="packages-grid">
          {packages.map((item) => (
            <article
              className={`package-card ${
                item.popular
                  ? "featured"
                  : ""
              }`}
              key={item.id}
            >
              {item.popular && (
                <span className="popular">
                  MOST LOVED
                </span>
              )}

              <div className="package-title">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>

              <div className="package-price">
                <small>STARTING AT</small>
                <strong>
                  {money(item.price)}
                </strong>
              </div>

              <div className="package-line" />

              <ul>
                {item.features.map(
                  (feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  )
                )}
              </ul>

              <button
                onClick={() => {
                  setSelectedPackage(item.id);
                  setBuilderOpen(true);
                  setStep(4);
                  document.body.style.overflow =
                    "hidden";
                }}
              >
                Customize {item.name}
                <span>→</span>
              </button>
            </article>
          ))}
        </div>

        <p className="price-note">
          Pricing shown is a starting estimate. Final pricing depends on event
          requirements, venue, customization and installation.
        </p>
      </section>

      <section
        className="about-section"
        id="about"
      >
        <div className="about-monogram">
          L&Y
        </div>

        <div className="about-content">
          <p className="eyebrow dark">
            MEET L&Y
          </p>

          <h2>
            Two sisters.
            <br />
            <em>
              One eye for beautiful details.
            </em>
          </h2>

          <p>
            L&Y Events was created by sisters Lida and Yalda with one simple
            idea: life's most meaningful moments deserve to feel
            extraordinary.
          </p>

          <p>
            We create refined, personalized celebrations throughout Ottawa,
            bringing every detail together so our clients can simply enjoy
            their moment.
          </p>

          <button onClick={openBuilder}>
            Create With Us →
          </button>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">
          YOUR CELEBRATION STARTS HERE
        </p>

        <h2>
          Let's create something
          <br />
          <em>unforgettable.</em>
        </h2>

        <button
          className="light-button large"
          onClick={openBuilder}
        >
          Plan Your Event
          <span>→</span>
        </button>

        <div className="final-meta">
          <span>
            OTTAWA, ONTARIO
          </span>

          <span>
            EVENT STYLING · DÉCOR · RENTALS
          </span>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <strong>L&Y</strong>
          <span>EVENTS</span>
        </div>

        <p>
          Beautiful moments, thoughtfully styled.
        </p>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} L&Y Events
          </span>

          <span>
            Ottawa, Ontario
          </span>
        </div>
      </footer>

      <button
        className="mobile-builder-button"
        onClick={openBuilder}
      >
        <span>✦</span>
        PLAN YOUR EVENT
      </button>

      {builderOpen && (
        <div className="builder-modal">
          <div className="builder-shell">

            <div className="builder-header">
              <div className="builder-brand">
                <strong>L&Y</strong>
                <span>EVENT BUILDER</span>
              </div>

              <div className="builder-progress">
                <span>
                  STEP {step} OF 6
                </span>

                <div>
                  <i
                    style={{
                      width: `${(step / 6) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <button onClick={closeBuilder}>
                ×
              </button>
            </div>

            <div className="builder-content">

              {step === 1 && (
                <div className="builder-step">
                  <p className="builder-kicker">
                    LET'S BEGIN
                  </p>

                  <h2>
                    What are we celebrating?
                  </h2>

                  <p className="builder-description">
                    Choose your occasion and we'll build from there.
                  </p>

                  <div className="builder-choice-grid">
                    {eventTypes.map((item) => (
                      <button
                        key={item.id}
                        className={
                          eventType === item.id
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          setEventType(item.id)
                        }
                      >
                        <span>
                          {item.icon}
                        </span>

                        <strong>
                          {item.name}
                        </strong>

                        <small>
                          {item.note}
                        </small>

                        <i>
                          {eventType === item.id
                            ? "✓"
                            : "→"}
                        </i>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="builder-step">
                  <p className="builder-kicker">
                    YOUR AESTHETIC
                  </p>

                  <h2>
                    Choose your look.
                  </h2>

                  <p className="builder-description">
                    Select a starting palette. Every design can be personalized.
                  </p>

                  <div className="theme-grid">
                    {themes.map((item) => (
                      <button
                        key={item.id}
                        className={
                          theme === item.id
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          setTheme(item.id)
                        }
                      >
                        <div className="theme-colors">
                          {item.colors.map(
                            (color) => (
                              <span
                                key={color}
                                style={{
                                  backgroundColor:
                                    color,
                                }}
                              />
                            )
                          )}
                        </div>

                        <strong>
                          {item.name}
                        </strong>

                        <small>
                          Explore this palette
                        </small>

                        <i>
                          {theme === item.id
                            ? "✓"
                            : ""}
                        </i>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="builder-step">
                  <p className="builder-kicker">
                    YOUR COLLECTION
                  </p>

                  <h2>
                    Choose your experience.
                  </h2>

                  <p className="builder-description">
                    Start with a collection. We'll customize the details next.
                  </p>

                  <div className="builder-package-grid">
                    {packages.map((item) => (
                      <button
                        key={item.id}
                        className={`${
                          selectedPackage === item.id
                            ? "selected"
                            : ""
                        } ${
                          item.popular
                            ? "recommended"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedPackage(
                            item.id
                          )
                        }
                      >
                        {item.popular && (
                          <em>
                            RECOMMENDED
                          </em>
                        )}

                        <h3>
                          {item.name}
                        </h3>

                        <p>
                          {item.description}
                        </p>

                        <strong>
                          {money(item.price)}
                        </strong>

                        <small>
                          starting at
                        </small>

                        <i>
                          {selectedPackage ===
                          item.id
                            ? "✓"
                            : ""}
                        </i>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="builder-step">
                  <p className="builder-kicker">
                    MAKE IT YOURS
                  </p>

                  <h2>
                    Add the finishing touches.
                  </h2>

                  <p className="builder-description">
                    Choose as many or as few upgrades as you'd like.
                  </p>

                  <div className="addon-grid">
                    {addons.map((item) => {
                      const active =
                        selectedAddons.includes(
                          item.id
                        );

                      return (
                        <button
                          key={item.id}
                          className={
                            active
                              ? "selected"
                              : ""
                          }
                          onClick={() =>
                            toggleAddon(
                              item.id
                            )
                          }
                        >
                          <span className="addon-icon">
                            {item.icon}
                          </span>

                          <div>
                            <strong>
                              {item.name}
                            </strong>

                            <small>
                              +{" "}
                              {money(
                                item.price
                              )}
                            </small>
                          </div>

                          <i>
                            {active
                              ? "✓"
                              : "+"}
                          </i>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="builder-step">
                  <p className="builder-kicker">
                    THE DETAILS
                  </p>

                  <h2>
                    When is your celebration?
                  </h2>

                  <div className="details-form">
                    <label>
                      <span>
                        EVENT DATE
                      </span>

                      <input
                        type="date"
                        value={eventDate}
                        min={
                          new Date()
                            .toISOString()
                            .split("T")[0]
                        }
                        onChange={(e) =>
                          setEventDate(
                            e.target.value
                          )
                        }
                      />
                    </label>

                    <label>
                      <span>
                        ESTIMATED GUESTS
                      </span>

                      <div className="guest-control">
                        <button
                          type="button"
                          onClick={() =>
                            setGuests(
                              Math.max(
                                10,
                                guests - 10
                              )
                            )
                          }
                        >
                          −
                        </button>

                        <strong>
                          {guests}
                        </strong>

                        <button
                          type="button"
                          onClick={() =>
                            setGuests(
                              guests + 10
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </label>
                  </div>

                  <p className="availability-note">
                    Your date request will be confirmed by L&Y Events after
                    your inquiry is received.
                  </p>
                </div>
              )}

              {step === 6 && (
                <div className="builder-step summary-step">
                  <p className="builder-kicker">
                    YOUR L&Y EVENT
                  </p>

                  <h2>
                    Beautiful. Let's make it happen.
                  </h2>

                  <div className="event-summary">
                    <div>
                      <span>
                        CELEBRATION
                      </span>
                      <strong>
                        {event?.name ||
                          "—"}
                      </strong>
                    </div>

                    <div>
                      <span>
                        STYLE
                      </span>
                      <strong>
                        {selectedTheme?.name ||
                          "—"}
                      </strong>
                    </div>

                    <div>
                      <span>
                        COLLECTION
                      </span>
                      <strong>
                        {pkg?.name ||
                          "—"}
                      </strong>
                    </div>

                    <div>
                      <span>
                        DATE
                      </span>
                      <strong>
                        {eventDate ||
                          "To be confirmed"}
                      </strong>
                    </div>

                    <div>
                      <span>
                        GUESTS
                      </span>
                      <strong>
                        Approx. {guests}
                      </strong>
                    </div>

                    <div>
                      <span>
                        UPGRADES
                      </span>
                      <strong>
                        {selectedAddons.length
                          ? `${selectedAddons.length} selected`
                          : "None"}
                      </strong>
                    </div>
                  </div>

                  <div className="summary-price">
                    <span>
                      ESTIMATED STARTING TOTAL
                    </span>

                    <strong>
                      {money(total)}
                    </strong>

                    <small>
                      Final quote is confirmed after reviewing your event
                      requirements.
                    </small>
                  </div>

                  <button
                    className="request-button"
                    onClick={() =>
                      alert(
                        "Your event is ready! Next we'll connect this button to L&Y's inquiry form."
                      )
                    }
                  >
                    Request This Event
                    <span>→</span>
                  </button>
                </div>
              )}
            </div>

            <div className="builder-footer">
              <button
                className="builder-back"
                onClick={
                  step === 1
                    ? closeBuilder
                    : previousStep
                }
              >
                {step === 1
                  ? "Cancel"
                  : "← Back"}
              </button>

              <div className="live-total">
                {selectedPackage && (
                  <>
                    <span>
                      ESTIMATE
                    </span>

                    <strong>
                      {money(total)}
                    </strong>
                  </>
                )}
              </div>

              {step < 6 && (
                <button
                  className="builder-next"
                  disabled={!canContinue}
                  onClick={nextStep}
                >
                  Continue
                  <span>→</span>
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </main>
  );
}
