define([
	"./common/get-locale",
	"./core",
	"./plural/rule-parser",
	"./plural/rules"
], function( commonGetLocale, Globalize, pluralRuleParser, pluralRules ) {

/**
 * Globalize.plural( value, locale )
 *
 * @value [Number]
 *
 * @locale [String]
 *
 * Return the count group String: zero | one | two | few | many | other.
 */
Globalize.plural = function( value, CLDRPluralRuleParser, locale ) {
	var form, rules;

	if ( typeof value !== "number" ) {
		throw new Error( "Value is not a number" );
	}

	locale = commonGetLocale( locale );

	rules = pluralRules( locale );
	for( form in rules ) {
		if( pluralRuleParser( value, rules[ form ], CLDRPluralRuleParser ) ) {
			return form;
		}
	}

	throw new Error( "Plural form not found!" );
};

return Globalize;

});
