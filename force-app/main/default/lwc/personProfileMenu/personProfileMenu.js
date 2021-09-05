import { LightningElement, wire } from 'lwc';
import {
    MessageContext,
    publish
} from 'lightning/messageService';
import pageSwitch from '@salesforce/messageChannel/PageSwitchMessageChannel__c';

export default class PersonProfileMenu extends LightningElement {
    @wire(MessageContext)
    messageContext;

    handleClick(event) {
        const payload = {pageSelect: event.target.name};

        publish(this.messageContext, pageSwitch, payload);
    }
}