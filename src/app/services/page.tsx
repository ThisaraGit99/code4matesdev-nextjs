import SectionTitle from '../../components/SectionTitle';

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <SectionTitle title="Our Services" />
      <div className="space-y-8">
        <div className="service-item">
          <h3 className="text-2xl font-semibold">Web Development</h3>
          <p className="text-lg">We build responsive, modern websites that deliver an excellent user experience.</p>
        </div>
        <div className="service-item">
          <h3 className="text-2xl font-semibold">Mobile Apps</h3>
          <p className="text-lg">Custom mobile applications for both iOS and Android to take your business on the go.</p>
        </div>
        <div className="service-item">
          <h3 className="text-2xl font-semibold">Custom Software</h3>
          <p className="text-lg">Tailored software solutions to meet your business's specific needs.</p>
        </div>
      </div>
    </div>
  );
}
