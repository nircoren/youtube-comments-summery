interface ProcessStepProps {
    number: string;
    title: string;
    description: string;
  }
  
  const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
    <div className="flex items-start mb-4 md:mb-6">
      <div className="flex-shrink-0 w-6 h-6 bg-purple text-white rounded-full flex items-center justify-center text-md mr-4">
      {number}
    </div>
      <div>
        <h3 className="mb-0 text-white font-normal text-lg">{title}</h3>
        <p className="text-gray-400 font-normal">{description}</p>
      </div>
    </div>
  );

const ProcessList = () => (
  <div className="pl-0 py-8 lg:p-8">
    <h2 className="text-white text-3xl font-bold mb-8">How to use Summarize youtube comments</h2>
    <ProcessStep
      number="1"
      title="Install Summarize YT comments"
      description=""
    />
    <ProcessStep
      number="2"
      title="Register using Google account"
      description=""
    />
    <ProcessStep
      number="3"
      title="Click a youtube video"
      description=""
    />
  </div>
);

export default ProcessList;