interface ProcessStepProps {
    number: string;
    title: string;
    description: string;
  }
  
  const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
    <div className="flex items-start mb-8">
      <div className="flex-shrink-0 w-8 h-8 bg-purple text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
        {number}
      </div>
      <div>
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );

const ProccessList = () => (
  <div className="p-8">
    <h2 className="text-white text-3xl font-bold mb-8">Our Process</h2>
    <ProcessStep
      number="1"
      title="Login to google account"
      description="lorem"
    />
    <ProcessStep
      number="2"
      title="Click a youtube video"
      description="lorem"
    />
    <ProcessStep
      number="3"
      title="See comments summery"
      description="lorem"
    />
  </div>
);

export default ProccessList;