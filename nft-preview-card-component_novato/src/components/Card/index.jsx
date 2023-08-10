import { useState } from "react";

export default function Card() {
  const [displayStyle, setDisplayStyle] = useState(false);

  return (
    <div className="card">
      <div className="card__container-product-image">
        <img
          className="container-product-image__img"
          src="public/image-equilibrium.jpg"
          alt="/"
          onMouseOver={() => setDisplayStyle(true)}
        />
        {displayStyle === true ? (
          <div
            className="container-product-image__icon-view"
            onMouseOut={() => setDisplayStyle(false)}
          >
            <img src="public/icon/icon-view.svg" alt="" />
          </div>
        ) : null}
      </div>
      <div className="card__product-information">
        <h1 className="product-information__title">Equilibrium #3429</h1>

        <p className="product-information__paragraphy">
          Our Equilibrium collection promotes <br /> balance and calm.
        </p>

        <div className="product-information__additional-information">
          <span className="additional-information__container-value">
            <img src="public/icon/icon-ethereum.svg" alt="" /> 0.041 eht
          </span>
          <span className="additional-information__day">
            <img src="public/icon/icon-clock.svg" alt="/" /> 3 days left
          </span>
        </div>

        <div className="product-information__container-creator">
          <img
            className="container-creator__img-creator"
            src="public/image-avatar.png"
            alt="/"
          />
          <span className="container-creator__name">
            <span className="name--color">Creation of </span> Jules Wyvern
          </span>
        </div>
      </div>
    </div>
  );
}
