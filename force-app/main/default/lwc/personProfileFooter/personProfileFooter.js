import { LightningElement } from 'lwc';
import PersonProfileResources from '@salesforce/resourceUrl/personProfileResources';

export default class PersonProfileFooter extends LightningElement {
    facebookImg = PersonProfileResources + '/facebook.png';
    linkedinImg = PersonProfileResources + '/linkedin.png';
}