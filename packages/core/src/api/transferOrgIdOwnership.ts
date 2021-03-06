import type { Contract } from 'web3-eth-contract';
import type { TransactionReceipt } from 'web3-eth';
import type {
  OrgIdData,
  CallbackFn
} from '../types';

import Web3 from 'web3';
import { getOrgId } from './getOrgId';
import { sendHelper } from '../shared/sendHelper'
import { regexp } from '@windingtree/org.id-utils';

export const transferOrgIdOwnership = async (
  web3: Web3,
  contract: Contract,
  orgIdHash: string,
  newOrgIdOwner: string,
  orgIdOwner: string,
  gasPrice?: string | number,
  gasLimit?: string | number,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transactionHashCb: CallbackFn | void = () => {}
): Promise<OrgIdData | null> => {

  if (!regexp.bytes32.exec(orgIdHash)) {
    throw new Error(`transferOrgIdOwnership: Invalid ORGiD hash: ${orgIdHash}`);
  }

  if (!regexp.ethereumAddress.exec(newOrgIdOwner)) {
    throw new Error(`transferOrgIdOwnership: Invalid newOrgIdOwner address: ${newOrgIdOwner}`);
  }

  if (!regexp.ethereumAddress.exec(orgIdOwner)) {
    throw new Error(`transferOrgIdOwnership: Invalid orgIdOwner address: ${orgIdOwner}`);
  }

  const orgId = await getOrgId(web3, contract, orgIdHash);

  if (!orgId) {
    throw new Error(`transferOrgIdOwnership: ORGiD not found: ${orgIdHash}`);
  }

  const receipt: TransactionReceipt = await sendHelper(
    contract,
    'transferOrgIdOwnership(bytes32,address)',
    [
      orgIdHash,
      newOrgIdOwner
    ],
    orgIdOwner,
    gasLimit,
    gasPrice,
    transactionHashCb
  );

  if (!receipt.events) {
    throw new Error(
      'transferOrgIdOwnership: Unable to found events in the transaction receipt'
    );
  }

  const updatedOrgId = receipt.events.OrgIdOwnershipTransferred.returnValues.orgId;

  return getOrgId(web3, contract, updatedOrgId)
}
