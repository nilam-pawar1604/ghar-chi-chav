import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function CategoryCard({ image, title, subtitle }) {
  return (
    <Link to="/products" className="category-card">
      <div className="category-image">
        <img src={image} alt={title} />
      </div>

      <div className="category-content">
        <span>{subtitle}</span>

        <h3>{title}</h3>

        <strong>
          Explore <FiArrowRight />
        </strong>
      </div>
    </Link>
  );
}

export default CategoryCard;