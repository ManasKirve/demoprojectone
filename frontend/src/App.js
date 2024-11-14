import React from 'react'
import ProductTiles from './components/ProductTiles'
import UserTable from './components/Usertable'
import SalesChart from './components/SalesChart'
import SalesBarChart from './components/Bargraph'
import './App.css';

const App = () => {
  return (
    <div>
      <div className='container pt-3'>

        <div>
          <h1 className='text-center'>Products</h1>
          <ProductTiles />

        </div>

        <div className='my-5'>

          <UserTable />
        </div>


        <div>
        <h1 className="text-center mb-4">Sales</h1>
          <div className="row">
            <div className="col-md-6 mb-4">

              <div className="card-body">
                <SalesChart />
              </div>

            </div>
            <div className="col-md-6 mb-4">


              <div className="card-body">
                <SalesBarChart />
              </div>

            </div>
          </div>
  
        </div>
        


      </div>



    </div>
  )
}

export default App
