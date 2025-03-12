export default function ServicesGrid() {
    return (
      <div className="py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-off-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Web Development</h2>
            <p>Responsive, modern websites built to meet your business needs.</p>
          </div>
          <div className="bg-off-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Mobile Apps</h2>
            <p>Custom mobile apps that work seamlessly on iOS and Android.</p>
          </div>
          <div className="bg-off-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Custom Software</h2>
            <p>Tailored software solutions designed to solve complex business challenges.</p>
          </div>
        </div>
      </div>
    );
  }
  