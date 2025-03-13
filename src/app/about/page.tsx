const teamMembers = [
  { name: "John Doe", role: "CEO", img: "/images/john.jpg" },
  { name: "Jane Smith", role: "CTO", img: "/images/jane.jpg" },
];

const TeamSection = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-center text-3xl font-bold mb-8 dark:text-white">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
            <img src={member.img} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold dark:text-white">{member.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
