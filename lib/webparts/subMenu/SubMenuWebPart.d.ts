import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface ISubMenuWebPartProps {
    description: string;
    linksdata: string;
}
export default class SubMenuWebPart extends BaseClientSideWebPart<ISubMenuWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
