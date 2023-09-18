/* eslint-disable react/prop-types */
const Link = ({ route }) => {
  return (
    <li className="hover:bg-blue-900">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
