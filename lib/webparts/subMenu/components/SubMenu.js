"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SubMenu_module_scss_1 = require("./SubMenu.module.scss");
var SubMenu = (function (_super) {
    __extends(SubMenu, _super);
    function SubMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = {};
        return _this;
    }
    SubMenu.prototype.render = function () {
        var linksdata = JSON.parse(this.props.linksdata);
        if (linksdata.length > 1) {
            linksdata.sort(function (left, right) {
                if (left.order < right.order)
                    return -1;
                if (left.order > right.order)
                    return 1;
                return 0;
            });
        }
        else {
            return React.createElement("div", null, "Configure the webpart");
        }
        debugger;
        return (React.createElement("div", { className: SubMenu_module_scss_1.default.subMenu },
            React.createElement("div", { className: SubMenu_module_scss_1.default.container },
                React.createElement("ul", { className: "nav nav-pills" }, linksdata.map(function (item) {
                    if (item.isActive)
                        return React.createElement("li", { className: "active" },
                            React.createElement("a", { href: item.link }, item.name));
                    else
                        return React.createElement("li", null,
                            React.createElement("a", { href: item.link }, item.name));
                })))));
    };
    return SubMenu;
}(React.Component));
exports.default = SubMenu;

//# sourceMappingURL=SubMenu.js.map
