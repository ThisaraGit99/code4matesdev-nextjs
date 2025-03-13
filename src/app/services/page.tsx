const services = [
  { title: "Web Development", desc: "Modern, responsive web applications." },
  { title: "Mobile Development", desc: "Native & hybrid mobile apps." },
  { title: "UI/UX Design", desc: "Creative and engaging designs." },
];

const ServicesGrid = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <h2 className="text-center text-3xl font-bold mb-8 dark:text-white">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div key={service.title} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold dark:text-white">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
