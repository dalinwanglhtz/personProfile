import { LightningElement } from 'lwc';
import PersonProfileResources from '@salesforce/resourceUrl/personProfileResources';

export default class PersonProfileContactMe extends LightningElement {
    maggiePic = PersonProfileResources + '/maggiePic.jpg';
    wechatPic = PersonProfileResources + '/wechat.svg';
    emailPic = PersonProfileResources + '/email.png';
    phonePic = PersonProfileResources + '/phone.png';
}