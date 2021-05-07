import * as React from "react";
import { ButtonGroup } from "@atlaskit/button";
import Button from "@atlaskit/button";
import ModalDialog, { ModalTransition } from "@atlaskit/modal-dialog";
import Toggle from "@atlaskit/toggle";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResultPopup: false
    };
  }

  sendPO = () => {
    this.setState({ showResultPopup: true });
  };

  hideResultPopup = () => {
    this.setState({ showResultPopup: false, isError: false });
  };

  render() {
    let i = 0;
    let j = 0;
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return (
      <div>
        <div id="contentId" className="content">
          <div className="section">
            <div className="section">
              <div
                className="row"
                style={{ float: "right", marginTop: "1rem" }}
              >
                <ButtonGroup>
                  <Button onClick={() => this.sendPO()}>Send</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
        <ModalTransition>
          {this.state.showResultPopup && (
            <ModalDialog components={{}}>
              <table className="accessory-table">
                <tbody>
                  {arr.map((num) => {
                    return (
                      <tr key={num}>
                        <td>
                          <Toggle />
                        </td>
                        <td>{`Some text to be displayed ${num}`}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </ModalDialog>
          )}
        </ModalTransition>
      </div>
    );
  }
}

export default Example;
