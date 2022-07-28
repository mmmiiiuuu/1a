
function loadBase62Preset(base62String) {
    // Configure for digits + ASCII letters
    BigNumber.config({ ALPHABET: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' });
    try {
        const big = new BigNumber(base62String, 62).integerValue();
        decError.text("");
        setDecString(big.times(17));
        const bitString = big.toString(2);
        setBitString(bitString.padStart(1802, '0'));
        setBitMap();
    } catch (error) { }
}

function setPresetUrl() {
    const url = new URL(document.location);
    const params = url.searchParams;
    BigNumber.config({ ALPHABET: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' });
    const base62String = decimal.dividedBy(17).toString(62);
    $('#stringArea').text(base62String);
	$('#inp').val(base62String);
	if (base62String !== '0') {
        params.set('preset', base62String);
    } else {
        params.delete('preset');
	    
    }
    window.history.replaceState({}, document.title, url.href);
	
}

// Shorthand for $( document ).ready()
$(function () {
    const searchParams = new URLSearchParams(window.location.search);
    const base62 = searchParams.get('preset');
    if (base62 !== null) {
        loadBase62Preset(base62);
    }
	
	
});