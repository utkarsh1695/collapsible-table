import React, { Component } from 'react'

export default class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    }
  }

  toggleExpander = () => this.setState({ isExpanded: !this.state.isExpanded });

  getExpanderButton = () => {
    const { subRowData } = this.props;
    let buttonText = this.state.isExpanded ? '-' : '+';
    if (subRowData.length > 0) return <button onClick={this.toggleExpander}>{buttonText}</button>;
    else return <></>;
  }

  getSubRows = () => {
    const { subRowData } = this.props;
    return subRowData.map((data, index) => (
      <tr className="sub-row" key={`subrow-${index}`}>
        <td></td>
        <td>{data.question}</td>
        <td>{data.answer}</td>
      </tr>
    ))
  }

  render() {
    const { isExpanded } = this.state;
    const { question, answer, key } = this.props;

    return (
      <>
        <tr className="main-row"  key={key}>
          <td>{this.getExpanderButton()}</td>
          <td>{question}</td>
          <td>{answer}</td>
        </tr>
        {
          isExpanded && this.getSubRows()
        }
      </>
    )
  }
}
