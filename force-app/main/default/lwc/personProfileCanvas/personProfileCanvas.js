import { LightningElement, wire } from 'lwc';
import {
    APPLICATION_SCOPE,
    MessageContext,
    subscribe,
    unsubscribe
} from 'lightning/messageService';
import pageSwitch from '@salesforce/messageChannel/PageSwitchMessageChannel__c';

export default class PersonProfileCanvas extends LightningElement {
    subscription;
    isHome = true;
    isAboutMe;
    isServices;
    isTestimony;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        if(!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                pageSwitch,
                (message) => this.handleMessage(message),
                {scope: APPLICATION_SCOPE}
            );
        }
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    handleMessage(message) {
        console.log('Message received: ', message.pageSelect);
        switch(message.pageSelect) {
            case 'home':
                this.isHome = true;
                this.isAboutMe = this.isServices = this.isTestimony = false;
                break;
            case 'aboutme':
                this.isAboutMe = true;
                this.isHome = this.isServices = this.isTestimony = false;
                break;
            case 'services':
                this.isServices = true;
                this.isHome = this.isAboutMe = this.isTestimony = false;
                break;
            case 'testimony':
                this.isTestimony = true;
                this.isHome = this.isAboutMe = this.isServices = false;
                break;
        }
    }
}