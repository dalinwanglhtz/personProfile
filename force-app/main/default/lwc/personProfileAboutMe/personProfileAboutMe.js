import { LightningElement } from 'lwc';
import PersonProfileResources from '@salesforce/resourceUrl/personProfileResources';

export default class PersonProfileAboutMe extends LightningElement {
    maggiePic = PersonProfileResources + '/maggiePic.jpg';
}