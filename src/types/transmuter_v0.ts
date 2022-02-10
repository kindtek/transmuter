export type TransmuterV0 = {
  "version": "0.1.0",
  "name": "transmuter_v0",
  "instructions": [
    {
      "name": "initTransmuter",
      "accounts": [
        {
          "name": "transmuter",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bankA",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initMutation",
      "accounts": [
        {
          "name": "transmuter",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mutation",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenASource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenBEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenCEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenCSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenCMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpA",
          "type": "u8"
        },
        {
          "name": "bumpB",
          "type": "u8"
        },
        {
          "name": "bumpC",
          "type": "u8"
        },
        {
          "name": "config",
          "type": {
            "defined": "MutationConfig"
          }
        },
        {
          "name": "uses",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateMutation",
      "accounts": [],
      "args": []
    },
    {
      "name": "destroyMutation",
      "accounts": [],
      "args": []
    },
    {
      "name": "whitelistTokens",
      "accounts": [],
      "args": []
    },
    {
      "name": "executeMutation",
      "accounts": [
        {
          "name": "transmuter",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mutation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bankA",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bankB",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultC",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bankC",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenADestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenBEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenCEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenCDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenCMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpA",
          "type": "u8"
        },
        {
          "name": "bumpB",
          "type": "u8"
        },
        {
          "name": "bumpC",
          "type": "u8"
        }
      ]
    },
    {
      "name": "abortMutation",
      "accounts": [],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "mutation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "transmuter",
            "type": "publicKey"
          },
          {
            "name": "config",
            "type": {
              "defined": "MutationConfig"
            }
          },
          {
            "name": "totalUses",
            "type": "u64"
          },
          {
            "name": "remainingUses",
            "type": "u64"
          },
          {
            "name": "state",
            "type": {
              "defined": "MutationState"
            }
          }
        ]
      }
    },
    {
      "name": "transmuter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "authoritySeed",
            "type": "publicKey"
          },
          {
            "name": "authorityBumpSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "bankA",
            "type": "publicKey"
          },
          {
            "name": "bankB",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "bankC",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "MutationConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "takerTokenA",
            "type": {
              "defined": "TakerTokenConfig"
            }
          },
          {
            "name": "takerTokenB",
            "type": {
              "option": {
                "defined": "TakerTokenConfig"
              }
            }
          },
          {
            "name": "takerTokenC",
            "type": {
              "option": {
                "defined": "TakerTokenConfig"
              }
            }
          },
          {
            "name": "makerTokenA",
            "type": {
              "defined": "MakerTokenConfig"
            }
          },
          {
            "name": "makerTokenB",
            "type": {
              "option": {
                "defined": "MakerTokenConfig"
              }
            }
          },
          {
            "name": "makerTokenC",
            "type": {
              "option": {
                "defined": "MakerTokenConfig"
              }
            }
          },
          {
            "name": "timeConfig",
            "type": {
              "defined": "TimeConfig"
            }
          },
          {
            "name": "priceConfig",
            "type": {
              "defined": "PriceConfig"
            }
          },
          {
            "name": "reversible",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "TakerTokenConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gemBank",
            "type": "publicKey"
          },
          {
            "name": "requiredRarityPoints",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "requiredGemCount",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "vaultAction",
            "type": {
              "defined": "VaultAction"
            }
          }
        ]
      }
    },
    {
      "name": "MakerTokenConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "TimeConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mutationTimeSec",
            "type": "u64"
          },
          {
            "name": "cancelWindowSec",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PriceConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "payEveryTime",
            "type": "bool"
          },
          {
            "name": "paid",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "MutationState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Available"
          },
          {
            "name": "Exhausted"
          }
        ]
      }
    },
    {
      "name": "VaultAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ChangeOwner"
          },
          {
            "name": "Lock"
          },
          {
            "name": "DoNothing"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidTokenIndex",
      "msg": "Token index must be one of 1,2,3"
    },
    {
      "code": 6001,
      "name": "BankDoesNotMatch",
      "msg": "Bank account passed != bank account in config"
    },
    {
      "code": 6002,
      "name": "MintDoesNotMatch",
      "msg": "Mint account passed != mint account in config"
    },
    {
      "code": 6003,
      "name": "CandyMachineMissing",
      "msg": "Minted mutations require a Candy Machine ID to be present"
    },
    {
      "code": 6004,
      "name": "ArithmeticError",
      "msg": "Arithmetic error (likely under/overflow)"
    }
  ]
};

export const IDL: TransmuterV0 = {
  "version": "0.1.0",
  "name": "transmuter_v0",
  "instructions": [
    {
      "name": "initTransmuter",
      "accounts": [
        {
          "name": "transmuter",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bankA",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initMutation",
      "accounts": [
        {
          "name": "transmuter",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mutation",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenASource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenBEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenCEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenCSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenCMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpA",
          "type": "u8"
        },
        {
          "name": "bumpB",
          "type": "u8"
        },
        {
          "name": "bumpC",
          "type": "u8"
        },
        {
          "name": "config",
          "type": {
            "defined": "MutationConfig"
          }
        },
        {
          "name": "uses",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateMutation",
      "accounts": [],
      "args": []
    },
    {
      "name": "destroyMutation",
      "accounts": [],
      "args": []
    },
    {
      "name": "whitelistTokens",
      "accounts": [],
      "args": []
    },
    {
      "name": "executeMutation",
      "accounts": [
        {
          "name": "transmuter",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mutation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bankA",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bankB",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultC",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bankC",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenADestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenBEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenCEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenCDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenCMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpA",
          "type": "u8"
        },
        {
          "name": "bumpB",
          "type": "u8"
        },
        {
          "name": "bumpC",
          "type": "u8"
        }
      ]
    },
    {
      "name": "abortMutation",
      "accounts": [],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "mutation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "transmuter",
            "type": "publicKey"
          },
          {
            "name": "config",
            "type": {
              "defined": "MutationConfig"
            }
          },
          {
            "name": "totalUses",
            "type": "u64"
          },
          {
            "name": "remainingUses",
            "type": "u64"
          },
          {
            "name": "state",
            "type": {
              "defined": "MutationState"
            }
          }
        ]
      }
    },
    {
      "name": "transmuter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "authoritySeed",
            "type": "publicKey"
          },
          {
            "name": "authorityBumpSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "bankA",
            "type": "publicKey"
          },
          {
            "name": "bankB",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "bankC",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "MutationConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "takerTokenA",
            "type": {
              "defined": "TakerTokenConfig"
            }
          },
          {
            "name": "takerTokenB",
            "type": {
              "option": {
                "defined": "TakerTokenConfig"
              }
            }
          },
          {
            "name": "takerTokenC",
            "type": {
              "option": {
                "defined": "TakerTokenConfig"
              }
            }
          },
          {
            "name": "makerTokenA",
            "type": {
              "defined": "MakerTokenConfig"
            }
          },
          {
            "name": "makerTokenB",
            "type": {
              "option": {
                "defined": "MakerTokenConfig"
              }
            }
          },
          {
            "name": "makerTokenC",
            "type": {
              "option": {
                "defined": "MakerTokenConfig"
              }
            }
          },
          {
            "name": "timeConfig",
            "type": {
              "defined": "TimeConfig"
            }
          },
          {
            "name": "priceConfig",
            "type": {
              "defined": "PriceConfig"
            }
          },
          {
            "name": "reversible",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "TakerTokenConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gemBank",
            "type": "publicKey"
          },
          {
            "name": "requiredRarityPoints",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "requiredGemCount",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "vaultAction",
            "type": {
              "defined": "VaultAction"
            }
          }
        ]
      }
    },
    {
      "name": "MakerTokenConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "TimeConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mutationTimeSec",
            "type": "u64"
          },
          {
            "name": "cancelWindowSec",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PriceConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "payEveryTime",
            "type": "bool"
          },
          {
            "name": "paid",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "MutationState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Available"
          },
          {
            "name": "Exhausted"
          }
        ]
      }
    },
    {
      "name": "VaultAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ChangeOwner"
          },
          {
            "name": "Lock"
          },
          {
            "name": "DoNothing"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidTokenIndex",
      "msg": "Token index must be one of 1,2,3"
    },
    {
      "code": 6001,
      "name": "BankDoesNotMatch",
      "msg": "Bank account passed != bank account in config"
    },
    {
      "code": 6002,
      "name": "MintDoesNotMatch",
      "msg": "Mint account passed != mint account in config"
    },
    {
      "code": 6003,
      "name": "CandyMachineMissing",
      "msg": "Minted mutations require a Candy Machine ID to be present"
    },
    {
      "code": 6004,
      "name": "ArithmeticError",
      "msg": "Arithmetic error (likely under/overflow)"
    }
  ]
};