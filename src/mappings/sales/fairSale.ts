// Externals
import { Address, BigInt } from '@graphprotocol/graph-ts'

// Contract ABIs and Events
import {
  FairSale as FairSaleContract,
  CancellationOrder,
  UserRegistration,
  ClaimedFromOrder,
  SaleCleared,
  NewOrder,
  NewUser
} from '../../../generated/FairSale/FairSale'

// GraphQL Schemas
import * as Schemas from '../../../generated/schema'

// Helpers
import { SALE_STATUS, BID_STATUS } from '../../helpers/sales'

/**
 * Handles any Auction that has cleared
 * @param event
 */
export function handleSaleCleared(event: SaleCleared): void {
  if (!isFairSaleBelongsToAqua(event.address)) {
    return
  }

  let sale = Schemas.FairSaleBid.load(event.address.toHexString()) // event.address is the contract that emits the event

  if (!sale) {
    return
  }

  sale.updatedAt = event.block.timestamp.toI32()
  sale.status = SALE_STATUS.SETTLED
  sale.save()
}

export function handleCancellationOrder(event: CancellationOrder): void {
  if (!isFairSaleBelongsToAqua(event.address)) {
    return
  }

  // ToDo: concatenate unique id
  let bid = Schemas.FairSaleBid.load(event.transaction.hash.toHexString())

  if (!bid) {
    return
  }

  bid.updatedAt = event.block.timestamp.toI32()
  bid.deletedAt = event.block.timestamp.toI32()
  bid.status = BID_STATUS.CANCELLED
  bid.save()
}

export function handleClaimedFromOrder(event: ClaimedFromOrder): void {
  if (!isFairSaleBelongsToAqua(event.address)) {
    return
  }

  // ToDo: concatenate unique id
  let bid = Schemas.FairSaleBid.load(event.transaction.hash.toHexString())
  if (!bid) {
    return
  }
  bid.updatedAt = event.block.timestamp.toI32()
  bid.status = BID_STATUS.CLAIMED
  bid.save()
}

/**
 * Handles new Order (Bid) placement on the Auction
 * @param event
 */
export function handleNewOrder(event: NewOrder): void {
  if (!isFairSaleBelongsToAqua(event.address)) {
    return
  }
  // Construct entity ID from the parameters
  // A bid is <saleAddress>/bids/<ownerId>/<block.timestamp>
  let bid = new Schemas.FairSaleBid(
    event.address.toHexString() + '/bids/' + event.params.ownerId.toString() + '/' + event.block.timestamp.toString()
  )
  bid.sale = event.address.toString()
  bid.createdAt = event.block.timestamp.toI32()
  bid.updatedAt = event.block.timestamp.toI32()
  bid.tokenInAmount = event.params.orderTokenIn
  bid.tokenOutAmount = event.params.orderTokenOut
  // Update FairSaleUser ref
  bid.owner = event.transaction.from.toHexString()
  // Update FairSale ref
  bid.sale = event.address.toHexString()
  bid.status = BID_STATUS.SUBMITTED
  // Save
  bid.save()
}

/**
 * Handles NewUser
 * @param event
 */
export function handleNewUser(event: NewUser): void {
  if (!isFairSaleBelongsToAqua(event.address)) {
    return
  }

  // Use their address as unique id
  // A sale user id is <saleAddress>/users/<ownerId>
  let saleUser = new Schemas.FairSaleUser(event.address.toHexString() + '/users/' + event.params.userId.toString())
  // Update ref to FairSale
  saleUser.sale = event.address.toString()
  saleUser.ownerId = event.params.userId.toI32()
  saleUser.createdAt = event.block.timestamp.toI32()
  saleUser.updatedAt = event.block.timestamp.toI32()
  saleUser.address = event.params.userAddress
  saleUser.save()
}

/**
 * Does the same as `NewUser` handler. See `handleNewUser`
 */
export function handleUserRegistration(event: UserRegistration): void {}

/**
 * Checks if the contract that emitted the event belongs to Aqua
 * @param auctionAddress
 */
function isFairSaleBelongsToAqua(fairSaleContractAddress: Address): boolean {
  // Find the from
  let fairSale = Schemas.FairSale.load(fairSaleContractAddress.toHexString())

  if (fairSale != null) {
    return true
  }

  return false
}
