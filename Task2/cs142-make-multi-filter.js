"use strict";

function Cs142TemplateProcessor(template) {
    this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
    var result = this.template;

    result = result.replace(/{{(.*?)}}/g, function(match, property) {
        if (dictionary[property] !== undefined) {
            return dictionary[property];
        } else {
            return "";
        }
    });

    return result;
};