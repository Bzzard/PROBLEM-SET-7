var caesarShift = function(str, amount) {
    var out = ""
    for (var i = 0; i < str.length; i ++) {
        var c = str[i];
        
        if ((c.charCodeAt(0) >= 65) && (c.charCodeAt(0) <= 90)) {
			var n = c.charCodeAt(0) - 65;
            out += String.fromCharCode(((n + amount) % 26) + 65);
        }
        
        else if ((c.charCodeAt(0) >= 97) && (c.charCodeAt(0) <= 122)) {
            var n = c.charCodeAt(0) - 97;
            out += String.fromCharCode(((n + amount) % 26) + 97);
        }
        
        else if (c.charCodeAt(0) === 32) {
            var n = c.charCodeAt(0);
            out += String.fromCharCode(n);
        }
    }
    
    console.log(out);
};

caesarShift('Hello World', 5);  // should return 'Mjqqt Btwqi'
caesarShift('Hello World', 21); // should return 'Czggj Rjmgy'