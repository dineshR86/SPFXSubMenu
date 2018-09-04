declare interface ISubMenuWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  linksdataFieldLabel:string;
  PropertyPaneLinksData: string;
}

declare module 'SubMenuWebPartStrings' {
  const strings: ISubMenuWebPartStrings;
  export = strings;
}
