[@windingtree/org.id-auth](../README.md) / [vc](../modules/vc.md) / CredentialReference

# Interface: CredentialReference

[vc](../modules/vc.md).CredentialReference

ORGiD Verifiable Credentials Schema

## Hierarchy

- **`CredentialReference`**

  ↳ [`SignedVC`](vc.signedvc.md)

## Indexable

▪ [k: `string`]: `unknown`

## Table of contents

### Properties

- [@context](vc.credentialreference.md#@context)
- [credentialSubject](vc.credentialreference.md#credentialsubject)
- [expirationDate](vc.credentialreference.md#expirationdate)
- [holder](vc.credentialreference.md#holder)
- [id](vc.credentialreference.md#id)
- [issuanceDate](vc.credentialreference.md#issuancedate)
- [issuer](vc.credentialreference.md#issuer)
- [proof](vc.credentialreference.md#proof)
- [type](vc.credentialreference.md#type)
- [validFrom](vc.credentialreference.md#validfrom)
- [validUntil](vc.credentialreference.md#validuntil)

## Properties

### @context

• **@context**: `ContextReference`

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:249

___

### credentialSubject

• **credentialSubject**: `Object`

Claims about the subject of VC

#### Index signature

▪ [k: `string`]: `unknown`

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:286

___

### expirationDate

• `Optional` **expirationDate**: `string`

When the VC will be expired

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:274

___

### holder

• `Optional` **holder**: `string` \| [`VCTypedHolderReference`](vc.vctypedholderreference.md)

VC holder

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:266

___

### id

• **id**: `string`

Unique identifier of the VC generated by the issuer

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:254

___

### issuanceDate

• **issuanceDate**: `string`

When the VC was issued

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:270

___

### issuer

• **issuer**: `string`

The DID subject is denoted by the id property. The DID subject is the entity that the DID document (ORG.JSON) is about. That is, it is the entity identified by the DID and described in the DID document.

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:262

___

### proof

• `Optional` **proof**: [`VCProofReference`](vc.vcproofreference.md)

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:289

___

### type

• **type**: `string`[]

Type of the VC

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:258

___

### validFrom

• `Optional` **validFrom**: `string`

When the VC will becomes valid. Useful when the credential usage is time dependent. E.g. Entrance card to the SPA

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:278

___

### validUntil

• `Optional` **validUntil**: `string`

When the VC will becomes invalid. Useful when the credential usage is time dependent. E.g. Entrance card to the SPA

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:282
