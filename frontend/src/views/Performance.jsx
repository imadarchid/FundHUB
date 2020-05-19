import React from "react";

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// reactstrap components
import {
  Alert,
  Row,
  Col,
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody,
  Button
} from "reactstrap";

import {getAllFunds, getFundPerformance} from "services/requests"

class Performance extends React.Component {
    constructor() {
        super()
        this.state = {
            funds: [], 
            performance: [],
            isLoading: true
        };
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

      getPerformance = (event, values) => {
        getFundPerformance(values.ISIN).then((res) => {
            this.setState({
                performance: res,
                isLoading: false
              });
        })
      }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
                <Alert color="danger">
                    This is a still a work in progress!
                </Alert>
            </Col>
            <Col md="12">
                <Autocomplete
                    id="combo-box-demo"
                    options={this.state.funds}
                    getOptionLabel={(fund) => fund.NAME}
                    onChange={this.getPerformance}
                    style={{ width: 300, alignSelf: 'center' }}
                    renderInput={(params) => <TextField {...params} label="Select a Fund" variant="outlined" />}
                />
            </Col>
            
            <Col md="12">
                <br></br>
                {!this.state.isLoading &&
                <Card>
                        <CardBody>
                        <CardTitle>Yesterday's performance</CardTitle>
                        <CardSubtitle><b>VL:</b> {this.state.performance.VL}</CardSubtitle>
                        <CardSubtitle><b>AN:</b> {this.state.performance.AN}</CardSubtitle>
                        </CardBody>
                    </Card>
                }
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Performance;