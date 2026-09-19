import "./globals.css";

export const metadata = {
  title: "L&Y Events | Event Styling, Décor & Rentals",
  description:
    "Luxury event styling, décor and rentals for baby showers, bridal showers, engagements, birthdays and celebrations in Ottawa, Ontario.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
