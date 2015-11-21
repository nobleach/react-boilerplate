var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var chaiAsPromised = require('chai-as-promised');
var chaiImmutable = require('chai-immutable');

chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiImmutable);

global.expect = chai.expect;
global.sinon = sinon;

if (!global.document || !global.window) {
    var jsdom = require("jsdom-no-contextify").jsdom;

    global.document = jsdom('<html><head></head><body><div id="fixtures"></div></body></html>', {
        FetchExternalResources: ['script'],
        ProcessExternalResources: ['script'],
        MutationEvents: '2.0',
        QuerySelector: false
    });

    global.window = document.parentWindow;
    global.window.localStorage = require('localStorage');
    global.navigator = global.window.navigator;

    global.window.Node.prototype.contains = function(node) {
        /*jslint bitwise: true */
        return this.compareDocumentPosition(node) & 16;
    };
}

global.React = require('react');
global.ReactDom = require('react-dom');
