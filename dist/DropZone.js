import _classCallCheck from "/Users/akshaym/Desktop/Projects/react-dropzone-csv-to-json/react-dropzone-csv-to-json/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/akshaym/Desktop/Projects/react-dropzone-csv-to-json/react-dropzone-csv-to-json/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/akshaym/Desktop/Projects/react-dropzone-csv-to-json/react-dropzone-csv-to-json/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/akshaym/Desktop/Projects/react-dropzone-csv-to-json/react-dropzone-csv-to-json/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/akshaym/Desktop/Projects/react-dropzone-csv-to-json/react-dropzone-csv-to-json/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import Dropzone from "react-dropzone";
import csv from "csvtojson";

var ModifiedDropZone =
/*#__PURE__*/
function (_Component) {
  _inherits(ModifiedDropZone, _Component);

  function ModifiedDropZone() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModifiedDropZone);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModifiedDropZone)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      files: []
    };

    _this.onDrop = function (acceptedFiles, rejectedFiles) {
      _this.setState({
        files: acceptedFiles
      });

      acceptedFiles.forEach(function (file) {
        var reader = new FileReader();

        reader.onload = function () {
          var fileAsBinaryString = reader.result;
          csv({
            noheader: true,
            output: "json"
          }).fromString(fileAsBinaryString).then(function (csvRows) {
            var toJson = [];
            csvRows.forEach(function (aCsvRow, i) {
              if (i !== 0) {
                var builtObject = {};
                Object.keys(aCsvRow).forEach(function (aKey) {
                  var valueToAddInBuiltObject = aCsvRow[aKey];
                  var keyToAddInBuiltObject = csvRows[0][aKey];
                  builtObject[keyToAddInBuiltObject] = valueToAddInBuiltObject;
                });
                toJson.push(builtObject);
              }
            });
            var getJson = _this.props.getJson;
            getJson(toJson);
          });
        };

        reader.onabort = function () {
          return console.log("file reading was aborted");
        };

        reader.onerror = function () {
          return console.log("file reading has failed");
        };

        reader.readAsBinaryString(file);
      });
    };

    return _this;
  }

  _createClass(ModifiedDropZone, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.createElement(Dropzone, Object.assign({
        onDrop: this.onDrop
      }, this.props), children);
    }
  }]);

  return ModifiedDropZone;
}(Component);

export { ModifiedDropZone as default };