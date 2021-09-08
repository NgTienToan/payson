import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Tôi đẹp trai',
    Svg: require('../../static/img/handsome.svg').default,
    description: (
      <>
        Yep tôi được thừa hưởng sự xinh trai từ cha mẹ thân yêu của tôi 💕
      </>
    ),
  },
  {
    title: 'Tôi tài giỏi',
    Svg: require('../../static/img/talent.svg').default,
    description: (
      <>
        Chưa ai nói tôi tài giỏi <br></br>
        Nhưng tôi cảm thấy mình thật tài năng 👨🏽‍💻
      </>
    ),
  },
  {
    title: 'Tôi hòa đồng và thân thiện',
    Svg: require('../../static/img/friendly.svg').default,
    description: (
      <>
        Tôi đẹp trai nhưng rất thân thiện và dễ gần nha 👫
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
