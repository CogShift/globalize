define(function() {

/**
 * pluralRuleParser( value, cldr )
 *
 * @value [Number]
 *
 * @rule [String].
 */
return function( value, rule, CLDRPluralRuleParser ) {
	return CLDRPluralRuleParser( rule, value );
};

});
