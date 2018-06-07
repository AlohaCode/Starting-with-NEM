import { Account, Address, Deadline, PlainMessage, 
         NetworkType, TransactionHttp, TransferTransaction, XEM } from 'nem2-sdk';

// create txn
const toAddress = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const sendTxn = TransferTransaction.create(
    Deadline.create(),
    Address.createFromRawAddress( toAddress ),
    [ XEM.createRelative( 10 ) ],
    PlainMessage.create( 'Thanks for the great work!' ),
    NetworkType.MIJIN_TEST
);

// sign txn
const privateKey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const account = Account.createFromPrivateKey( privateKey, NetworkType.MIJIN_TEST );
const signedTxn = account.sign( sendTxn );     

// accounce txn to nework
const txnHttp = new TransactionHttp( 'http://[developerPreviewURL]:3000' );
txnHttp.announce( signedTxn ).subscribe(
    log => console.log( log ),
    err => console.error( err ) 
);
