import BenefitItem from './BenefitItem';

const BenefitsList: React.FC = () => (
  <div className="pl-0 py-8 lg:px-8">
    <h2 className=" text-3xl font-bold mb-8">What's the point of summarizeing the comments?</h2>
    <BenefitItem text="Save Time scrolling" />
    <BenefitItem text="Skip hateful comments" />
    <BenefitItem text="Get the public opinion on the video in seconds" />
  </div>
);

export default BenefitsList;