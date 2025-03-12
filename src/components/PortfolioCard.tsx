export default function PortfolioCard({ title, description }: { title: string, description: string }) {
    return (
      <div className="bg-off-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  