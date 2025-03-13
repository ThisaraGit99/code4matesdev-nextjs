import { useState } from "react";

const projects = [
  { title: "Project A", category: "Web" },
  { title: "Project B", category: "Mobile" },
  { title: "Project C", category: "UI/UX" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-center text-3xl font-bold dark:text-white">Our Portfolio</h2>
      <div className="flex justify-center space-x-4 my-4">
        {["All", "Web", "Mobile", "UI/UX"].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-md ${filter === cat ? "bg-teal text-white" : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map(proj => (
          <div key={proj.title} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold dark:text-white">{proj.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{proj.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
