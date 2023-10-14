import AsideMainPage from "../../components/AsideMainPage/asideMainPage";
import CategoriesLearn from "../../components/CategoriesLearn/categoriesLearn";
import Header from "../../components/Header/header";
import "./mainPage.css";

function MainPage() {
  return (
    <div className="container_main_page">
      <Header />
      <section className="container_main_section">
        <CategoriesLearn />
        <AsideMainPage />
      </section>
    </div>
  );
}
export default MainPage;
