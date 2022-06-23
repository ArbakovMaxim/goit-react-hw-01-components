export const ProfileDescription = ({ stats }) => {
  return (
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity"></span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity"></span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity"></span>
      </li>
    </ul>
  );
};
