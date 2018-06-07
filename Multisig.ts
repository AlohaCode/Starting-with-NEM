import { Account, NetworkType, PublicAccount, TransactionHttp, AccountHttp, Address,
         ModifyMultisigAccountTransaction, Deadline, MultisigCosignatoryModification, MultisigCosignatoryModificationType } from 'nem2-sdk';

// private key of account to be converted to multi-sig
const msPrvtKey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

// cosignatory public keys
const coSig1PblcKey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const coSig2PblcKey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

// new cosignatory account
const coSigAccount = Account.createFromPrivateKey( msPrvtKey, NetworkType.MIJIN_TEST );

// new cosignatories
const coSig1 = PublicAccount.createFromPublicKey( coSig1PblcKey, NetworkType.MIJIN_TEST );
const coSig2 = PublicAccount.createFromPublicKey( coSig2PblcKey, NetworkType.MIJIN_TEST );

const convert2MultiSig = ModifyMultisigAccountTransaction.create(
    Deadline.create(),
    1, 
    1,
    [
      new MultisigCosignatoryModification(
          MultisigCosignatoryModificationType.Add,
          coSig1
      ),
      new MultisigCosignatoryModification(
          MultisigCosignatoryModificationType.Add,
          coSig2
      )
    ],
    NetworkType.MIJIN_TEST
);

// sign & announce txn
const signedTxn = coSigAccount.sign( convert2MultiSig );
const txnHttp = new TransactionHttp( 'http://[developerPreviewURL]:3000' );
txnHttp.announce( signedTxn ).subscribe(
    ret => console.log( ret ),
    err => console.log( err ) 
);

/* --- View Account Properties --- */
/*

const accountHttp = new AccountHttp( 'http://[developerPreviewURL]:3000' );
const msAddress = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
accountHttp.getMultisigAccountInfo( Address.createFromRawAddress( msAddress ) ).subscribe(
    accountInfo => console.log( accountInfo ),
    err => console.error( err )
);

*/















