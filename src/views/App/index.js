import React, { lazy, Suspense } from 'react';
import { Layout, Row, Col } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from 'react-router-dom';
import Fallback from '../../components/Fallback';

const Scraper = lazy(() => import('../Scraper'));

const App = () => {
  return (
    <Layout style={{ background: 'transparent', overflow: 'hidden' }}>
      <Layout.Content>
        <Row>
          <Col sm={{ span: 20, offset: 2 }}>
            <Suspense fallback={<Fallback />}>
              <Router>
                <HashRouter>
                  <Switch>
                    <Route
                      exact
                      path='/:index?'
                      render={props => <Scraper />}
                    />
                  </Switch>
                </HashRouter>
              </Router>
            </Suspense>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default App;
