const events = [
  { title: "Baby Showers", subtitle: "Sweet beginnings, beautifully styled." },
  { title: "Bridal Showers", subtitle: "Elegant details for the bride-to-be." },
  { title: "Engagements", subtitle: "A beautiful setting for your next chapter." },
  { title: "Birthdays", subtitle: "Celebrate every milestone in style." },
];

const packages = [
  {
    name: "Essential",
    price: "349",
    description: "Simple, polished and beautifully styled.",
    features: [
      "Signature backdrop",
      "Personalized name or sign",
      "Small balloon arrangement",
      "1 plinth or cake stand",
      "Professional setup",
    ],
  },
  {
    name: "Signature",
    price: "649",
    description: "Our complete signature celebration experience.",
    popular: true,
    features: [
      "Premium multi-panel backdrop",
      "Personalized signage",
      "Large organic balloon installation",
      "2–3 styled plinths",
      "Floral accents",
      "Full styling",
      "Setup & teardown",
    ],
  },
  {
    name: "Luxe",
    price: "999",
    description: "A statement installation designed to impress.",
    features: [
      "Luxury multi-panel installation",
      "Custom signage",
      "Deluxe balloon installation",
      "3+ styled plinths",
      "Premium floral styling",
      "Custom colour palette",
      "Full setup & teardown",
    ],
  },
];

const addons = [
  ["Extra Balloon Garland", "from $150"],
  ["Custom Welcome Sign", "from $75"],
  ["Premium Florals", "from $125"],
  ["Additional Plinth", "$50"],
  ["Cake / Dessert Table", "$125"],
  ["Neon Sign", "$100"],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home">
          <span className="brandMark">L&Y</span>
          <span className="brandSub">EVENTS</span>
        </a>

        <nav className="navLinks">
          <a href="#events">Events</a>
          <a href="#packages">Packages</a>
          <a href="#about">About</a>
          <a href="#contact" className="navButton">Plan Your Event</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="heroShade" />

        <div className="heroContent">
          <p className="eyebrow">OTTAWA · EVENT STYLING · DÉCOR · RENTALS</p>

          <h1>
            Beautifully Styled.
            <br />
            <em>Uniquely Yours.</em>
          </h1>

          <p className="heroText">
            Thoughtfully designed celebrations for life&apos;s most
            unforgettable moments.
          </p>

          <div className="heroButtons">
            <a href="#packages" className="button primary">
              Explore Packages
            </a>

            <a href="#contact" className="button secondary">
              Plan Your Event
            </a>
          </div>
        </div>

        <div className="scrollHint">
          <span>DISCOVER</span>
          <div />
        </div>
      </section>

      <section className="intro">
        <p className="sectionLabel">THE L&Y EXPERIENCE</p>

        <h2>
          Your moment.
          <br />
          <em>Our canvas.</em>
        </h2>

        <p className="introText">
          From intimate showers to milestone celebrations, L&Y Events
          transforms your vision into a beautifully styled experience.
          Every detail is thoughtfully selected to create a setting
          that feels completely yours.
        </p>
      </section>

      <section className="eventsSection" id="events">
        <div className="sectionHeading">
          <div>
            <p className="sectionLabel">CELEBRATE WITH US</p>
            <h2>Made for your <em>moments.</em></h2>
          </div>

          <p>
            Choose your celebration and let us create the setting.
          </p>
        </div>

        <div className="eventGrid">
          {events.map((event, index) => (
            <article className={`eventCard event${index + 1}`} key={event.title}>
              <div className="eventOverlay" />
              <div className="eventContent">
                <span>0{index + 1}</span>
                <h3>{event.title}</h3>
                <p>{event.subtitle}</p>
                <a href="#contact">Explore →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="packagesSection" id="packages">
        <div className="centerHeading">
          <p className="sectionLabel">OUR COLLECTIONS</p>
          <h2>Choose your <em>experience.</em></h2>
          <p>
            Beautiful foundations designed to be personalized for your celebration.
          </p>
        </div>

        <div className="packageGrid">
          {packages.map((pkg) => (
            <article
              className={`packageCard ${pkg.popular ? "featured" : ""}`}
              key={pkg.name}
            >
              {pkg.popular && <div className="popular">MOST LOVED</div>}

              <p className="packageName">{pkg.name}</p>

              <div className="price">
                <span>FROM</span>
                <strong>${pkg.price}</strong>
              </div>

              <p className="packageDescription">{pkg.description}</p>

              <div className="line" />

              <ul>
                {pkg.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="packageButton">
                Select {pkg.name}
              </a>
            </article>
          ))}
        </div>

        <p className="priceNote">
          Packages are starting prices. Final pricing varies by design,
          location and customization.
        </p>
      </section>

      <section className="bespoke">
        <div>
          <p className="sectionLabel light">SOMETHING EXTRAORDINARY?</p>
          <h2>
            Let&apos;s create something
            <br />
            <em>entirely yours.</em>
          </h2>
        </div>

        <div className="bespokeRight">
          <p>
            Weddings, larger celebrations and one-of-a-kind installations
            deserve a completely custom approach.
          </p>
          <a href="#contact">REQUEST A BESPOKE QUOTE →</a>
        </div>
      </section>

      <section className="addons">
        <div className="sectionHeading">
          <div>
            <p className="sectionLabel">MAKE IT YOURS</p>
            <h2>The finishing <em>touches.</em></h2>
          </div>
        </div>

        <div className="addonGrid">
          {addons.map(([name, price]) => (
            <div className="addon" key={name}>
              <span>{name}</span>
              <strong>{price}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="aboutImage">
          <div className="aboutMonogram">L&Y</div>
        </div>

        <div className="aboutContent">
          <p className="sectionLabel">MEET L&Y</p>
          <h2>
            Two sisters.
            <br />
            <em>One creative vision.</em>
          </h2>

          <p>
            Founded by sisters Lida and Yalda, L&Y Events was created from
            a shared love of beautiful spaces and meaningful celebrations.
          </p>

          <p>
            We believe your event should feel personal, effortless and
            unforgettable—from the first idea to the final detail.
          </p>

          <a href="#contact">START YOUR STORY →</a>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="sectionLabel light">LET&apos;S CELEBRATE</p>

        <h2>
          Your beautiful event
          <br />
          <em>starts here.</em>
        </h2>

        <p>
          Tell us a little about your celebration and we&apos;ll help bring
          your vision to life.
        </p>

        <a
          className="contactButton"
          href="mailto:hello@lyevents.ca?subject=L%26Y%20Events%20Quote%20Request"
        >
          REQUEST A QUOTE
        </a>

        <p className="contactSmall">Serving Ottawa & surrounding areas</p>
      </section>

      <footer>
        <div>
          <strong>L&Y</strong>
          <span>EVENTS</span>
        </div>

        <p>Event Styling · Décor · Rentals</p>
        <p>Ottawa, Ontario</p>
      </footer>
    </main>
  );
}
