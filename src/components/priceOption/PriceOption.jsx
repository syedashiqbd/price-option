import PropTypes from 'prop-types';
import Features from '../features/Features';

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="flex flex-col min-h-[400px] bg-blue-600 rounded-lg text-white p-5 ">
      <h2 className="text-center ">
        <span className="text-5xl font-bold">{price}</span>
        <span>/per month</span>
      </h2>
      <h2 className="text-3xl text-center  font-bold mt-4 mb-7">{name}</h2>

      <div className="flex-grow">
        {features.map((feature, idx) => (
          <Features key={idx} feature={feature}></Features>
        ))}
      </div>
      <button className="bg-white text-black py-1 w-full rounded font-bold ">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
