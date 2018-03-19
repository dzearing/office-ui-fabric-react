'use strict';

// Configure load-themed-styles to avoid registering styles.
const themeLoader = require('@microsoft/load-themed-styles');


themeLoader.configureLoadStyles((styles) => {
  // noop
});

const { initializeIcons } = require('office-ui-fabric-react/lib-es2015/Icons');
initializeIcons('dist/');


// Set ssr mode to true, and rtl to false.
const library = require('office-ui-fabric-react/lib-es2015/Utilities');
library.setSSR(true);
library.setRTL(false);

// Assume a large screen.
const { setResponsiveMode, ResponsiveMode } = require('office-ui-fabric-react/lib-es2015/utilities/decorators/withResponsiveMode');
setResponsiveMode(ResponsiveMode.large);

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const AppDefinition = require('office-ui-fabric-react/lib-es2015/demo/AppDefinition').AppDefinition;

describe('Fabric components', () => {
  for (let i = 0; i < AppDefinition.examplePages.length; i++) {
    const links = AppDefinition.examplePages[i].links;
    for (let j = 0; j < links.length; j++) {
      const { key, component } = links[j];

      testRender(key, component);
    }
  }
});


function testRender(componentName, component) {
  it(`${componentName} can render in a server environment`, (done) => {
    const elem = React.createElement(component);

    try {
      ReactDOMServer.renderToString(elem);
      done();
    } catch (e) { done(new Error(e)) }
  });
}
