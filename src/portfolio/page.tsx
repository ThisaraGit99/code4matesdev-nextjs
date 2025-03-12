import PortfolioCard from '../../components/PortfolioCard';
import SectionTitle from '../../components/SectionTitle';

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <SectionTitle title="Our Portfolio" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PortfolioCard title="Project 1" description="Description of the project" />
        <PortfolioCard title="Project 2" description="Description of the project" />
        <PortfolioCard title="Project 3" description="Description of the project" />
      </div>
    </div>
  );
}
