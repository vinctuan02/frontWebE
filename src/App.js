import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

function App() {

  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    const res = await axios.get(`http://localhost:8080/api/product/get-all-details-product`)
    // console.log("res: ", res)
    return res.data
  }

  // const query = useQuery({ queryKey: 'todos', queryFn: fetchApi })
  // console.log("query: ", query)

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
