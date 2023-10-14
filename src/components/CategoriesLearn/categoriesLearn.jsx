import { Link } from "react-router-dom";
import categoriesLearn from "../util/CategoriesLearn/categoriesLearn";
import "./categoriesLearn.css";

function CategoriesLearn() {
  return (
    <div className="container_categories_learn">
      <h2 className="header_categories_learn">Tópicos</h2>
      <section className="section_categories_learn">
        {
          categoriesLearn.map((category) => (
            <Link
              className="link-topics"
              key={category.name}
              to={category.path}
            >
              {category.name}
            </Link>
          ))
        }
      </section>
    </div>
  );
}
export default CategoriesLearn;
