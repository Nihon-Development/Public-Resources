define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		"Field": {
			base64encode: {
				insertText: 'base64encode("${1:base64}")',
				label: 'base64encode()',
				documentation: {
					value: [
						'```lua', 'function base64encode(data: string) -> encode: string', '```',
						'',
						'Encodes a string `data` bytes into Base64.',
					].join('\n')
				},
			},
			base64decode: {
				insertText: 'base64decode("${1:base64}")',
				label: 'base64decode()',
				documentation: {
					value: [
						'```lua', 'function base64decode(data: string) -> decode: string', '```',
						'',
						'Decodes a Base64 string `data` to a string of bytes.',
					].join('\n')
				},
			},
			encrypt: {
				insertText: 'encrypt("${1:data}", "${2:key}", "${3:iv}", "${4:mode}")',
				label: 'encrypt()',
				documentation: {
					value: [
						'```lua', 'function encrypt(data: string, key: string, iv: string, mode: string) -> encrypt: string', '```',
						'',
						'Encrypts an unencoded string using AES encryption and base64 encoding and the optional IV.',
					].join('\n')
				},
			},
			decrypt: {
				insertText: 'decrypt("${1:data}", "${2:key}", "${3:iv}", "${4:mode}")',
				label: 'decrypt()',
				documentation: {
					value: [
						'```lua', 'function decrypt(data: string, key: string, iv: string, mode: string) -> decrypt: string', '```',
						'',
						'Decrypts the base64 encoded and encrypted content.',
					].join('\n')
				},
			},
			generatebytes: {
				insertText: 'generatebytes(${1:number})',
				label: 'generatebytes()',
				documentation: {
					value: [
						'```lua', 'function generatebytes(amount: number) -> encode: string', '```',
						'',
						'Generates a random sequence of bytes of the given size.',
					].join('\n')
				},
			},
			generatekey: {
				insertText: 'generatekey()',
				label: 'generatekey()',
				documentation: {
					value: [
						'```lua', 'function generatekey() -> key: string', '```',
						'',
						'Generates a base64 encoded 256-bit key. The result can be used as the second parameter for the `crypt.encrypt` and `crypt.decrypt` functions..',
					].join('\n')
				},
			},
			hash: {
				insertText: 'hash("${1:data}", "${2:algorithm}")',
				label: 'hash()',
				documentation: {
					value: [
						'```lua', 'function hash(data: string, algorithm: string) -> hash: string', '```',
						'',
						'hashes `data` with `algorithm` : `sha1`, `sha384`, `sha512`, `md5`, `sha256`, `sha3-224`, `sha3-256`, and `sha3-512`.',
					].join('\n')
				},
			},

			'Base64': {
				label: {
					name: 'Base64',
					type: 'table'
				},

				__children__: {
					Function: {
						Encode: {
							insertText: 'Encode("${1}")',
							label: 'Encode()',
							documentation: {
								value: [
									'```lua', 'function Encode(data: string) -> decode: string', '```',
									'',
									'Encodes a string `data` bytes into Base64.',
								].join('\n')
							},
						},
						Decode: {
							insertText: 'Decode("${1}")',
							label: 'Decode()',
							documentation: {
								value: [
									'```lua', 'function Decode(data: string) -> decode: string', '```',
									'',
									'Decodes a Base64 string `data` to a string of bytes.',
								].join('\n')
							},
						}
					}
				}
			}
		}
	}
});