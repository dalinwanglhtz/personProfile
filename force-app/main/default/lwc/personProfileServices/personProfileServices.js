import { LightningElement } from 'lwc';
import PersonProfileResources from '@salesforce/resourceUrl/personProfileResources';

export default class PersonProfileServices extends LightningElement {
    maggiePic = PersonProfileResources + '/maggiePic.jpg';
    lenderPics = [
        {
            Id: 1,
            src: PersonProfileResources + '/lenders/cba.png'
        },
        {
            Id: 2,
            src: PersonProfileResources + '/lenders/westpac.png'
        }
    ];
}