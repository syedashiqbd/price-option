import PriceOption from '../priceOption/priceOption';

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: 'Basic  Membership',
      price: '$29.99',
      features: [
        'Access to  facilities during standard hours',
        'Access to basic fitness equipment',
        'Locker room access',
      ],
    },
    {
      id: 2,
      name: 'Premium Membership',
      price: '$49.99',
      features: [
        'Unlimited access to  facilities',
        'Access to all fitness classes',
        'Access to personal trainers',
        '24/7  access',
        'Sauna and steam room access',
      ],
    },
    {
      id: 3,
      name: 'Family  Membership',
      price: '$79.99',
      features: [
        'Access for the entire family',
        'Access to  facilities during standard hours',
        'Access to family fitness classes',
        'Discounts on additional family members',
      ],
    },
    {
      id: 4,
      name: 'Student  Membership',
      price: '$19.99',
      features: [
        'Access to  facilities during standard hours',
        'Valid student ID required',
        'Access to student fitness classes',
      ],
    },
    {
      id: 5,
      name: 'Senior  Membership',
      price: '$24.99',
      features: [
        'Access to  facilities during standard hours',
        'Discounts for senior citizens',
        'Access to senior fitness classes',
      ],
    },
  ];

  return (
    <div>
      <h1 className="md:text-5xl text-3xl font-bold text-center mb-10">
        Best Price in the Town
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
