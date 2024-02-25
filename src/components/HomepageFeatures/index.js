import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'As Always Imani',
    Svg: require('@site/static/img/asalwaysimani_wordmark.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Margaret Catter Development',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A highly adaptable collaborative storyteller focused on niche stories & creating full and engaging worlds. With a friendly & personable attitude that excels at solo and team projects.
      </>
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
        <Heading as="h3">{title}</Heading>
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
