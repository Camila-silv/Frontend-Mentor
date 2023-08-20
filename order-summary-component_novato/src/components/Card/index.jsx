export default function Card() {
  return (
    <div className="card">
      <div className="card__container-header"></div>
      <div className="card__container-body">
        <h2 className="container-body__title">Order Summary</h2>
        <p className="container-body__paragraphy">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="container-body__plans-container">
          <div className="plans-container__chosen-plan">
            <div className="chosen-plan__icon">
              <img src="public/icon-music.svg" alt="icone de som" />
            </div>
            <div className="chosen-plan__plan">
              <span className="plan__type">Annual Plan</span>
              <span className="plan__value">$59.99/year</span>
            </div>
          </div>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="plans-container__change-plan"
          >
            Change
          </a>
        </div>
        <div className="container-body__container-buttons">
          <button className="container-buttons__payment-button default-button">
            Proceed to Payment
          </button>
          <button className="container-buttons__cancel-order-button default-button">Cancel Order </button>
        </div>
      </div>
    </div>
  );
}
