(function() {
    'use strict';

    if (!String.prototype.compareTo) {
        String.prototype.compareTo = function(str) {
            if (typeof str !== 'string') {
                throw TypeError('str must be of type string');
            }

            const self = this
            const len1 = self.length;
            const len2 = str.length;
            const smallestString = Math.min(len1, len2);

            let index = 0;
            while(index < smallestString) {
                const compare1 = self[index];
                const compare2 = str[index];

                // Ensure characters are not the same
                if(compare1 !== compare2) {

                    // Space character (char code 32)
                    if(compare1.charCodeAt(0) == 32)
                    {
                        // Sum characters if compared char is a space
                        return compare1.charCodeAt(0) + compare2.charCodeAt(0); 
                    }
                    else{
                        return compare1.charCodeAt(0) - compare2.charCodeAt(0);
                    }

                }
                index++;
            }
            return len1 - len2;
        }
    }
})();
