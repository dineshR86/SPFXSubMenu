import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SubMenuWebPartStrings';
import SubMenu from './components/SubMenu';
import { ISubMenuProps } from './components/ISubMenuProps';

export interface ISubMenuWebPartProps {
  description: string;
  linksdata:string;
}

export default class SubMenuWebPart extends BaseClientSideWebPart<ISubMenuWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISubMenuProps > = React.createElement(
      SubMenu,
      {
        description: this.properties.description,
        linksdata:this.properties.linksdata
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('linksdata', {
                  label: strings.linksdataFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
