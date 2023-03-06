import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'As Always Imani',
    Svg: require('static\img\asalwaysimani_wordmark.svg').default,
    description: (
      <>
        Imani can be found doing all the things all over the internet, such as game development & design projects, multidisciplinary creative writing works, live lets plays of solo tabletop board games, and then some. They are in a long-term emotional relationship with Pop Punk. You can find them live streaming on twitch and then archived on youtube.
      </>
    ),
  }
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
