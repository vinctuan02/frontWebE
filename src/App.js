import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route key={index} path={route.path} element={
                <Layout>
                  {route.element}
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
