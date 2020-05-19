/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

import {getAllFunds} from 'services/requests'



class Tables extends React.Component {

  constructor() {
    super()
    this.state = {funds: []};
  }

  componentWillMount() {
    this.getData()
  }

  getData() {
    getAllFunds().then((res) => {
      this.setState({
        funds: res
      });
    })
  }


  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Current OPCVMs in Database</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>ISIN</th>
                        <th>Name</th>
                        <th>Manager</th>
                        <th>Type</th>
                        <th>Placement Network</th>
                        <th>Management Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.funds.map(fund => (
                      <tr>
                      <td>{fund.ISIN}</td>
                      <td>{fund.NAME}</td>
                      <td>{fund.MANAGER}</td>
                      <td>{fund.INV_TYPE}</td>
                      <td>{fund.PLACEMENT_NETWORK}</td>
                      <td>{fund.MGT_RATE} %</td>
                    </tr>
                    ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
