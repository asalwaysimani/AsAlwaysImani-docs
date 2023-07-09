import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'As Always Imani',
    Svg: require('@site/static/img/AsAlwaysImani_Homepage_v001.png').default,
    description: (
      <>
      Analog and digital game development and design projects, original creative writing, and more. 
      </>
    ),
  },
  {
    title: 'Margaret Catter Development',
    Svg: require('@site/static/img/MargaretCatterDev_Homepage_v001.png').default,
    description: (
      <>
      A highly adaptable collaborative storyteller focused on niche stories & creating full and engaging worlds. With a friendly & personable attitude that excels at solo and team projects.</>
    ),
  },
  // {
  //   title: 'Mnemosyne Ashwell',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //      The subheading for all original fiction writing projects.
  //     </>
  //   ),
  // },
  {
    title: 'She Be Spittin Thou',
    Svg: require('@site/static/img/SheBeSpittinThou_Homepage_v001.png').default,
    description: (
      <>
      Things that need to be said and we're bringing back personal blogs to say them.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
