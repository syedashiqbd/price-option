import PropTypes from 'prop-types';
import { HiCheckCircle } from 'react-icons/hi2';

const Features = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center gap-2 ">
        <HiCheckCircle></HiCheckCircle>
        {feature}
      </p>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.object,
};

export default Features;
