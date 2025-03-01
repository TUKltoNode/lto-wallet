import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { RecaptchaModule } from 'ng-recaptcha';
import { SharedModule } from '../shared';

import { AmountInputComponent } from './amount-input/amount-input.component';
import { BridgeDepositDialogComponent } from './bridge-deposit-dialog/bridge-deposit-dialog.component';
import { BridgeWithdrawDialogComponent } from './bridge-withdraw-dialog/bridge-withdraw-dialog.component';
import { ContentDialogComponent } from './content-dialog';
import { DeleteAccountDialogComponent } from './delete-account-dialog/delete-account-dialog.component';
import { HiddenTextComponent } from './hidden-text/hidden-text.component';
import { TransactionConfirmationDialogModule } from './transaction-confirmation-dialog';

@NgModule({
  imports: [SharedModule, QRCodeModule, RecaptchaModule],
  declarations: [
    AmountInputComponent,
    BridgeDepositDialogComponent,
    BridgeWithdrawDialogComponent,
    DeleteAccountDialogComponent,
    HiddenTextComponent,
    ContentDialogComponent,
  ],
  exports: [
    AmountInputComponent,
    BridgeDepositDialogComponent,
    BridgeWithdrawDialogComponent,
    HiddenTextComponent,
    TransactionConfirmationDialogModule
  ],
  entryComponents: [
    BridgeDepositDialogComponent,
    BridgeWithdrawDialogComponent,
    DeleteAccountDialogComponent,
    ContentDialogComponent,
  ]
})
export class WalletComponentsModule {}
