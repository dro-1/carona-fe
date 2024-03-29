import car from "./../assets/images/sedan.png";

export const CaronaCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="bg-[#E2F4EA] p-12 rounded-3xl mb-8">
      <h3 className="text-3xl text=[#0A4650]">{title}</h3>
      <a className="text-[#319a64] text-lg mt-6 block">Learn More</a>
      <img className="relative left-[28px]" src={car} />
    </div>
  );
};
