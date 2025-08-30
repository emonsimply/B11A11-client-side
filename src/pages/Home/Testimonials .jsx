

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      feedback:
        "The trip was amazing! The guide was super friendly and helpful throughout the journey.",
      image: "#",
    },
    {
      id: 2,
      name: "Michael Lee",
      feedback:
        "Great service and well-organized packages. Highly recommend for stress-free travel.",
      image: "#",
    },
    {
      id: 3,
      name: "Emma Davis",
      feedback:
        "Loved every bit of the Maldives trip! The price was reasonable and worth it.",
      image: "#",
    },
  ];

  return (
    <section className="bg-blue-100 py-16 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <img
                src={r.image}
                alt={r.name}
                className="w-20 h-20 rounded-full mx-auto border-4 border-teal-500"
              />
              <p className="mt-4 text-gray-600 italic">"{r.feedback}"</p>
              <h3 className="mt-3 font-semibold text-gray-800">{r.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
