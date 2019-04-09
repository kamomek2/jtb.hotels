"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const HotelListLoading_1 = require("../../components/HotelListLoading");
const HotelListItem_1 = require("../../components/HotelListItem");
const style = require('./style.scss');
exports.HotelList = ({ query, is_loading, list, }) => (React.createElement("div", { className: style.wrapper },
    React.createElement("div", { className: style.container },
        React.createElement("div", { className: style.badge },
            "This part is rendered by ",
            React.createElement("u", null, "jtb.hotels"),
            " package"),
        React.createElement("div", { className: style.badge },
            "Search query from jtb.search component is: ",
            query || `- empty -`),
        React.createElement("div", null,
            "Also, it includes some style variables like paddings and border radius from jtb.search ",
            React.createElement("u", null, "variables.scss")),
        React.createElement("div", null, "It calls its own async action when you press 'Search' and also has access to the search part of the data storage."),
        React.createElement("div", null, "You can clone it and run as standalone app with search box for development purposes, but search form is listed as dev-dependencies and will not be installed when you use jtb.hotels as dependency on other projects."),
        React.createElement("div", null,
            "Api call uses fake promise with ",
            React.createElement("u", null, "1500ms"),
            " delay"),
        is_loading && React.createElement(HotelListLoading_1.HotelListLoading, null),
        !is_loading && list &&
            React.createElement("div", { className: style.list }, list.map(({ title }) => (React.createElement(HotelListItem_1.HotelListItem, { title: title, key: title })))))));
const mapStateToProps = ({ hotel, search: { query } }) => (Object.assign({}, hotel, { query }));
exports.default = react_redux_1.connect(mapStateToProps)(exports.HotelList);
//# sourceMappingURL=index.js.map