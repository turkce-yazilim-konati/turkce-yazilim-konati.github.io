// 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
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GitHubDiscussions from '../components/GitHubDiscussions';

function Tartishmalar() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Router>
            <div>
                <Route path="/tartishmalar/" exact component={GitHubDiscussions} />
            </div>
        </Router>
    )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

      <main>
        <div className="container">
        <Tartishmalar />
        </div>
      </main>
    </Layout>
  );
}


