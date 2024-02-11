// 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
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
      <div className="container ikiz">
        <div>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle"><span className="type">{siteConfig.tagline}</span></p>
          
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Gezmelik 5 dakika ⏱️
            </Link>
          </div>
        </div>
        <div className='resim'>
          <img src={require('@site/static/img/bakabaka.png').default} />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="container" style={{textAlign: "center"}}>
          <a href='/discord'>
            <img src={require('@site/static/img/Türkçe-Yazılım-Konatı-Discord.png').default}/>
            <br />
            Türkçe Yazılım Konatı Discord Sunucusuna Katılın.
            <br />
            <br />
          </a>
        </div>
      </main>
    </Layout>
  );
}
