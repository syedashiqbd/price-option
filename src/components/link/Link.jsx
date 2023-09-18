/* eslint-disable react/prop-types */
const Link = ({ route }) => {
  return (
    <li className="bg-gray-300 rounded py-1 px-3 mb-2">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
