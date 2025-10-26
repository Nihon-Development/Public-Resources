define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		"Field": {
            connect: {
                insertText: 'connect("${1:url}")',
                label: 'connect()'
            },

            Send: {
                insertText: 'Send("${1}")',
                label: 'Send()'
            },
            Close: {
                insertText: 'Close()',
                label: 'Close()'
            },
		}
	}
});