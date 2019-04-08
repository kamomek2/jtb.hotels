"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const FlightListLoading_1 = require("../../components/FlightListLoading");
const FlightListItem_1 = require("../../components/FlightListItem");
const style = require('./style.scss');
exports.FlightList = ({ query, is_loading, list, }) => (React.createElement("div", { className: style.wrapper },
    React.createElement("div", { className: style.container },
        React.createElement("div", { className: style.badge },
            "This part is rendered by ",
            React.createElement("u", null, "jtb.flights"),
            " package"),
        React.createElement("div", null, "Also, it includes some style variables like paddings and border radius from jtb.search"),
        React.createElement("div", null,
            "Search query from jtb.search component is: ",
            query || `- empty -`),
        React.createElement("div", null,
            is_loading && React.createElement(FlightListLoading_1.FlightListLoading, null),
            !is_loading &&
                list.map(({ title }) => (React.createElement(FlightListItem_1.FlightListItem, { title: title, key: title })))))));
const mapStateToProps = ({ flight, search: { query } }) => (Object.assign({}, flight, { query }));
exports.default = react_redux_1.connect(mapStateToProps)(exports.FlightList);
//# sourceMappingURL=index.js.map