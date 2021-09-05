import { LightningElement } from 'lwc';
import PersonProfileResources from '@salesforce/resourceUrl/personProfileResources';

export default class PersonProfileServices extends LightningElement {
    maggiePic = PersonProfileResources + '/maggiePic.jpg';
}