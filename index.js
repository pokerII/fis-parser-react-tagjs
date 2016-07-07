'use strict';

var react = require('react-tools');

module.exports = function(content, file) {
	var filePath = file.id;
	file.id = filePath.replace(/\.jsx$/, '.js');
	console.log(file.id);

	return react.transform(content);
};