import * as React from 'react';
import styles from './SubMenu.module.scss';
import { ISubMenuProps } from './ISubMenuProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SubMenu extends React.Component<ISubMenuProps, {}> {
  
   data:object={}
  
  public render(): React.ReactElement<ISubMenuProps> {
    const linksdata:any[]=JSON.parse(this.props.linksdata);
    if(linksdata.length>1){linksdata.sort((left:any,right:any):number=>{
      if(left.order <right.order)
        return -1
      if(left.order > right.order)
        return 1
      return 0
    });}
    else{
      return <div>Configure the webpart</div>
    }
    debugger;
    return (
      <div className={ styles.subMenu }>
      <div className={styles.container}>
        <ul className="nav nav-pills">
          {linksdata.map(item=>{
            if(item.isActive)
            return <li className="active"><a href={item.link}>{item.name}</a></li>
            else
            return <li><a href={item.link}>{item.name}</a></li>
          })}
        </ul>
        </div> 
      </div>
    );
  }
}
