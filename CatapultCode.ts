/*
import { Account, NetworkType } from 'nem2-sdk';

const testAccount = Account.generateNewAccount( NetworkType.MIJIN_TEST );

console.log( 'Test account address: ', testAccount.address.pretty() );
console.log( 'Test account public key: ', testAccount.publicKey );
console.log( 'Test account private key: ', testAccount.privateKey );
*/

import { NetworkType, Password, SimpleWallet } from 'nem2-sdk';

const pwd = new Password( 'password' );

const privateKey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

const testWallet = SimpleWallet.createFromPrivateKey( 'my-wallet', pwd, privateKey, NetworkType.MIJIN_TEST );

const testAccount = testWallet.open( pwd );

console.log( 'Test account address: ', testAccount.address.pretty() );
console.log( 'Test account public key: ', testAccount.publicKey );


import { AccountHttp, Address } from 'nem2-sdk';

const accountHttp = new AccountHttp( 'http://[developerPreviewURL]:3000' );

const myAddress = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

accountHttp.getAccountInfo( Address.createFromRawAddress( myAddress ) ).subscribe(
    accountInfo => console.log( accountInfo ),
    err => console.error( err )
);


import { MosaicHttp, NamespaceHttp, MosaicService } from 'nem2-sdk';

const url = 'http://[developerPreviewURL]:3000';

const mosaicHttp = new MosaicHttp( url );
const namespaceHttp = new NamespaceHttp( url );
const mosaicService = new MosaicService( accountHttp, mosaicHttp, namespaceHttp );

mosaicService.mosaicsAmountViewFromAddress( Address.createFromRawAddress( myAddress ) )
    .flatMap( (_) => _ )
    .subscribe(
        mosaic => console.log( 'There are: ', mosaic.relativeAmount(), mosaic.fullName(), ' in this account' ),
        err => console.error( err )  
    );





























