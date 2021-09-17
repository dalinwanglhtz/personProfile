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
        },
        {
            Id: 3,
            src: PersonProfileResources + '/lenders/anz.png'
        },
        {
            Id: 4,
            src: PersonProfileResources + '/lenders/nab.png'
        },
        {
            Id: 5,
            src: PersonProfileResources + '/lenders/bankwest.png'
        },
        {
            Id: 6,
            src: PersonProfileResources + '/lenders/bank-of-melbourne.png'
        },
        {
            Id: 7,
            src: PersonProfileResources + '/lenders/ing.png'
        },
        {
            Id: 8,
            src: PersonProfileResources + '/lenders/boq.png'
        },
        {
            Id: 9,
            src: PersonProfileResources + '/lenders/bendigo-bank.png'
        },
        {
            Id: 10,
            src: PersonProfileResources + '/lenders/resimac.png'
        },
        {
            Id: 11,
            src: PersonProfileResources + '/lenders/bluestone.png'
        },
        {
            Id: 12,
            src: PersonProfileResources + '/lenders/latrobe-financial.png'
        },
        {
            Id: 13,
            src: PersonProfileResources + '/lenders/liberty-financial.png'
        }
    ];
}