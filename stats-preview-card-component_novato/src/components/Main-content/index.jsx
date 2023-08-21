export default function MainContent() {
  return (
    <main className="main-content">
      <section className="main-content__container-card">
        <div className="container-card__card-header">
            <img src="" alt="/"/>
        </div>
        <div className="container-card__card-body">
          <h1 className="card-body__title">
            Get <span className="title--color">insights</span> that help your business grow.
          </h1>
          <p className="card-body__paragraphy">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.{" "}
          </p>

          <ul className="card-body__list-of-achievements">
            <li className="list-of-achievements__items">
              <span className="items--bold">10k+</span> companies
            </li>
            <li className="list-of-achievements__items">
              <span className="items--bold">314</span> templates
            </li>
            <li className="list-of-achievements__items">
              <span className="items--bold">12m+</span> queries
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
