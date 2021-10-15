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
            typeName: 'Refinancing Home Loans',
            description: 'You may have seen this phrase many times but wonder what they mean. Refinancing is an effective financial instrument that helps keep your existing loans up to date with the latest changes in rates and your serviceability so that you are able to benefit from lower rates and / or less bank charges. It’s often a good idea to have a qualified mortgage broker to review your loans every now and then or when necessary in order to maximize return and save on your repayments. Talk to Maggie if you would like to learn more.',
            pic: PersonProfileResources + '/loantypes/refinance.jpg'
        },
        {
            Id: 3,
            typeName: 'Investment Loans',
            description: 'From time to time you may be thinking about buying an additional property for investment. With no cash in hand how would you achieve that goal? Not to worry, as an experienced broker, Maggie will be able to help you take out an investment loan to fund your purchase.',
            pic: PersonProfileResources + '/loantypes/investment-loan.jpg'
        },
        {
            Id: 4,
            typeName: 'Equipment Finance',
            description: 'For anyone running a business involving production of physical goods or providing services, they more or less rely on the use equipment to perform those jobs. Sometimes these equipment are large and costly to purchase. And with limited cash in hand, their business will eventually come into a grinding halt. Equipment finance is here to the rescue. It’s a type of loan to fund your purchase of these machinery and tools so your business can operate. Maggie is an experienced lending expert who can help you simplify the process of equipment financing. Please reach out for a catch-up with her to learn more.',
            pic: PersonProfileResources + '/loantypes/equipment-finance.png'
        },
        {
            Id: 5,
            typeName: 'Small to Medium (SME) Business Loans',
            description: 'So you’ve decided to start a new business? Great initiative! Or you’ve already started your business and it’s growing fast? That’s awesome. Either way you may realize you now need more cash to fund a big initiative that’ll take your company to the next level. A trusted and reliable lending specialist is all you need to make this happen. Maggie is just the right person to help you achieve this.',
            pic: PersonProfileResources + '/loantypes/sme-business-loan.jpg'
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