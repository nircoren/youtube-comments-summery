import CheckIcon from "../Common/CheckIcon";

interface BenefitItemProps {
  text: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ text }) => (
  <div className="flex items-center mb-4">
    <div className="flex-shrink-0 w-6 h-6 bg-purple text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
      {CheckIcon}
    </div>
    <div className="text-white">{text}</div>
  </div>
);

export default BenefitItem;
