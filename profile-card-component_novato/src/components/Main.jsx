import { Card } from "./index";

export default function Main() {
  return (
    <main className="main-content">
      <img
        src="public/bg-pattern-top.svg"
        alt=""
        className="main-content__img main-content__img--top"
      />
      <Card name="Victor Crest" age="26" city="London"/>
      <img
        src="public/bg-pattern-bottom.svg"
        alt=""
        className="main-content__img main-content__img--bottom"
      />
    </main>
  );
}
