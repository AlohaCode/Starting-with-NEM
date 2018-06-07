import { AccountHttp, PublicAccount, NetworkType, QueryParams } from 'nem2-sdk';

const accountHttp = new AccountHttp( 'http://[developerPreviewURL]:3000' );
const publicKey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

const listSize = 10;

accountHttp.transactions(
    PublicAccount.createFromPublicKey( publicKey, NetworkType.MIJIN_TEST ),
    new QueryParams( listSize )
).subscribe(
    transactions => console.log( transactions ),
    err => console.error( err )
);