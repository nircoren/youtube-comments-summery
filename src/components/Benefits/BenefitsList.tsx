import BenefitItem from './BenefitItem';

const BenefitsList: React.FC = () => (
  <div className="p-8">
    <h2 className="text-white text-3xl font-bold mb-8">What Benefit You Will Get</h2>
    <BenefitItem text="Save Time scrolling" />
    <BenefitItem text="Skip hateful comments" />
    <BenefitItem text="Investment Report Every Month" />
    <BenefitItem text="Saving Money For The Future" />
    <BenefitItem text="Online Transaction" />
  </div>
);

export default BenefitsList;