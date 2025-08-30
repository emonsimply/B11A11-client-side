import { FaGlobe, FaHeadset, FaStar } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaGlobe className="text-4xl text-teal-500" />,
      title: "Worldwide Destinations",
      desc: "Explore top travel spots around the globe with our trusted packages.",
    },
    {
      id: 2,
      icon: <FaHeadset className="text-4xl text-teal-500" />,
      title: "24/7 Support",
      desc: "Get assistance anytime, anywhere with our dedicated support team.",
    },
    {
      id: 3,
      icon: <FaStar className="text-4xl text-teal-500" />,
      title: "Top Rated Guides",
      desc: "Enjoy your trip with professional and highly rated travel guides.",
    },
  ];

  return (
    <section className=" py-16 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.id}
              className="bg-green-50 rounded-xl p-8 shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
