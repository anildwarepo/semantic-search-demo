"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperComponent = void 0;
var HelperComponent = /** @class */ (function () {
    function HelperComponent(http) {
        this.http = http;
    }
    HelperComponent.prototype.callApi = function () {
        this.http.get("http://127.0.0.1:5000/api/afr/recognize_content").subscribe(function (result) {
            result = JSON.stringify(result, null, 2);
            console.log(result);
            return result;
        }, function (error) { return console.error(error); });
    };
    return HelperComponent;
}());
exports.HelperComponent = HelperComponent;
//# sourceMappingURL=helper.component.js.map