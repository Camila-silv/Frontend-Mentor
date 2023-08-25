import { Section, SkillPanel, Panel } from "../index";

export default function MainContent() {
  const resultData = [
    {
      icon: "icone",
      identificationTag: "Reaction",
      percentage: 80,
    },
    {
      icon: "icone",
      identificationTag: "Memory",
      percentage: 92,
    },
    {
      icon: "icone",
      identificationTag: "Verbal",
      percentage: 61,
    },
    {
      icon: "icone",
      identificationTag: "Visual",
      percentage: 72,
    },
  ];

  return (
    <main className="main-content">
      <Section className="main-content__main-section">
        <>
          <Panel
            classContainer="main-section__container-your-result"
            classTitle="container-your-result__title"
            title="Your Result"
          >
            <>
              <div className="container-your-result__container-score">
                <span className="container-score__points">76</span>
                <span className="container-score__maximum-points">of 100</span>
              </div>

              <span className="container-your-result__lbl-result">Great</span>

              <p className="container-your-result__parag">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </>
          </Panel>

          <Panel
            classContainer="main-section__container-skills"
            classTitle="container-skills__title"
            title="Summary"
          >
            <>
              <ul className="container-skills__result-skills">
                {resultData.map((skill) => {
                  return (
                    <SkillPanel
                      icon={skill.icon}
                      identificationTag={skill.identificationTag}
                      percentage={skill.percentage}
                      key={skill.identificationTag}
                    />
                  );
                })}
              </ul>

              <button className="container-skills__button">Continue</button>
            </>
          </Panel>
        </>
      </Section>
    </main>
  );
}
