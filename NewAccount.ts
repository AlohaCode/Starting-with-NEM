import { Account, NetworkType } from 'nem2-sdk';

const newAccount = Account.generateNewAccount( NetworkType.MIJIN_TEST );

console.log( 'New account address: ', newAccount.address.pretty() );
console.log( 'New account Private Key: ', newAccount.privateKey );
console.log( 'New account Public Key:', newAccount.publicKey );