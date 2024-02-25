import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import './fonts/CloneRounded/CloneRounded-bd.otf'
import './fonts/CloneRounded/CloneRounded-eb.otf'
import './fonts/CloneRounded/CloneRounded-el.otf'
import './fonts/CloneRounded/CloneRounded-lt.otf'
import './fonts/CloneRounded/CloneRounded-me.otf'
import './fonts/CloneRounded/CloneRounded-rg.otf'
import './fonts/CloneRounded/CloneRounded-sb.otf'
import './fonts/CloneRounded/CloneRounded-th.otf'

const FeatureList = [
  {
    title: 'As Always Imani',

    Svg: require('@site/static/img/AsAlwaysImani_Docusaurus_dark.svg').default,
    description: (
      <>
        Digital & analong game development and design projects, as well as original creative writing works, and much more.

      </>
    ),
  },
  {
    title: 'Margaret Catter Development',

    Svg: require('@site/static/img/MargaretCatterDev_docusaurus.svg').default,

    description: (
      <>
      A highly adaptable collaborative storyteller focused on niche stories & creating full and engaging worlds. With a friendly & personable attitude that excels at solo and team projects.</>
    ),
  },
   {
     title: 'Ionie Annette',
     Svg: require('@site/static/img/IonieAnnette_docusaurus.svg').default,
     description: (
       <>
        The creative pseudonym for original prose works in various narrative formats.
       </>
     ),
   },
  {
    title: 'She Be Spittin Thou',

    Svg: require('@site/static/img/SheBeSpittinThough_docusaurus.svg').default,

    description: (
      <>
      Things that need to be said and we're bringing back personal blogs baby to say them.
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
        {/* <h3>{title}</h3> */}
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
