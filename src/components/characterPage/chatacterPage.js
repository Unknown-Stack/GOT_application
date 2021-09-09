import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import gotService from "../../services/gotService";

export default class CharacterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChar: 130,
      error: false,
    };
  }
  gotService = new gotService();
  componentDidCatch(error, errorInfo) {
    console.log("error");
    this.setState({
      error: true,
    });
  }
  onCharSelected = (id) => {
    this.setState({ selectedChar: id });
  };
  render() {
    if (this.state.error) {
      return <h1>Error</h1>;
    }
    return (
      <Row>
        <Col md="6">
          <ItemList
            onCharSelected={this.onCharSelected}
            getData={this.gotService.getAllCharacters}
          />
        </Col>
        <Col md="6">
          <CharDetails charId={this.state.selectedChar} />
        </Col>
      </Row>
    );
  }
}
