var Filer = require('filer');
var fs = new Filer.FileSystem({provider: new Filer.FileSystem.providers.Fallback()});

module.exports = fs;