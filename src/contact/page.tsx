import ContactForm from '../../components/ContactForm';
import SectionTitle from '../../components/SectionTitle';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <SectionTitle title="Contact Us" />
      <ContactForm />
    </div>
  );
}
