import { LightningElement } from 'lwc';
import PersonProfileResources from '@salesforce/resourceUrl/personProfileResources';

export default class PersonProfileHome extends LightningElement {
    maggiePic = PersonProfileResources + '/maggiePic.jpg';
}