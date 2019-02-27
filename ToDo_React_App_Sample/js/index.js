var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var TodoApp = function (_React$Component) {_inherits(TodoApp, _React$Component);
  function TodoApp(props) {_classCallCheck(this, TodoApp);var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this,
    props));

    _this.state = {
      items: [],
      text: "" };


    _this.handleTextChange = _this.handleTextChange.bind(_this);
    _this.handleAddItem = _this.handleAddItem.bind(_this);
    _this.markItemCompleted = _this.markItemCompleted.bind(_this);
    _this.handleDeleteItem = _this.handleDeleteItem.bind(_this);return _this;
  }_createClass(TodoApp, [{ key: "handleTextChange", value: function handleTextChange(
    event) {
      this.setState({
        text: event.target.value });

    } }, { key: "handleAddItem", value: function handleAddItem(
    event) {
      event.preventDefault();

      var newItem = {
        id: Date.now(),
        text: this.state.text,
        done: false };


      this.setState(function (prevState) {return {
          items: prevState.items.concat(newItem),
          text: "" };});

    } }, { key: "markItemCompleted", value: function markItemCompleted(
    itemId) {
      var updatedItems = this.state.items.map(function (item) {
        if (itemId === item.id)
        item.done = !item.done;

        return item;
      });

      // State Updates are Merged
      this.setState({
        items: [].concat(updatedItems) });

    } }, { key: "handleDeleteItem", value: function handleDeleteItem(
    itemId) {
      var updatedItems = this.state.items.filter(function (item) {
        return item.id !== itemId;
      });

      this.setState({
        items: [].concat(updatedItems) });

    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", null,
          React.createElement("h3", { className: "apptitle" }, "TO DO LIST!!!"),
          React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-3" },
              React.createElement(TodoList, { items: this.state.items, onItemCompleted: this.markItemCompleted, onDeleteItem: this.handleDeleteItem }))),


          React.createElement("form", { className: "row" },
            React.createElement("div", { className: "col-md-3" },
              React.createElement("input", { type: "text", className: "form-control", onChange: this.handleTextChange, value: this.state.text })),

            React.createElement("div", { className: "col-md-3" },
              React.createElement("button", { className: "btn btn-success", onClick: this.handleAddItem, disabled: !this.state.text }, "Add " + (this.state.items.length + 1) + " Task")))));




    } }]);return TodoApp;}(React.Component);var


TodoItem = function (_React$Component2) {_inherits(TodoItem, _React$Component2);
  function TodoItem(props) {_classCallCheck(this, TodoItem);var _this2 = _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).call(this,
    props));
    _this2.markCompleted = _this2.markCompleted.bind(_this2);
    _this2.deleteItem = _this2.deleteItem.bind(_this2);return _this2;
  }_createClass(TodoItem, [{ key: "markCompleted", value: function markCompleted(
    event) {
      this.props.onItemCompleted(this.props.id);
    } }, { key: "deleteItem", value: function deleteItem(
    event) {
      this.props.onDeleteItem(this.props.id);
    }
    // Highlight newly added item for several seconds.
  }, { key: "componentDidMount", value: function componentDidMount() {
      if (this._listItem) {
        // 1. Add highlight class.
        this._listItem.classList.add("highlight");

        // 2. Set timeout.
        setTimeout(function (listItem) {
          // 3. Remove highlight class.
          listItem.classList.remove("highlight");
        }, 500, this._listItem);
      }
    } }, { key: "render", value: function render()
    {var _this3 = this;
      var itemClass = "form-check todoitem " + (this.props.completed ? "done" : "undone");
      return (
        React.createElement("li", { className: itemClass, ref: function ref(li) {return _this3._listItem = li;} },
          React.createElement("label", { className: "form-check-label" },
            React.createElement("input", { type: "checkbox", className: "form-check-input", onChange: this.markCompleted }), " ", this.props.text),

          React.createElement("button", { type: "button", className: "btn btn-danger btn-sm", onClick: this.deleteItem }, "x")));


    } }]);return TodoItem;}(React.Component);var


TodoList = function (_React$Component3) {_inherits(TodoList, _React$Component3);function TodoList() {_classCallCheck(this, TodoList);return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));}_createClass(TodoList, [{ key: "render", value: function render()
    {var _this5 = this;
      return (
        React.createElement("ul", { className: "todolist" },
          this.props.items.map(function (item) {return (
              React.createElement(TodoItem, { key: item.id, id: item.id, text: item.text, completed: item.done, onItemCompleted: _this5.props.onItemCompleted, onDeleteItem: _this5.props.onDeleteItem }));})));



    } }]);return TodoList;}(React.Component);


ReactDOM.render(React.createElement(TodoApp, null), document.getElementById("app"));