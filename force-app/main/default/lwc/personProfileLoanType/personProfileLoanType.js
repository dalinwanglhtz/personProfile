import { LightningElement, api } from 'lwc';

export default class PersonProfileLoanType extends LightningElement {
    @api typeName;
    @api description;
    @api pic;
}