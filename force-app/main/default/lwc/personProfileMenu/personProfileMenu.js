import { LightningElement, wire } from 'lwc';
import {
    MessageContext,
    publish
} from 'lightning/messageService';
import pageSwitch from '@salesforce/messageChannel/PageSwitchMessageChannel__c';

export default class PersonProfileMenu extends LightningElement {
    homeButtonStyle = 'slds-button slds-button_dual-stateful slds-button_outline-brand';
    aboutMeButtonStyle = 'slds-button slds-button_dual-stateful slds-button_outline-brand';
    servicesButtonStyle = 'slds-button slds-button_dual-stateful slds-button_outline-brand';
    testimonyButtonStyle = 'slds-button slds-button_dual-stateful slds-button_outline-brand';

    @wire(MessageContext)
    messageContext;

    handleClick(event) {
        switch(event.target.name) {
            case 'home':
                this.homeButtonStyle = 'slds-button slds-button_outline-brand slds-button_dual-stateful slds-is-pressed';
                this.aboutMeButtonStyle = 'slds-button slds-button_dual-stateful slds-button_outline-brand';
                this.servicesButtonStyle  = 'slds-button slds-button_dual-stateful slds-button_outline-brand';
                this.testimonyButtonStyle = 'slds-button slds-button_dual-stateful slds-button_outline-brand';
                break;
            case 'aboutme':
                this.homeButtonStyle = 'slds-button slds-button_outline-brand slds-button_dual-stateful';
                this.aboutMeButtonStyle = 'slds-button slds-button_dual-stateful slds-button_outline-brand slds-is-pressed';
                this.servicesButtonStyle  = 'slds-button slds-button_dual-stateful slds-button_outline-brand';
                this.testimonyButtonStyle = 'slds-button slds-button_dual-stateful slds-button_outline-brand';
                break;
            case 'services':
                this.homeButtonStyle = 'slds-button slds-button_outline-brand slds-button_dual-stateful';
                this.aboutMeButtonStyle = 'slds-button slds-button_dual-stateful slds-button_outline-brand';
                this.servicesButtonStyle  = 'slds-button slds-button_dual-stateful slds-button_outline-brand slds-is-pressed';
                this.testimonyButtonStyle = 'slds-button slds-button_dual-stateful slds-button_outline-brand';
                break;
            case 'testimony':
                this.homeButtonStyle = 'slds-button slds-button_outline-brand slds-button_dual-stateful';
                this.aboutMeButtonStyle = 'slds-button slds-button_dual-stateful slds-button_outline-brand';
                this.servicesButtonStyle  = 'slds-button slds-button_dual-stateful slds-button_outline-brand';
                this.testimonyButtonStyle = 'slds-button slds-button_dual-stateful slds-button_outline-brand slds-is-pressed';
                break;
        }

        const payload = {pageSelect: event.target.name};

        publish(this.messageContext, pageSwitch, payload);
    }
}