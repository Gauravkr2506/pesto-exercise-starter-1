import React, { Component } from "react";

export default class GroceryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { item_list: [], input_text: "" };
  }

  inptTextHandler = e => {
    this.setState({ input_text: e.target.value });
  };

  handleEnterClick = e => {
    if (e.keyCode === 13 && e.target.value !== "") {
      this.addGroceryItem();
    }
  };

  addGroceryItem = () => {
    const { item_list, input_text } = this.state;
    let item_index = item_list.findIndex(item => item.name === input_text);
    if (item_index === -1) {
      item_list.unshift({ name: input_text, count: 1 });
    } else {
      item_list[item_index].count++;
    }
    this.setState({ item_list: item_list, input_text: "" });
  };

  clearAllItem = () => {
    this.setState({ item_list: [], input_text: "", click: false });
  };

  changeItemClickState = item_name => {
    const { item_list } = this.state;
    let item_index = item_list.findIndex(item => item.name === item_name);
    item_list[item_index].click = !item_list[item_index].click;
    this.setState({ item_list });
  };

  removeItem = (e, item_name) => {
    const { item_list } = this.state;
    e.stopPropagation();
    let item_index = item_list.findIndex(item => item.name === item_name);
    item_list.splice(item_index, 1);
    this.setState({ item_list });
  };

  render() {
    const { item_list, input_text } = this.state;
    let purchased_items = item_list
      .filter(item => item.click)
      .map(itm => itm.name)
      .join(", ");
    return (
      <div>
        <div style={{ display: "flex", margin: 20 }}>
          <label for="male">Item Name: </label>
          <input
            onKeyUp={this.handleEnterClick}
            value={input_text}
            onChange={this.inptTextHandler}
            type="text"
            style={{ marginLeft: 10, marginRight: 20 }}
          />
          <button onClick={this.addGroceryItem} disabled={input_text === ""}>
            Add Grocery Item
          </button>

          <button
            style={{ marginLeft: 20 }}
            onClick={this.clearAllItem}
            disabled={item_list.length === 0}
          >
            Clear All Item
          </button>
          {!!purchased_items.length && (
            <div style={{ marginLeft: 20, color: "#f00" }}>
              {purchased_items} has been purchased.
            </div>
          )}
        </div>
        <div style={{ margin: 20 }}>
          {item_list.map((item, index) => (
            <div
              onClick={() => this.changeItemClickState(item.name)}
              key={item.name + index}
              style={{
                display: "flex",
                marginTop: 3,
                backgroundColor: item.click ? "#f00" : "#000",
                color: "#ffa500",
                padding: 10
              }}
            >
              <p> Item Name : {item.name}</p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p>Item Count : {item.count}</p>
              <button
                onClick={e => this.removeItem(e, item.name)}
                style={{ marginLeft: "auto" }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
