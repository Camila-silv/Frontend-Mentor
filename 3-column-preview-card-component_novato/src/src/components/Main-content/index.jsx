import Card from "../Card";

export default function MainContent() {
  const content = [
    {
      icon: "public/icon-sedans.svg",
      title: "Sedans",
      paragraphy:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      bg: "hsl(31, 77%, 52%)",
      color: "hsl(31, 77%, 52%)",
    },
    {
      icon: "public/icon-suvs.svg",
      title: "SUVs",
      paragraphy:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      bg: "hsl(184, 100%, 22%)",
      color: "hsl(184, 100%, 22%)",
    },
    {
      icon: "public/icon-luxury.svg",
      title: "Luxury",
      paragraphy:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      bg: "hsl(179, 100%, 13%)",
      color: "hsl(179, 100%, 13%)",
    }
  ];

  return (
    <main className="main-content">
      <section className="main-content__plans-section">

        

        {content.map((card) => {
          return (
            <Card title={card.title} paragraphy={card.paragraphy} icon={card.icon} bg={card.bg} color={card.color} key={card.title}/>
          )
        })}
       
       
        
      </section>
    </main>
  );
}
