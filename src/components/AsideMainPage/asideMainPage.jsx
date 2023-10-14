import "./asideMainPage.css";
import dataNotice from "./data/dataNotice";

function AsideMainPage() {
  return (
    <div className="container_aside_main_page">
      <header className="header_aside_main_page">
        <h1>Notícias</h1>
      </header>
      <section className="section_main_notice">
        {
          dataNotice.map((notice) => (
            <div
              className="container_notice"
              key={notice.title}
            >
              <img src={notice.img} alt={notice.title} />
              <aside>
                <h4>{notice.subTitle}</h4>
                <h1>{notice.title}</h1>
                <h5>{notice.paragraph}</h5>
              </aside>
            </div>
          ))
        }
        <div>
        </div>
      </section>
    </div>
  );
}
export default AsideMainPage;
