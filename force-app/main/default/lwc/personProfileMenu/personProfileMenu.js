import { LightningElement, wire } from 'lwc';
import {
    MessageContext,
    publish
} from 'lightning/messageService';
import pageSwitch from '@salesforce/messageChannel/PageSwitchMessageChannel__c';

export default class PersonProfileMenu extends LightningElement {
    @wire(MessageContext)
    messageContext;
    menuItems = [
        {
            Id: 1,
            menuClass: 'fix1',
            menuName: 'home',
            label: 'Home'
        },
        {
            Id: 2,
            menuClass: 'fix2',
            menuName: 'aboutme',
            label: 'About Me'
        },
        {
            Id: 3,
            menuClass: 'fix3',
            menuName: 'services',
            label: 'Services'
        },
        {
            Id: 4,
            menuClass: 'fix4',
            menuName: 'testimony',
            label: 'Testimony'
        },
        {
            Id: 5,
            menuClass: 'fix5',
            menuName: 'contactme',
            label: 'Contact Me'
        }
    ]

    handleClick(event) {
        const payload = {pageSelect: event.target.name};

        publish(this.messageContext, pageSwitch, payload);
    }
}