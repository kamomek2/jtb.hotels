"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const react_hot_loader_1 = require("react-hot-loader");
const jtb_search_1 = require("jtb.search");
const FlightList_1 = require("./FlightList");
class Component extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(jtb_search_1.SearchScreen, null),
            React.createElement(FlightList_1.default, null)));
    }
}
const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = (dispatch) => redux_1.bindActionCreators({}, dispatch);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(react_hot_loader_1.hot(module)(Component));
//# sourceMappingURL=App.js.map