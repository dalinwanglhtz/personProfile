import { LightningElement } from 'lwc';
import PersonProfileResources from '@salesforce/resourceUrl/personProfileResources';

export default class PersonProfileServices extends LightningElement {
    maggiePic = PersonProfileResources + '/maggiePic.jpg';
    loanTypes = [
        {
            Id: 1,
            typeName: 'First Home Buyer',
            description: 'Looking to buy your first home? It is important to get your finance sorted as step one. It could be intimidating for someone who have never bought a property before. That’s ok, you’re in good hands with Maggie. She’ll take you through steps needed to secure your finance for your dream home.',
            pic: PersonProfileResources + '/loantypes/first-time-buyer.jpeg'
        },
        {
            Id: 2,
            typeName: 'Refinancing Home Loans'
        },
        {
            Id: 3,
            typeName: 'Investment Loans'
        },
        {
            Id: 4,
            typeName: 'Equipment Finance'
        },
        {
            Id: 5,
            typeName: 'Small to Medium (SME) Business Loans'
        },
        {
            Id: 6,
            typeName: 'Commercial Loans'
        },
        {
            Id: 7,
            typeName: 'Property Development Loans'
        },
        {
            Id: 8,
            typeName: 'Self Managed Super Fund (SMSF) Loans'
        }
    ]
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
        },
        {
            Id: 14,
            src: PersonProfileResources + '/lenders/me-bank.png'
        },
        {
            Id: 15,
            src: PersonProfileResources + '/lenders/virgin-money.png'
        }
    ];
}