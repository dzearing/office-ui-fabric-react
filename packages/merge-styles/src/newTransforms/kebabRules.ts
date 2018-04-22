// tslint:disable-next-line:no-any
export function kebabRules(properties: { [key: string]: any }): void {
  for (const propName in properties) {
    if (properties.hasOwnProperty(propName)) {
      properties[propName] = propName.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
  }
}
