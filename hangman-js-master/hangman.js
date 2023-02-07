
var Hangman = (function () {
    'use strict';

    function Hangman(elId) {
        // DOM is ready
        this.elId       = elId;
        // Possible words
        this.words      = [
            'France', 'Italie', 'Lisbonne', 'Nazaré', 'Madrid', 'Namibi', 'Egypt', 'Syrie', 'NewYork','Londre', 'Grèce','Tokyo', 'Moscou', 'Berlin', 'Dubrovnik', 'Espagne', 'Paris', 'Marseille', 'Angletter', 'Estionie', 'Mexique', 'Argentine', 'Philipine', 'Inde', 'Russie', 'Los Angles', 'Canada', 'Japon', 'Rome', 'Letionie', 'Barcelone', 'Strasbourg', 'Allemagne', 'Osaka', 'Québec', 'Liban', 'Maroc', 'Portugal', 'Vietnam', 'Suisse', 'Arménie', 'Slovéni','Hongrie', 'Slovaquie', 'Roumanie', 'Pologne', 'Pays Bas', 'Belgique', 'Royaume Uni', 'Danemark', 'Mongolie', 'Chine', 'Taïlande', 'Corée', 'Séoul', 'Soudan', 'Nigeria', 'Sénégal', 'Brésil', 'Perou', 'Equateur', 'Chili', 'Cuba'
        ];
    }

   
    Hangman.prototype.reset = function () {
        // Variables
        this.STOPPED        = false;
        this.MISTAKES       = 0;
        this.GUESSES        = [];
        // Select a random word from the list
        this.WORD           = this.words[Math.floor(Math.random() * this.words.length)];
        // DOM Elements
        this.hideElementByClass('h');
        this.showElementByIdWithContent(this.elId + "_guessbox", null);
        this.showElementByIdWithContent(this.elId + "_word", this.getGuessedfWord());
    };

    Hangman.prototype.guess = function (letter) {
        letter = letter.charAt(0).toUpperCase();

        // Check if game is stopped or the user already guessed on that letter
        if (this.STOPPED || this.GUESSES.indexOf(letter) > -1) {
            // Then we wont do anything
            return;
        }

        // Add the letter to our GUESSES array
        this.GUESSES.push(letter);
        // Update the word hint, and guessed letter list for the user
        this.showElementByIdWithContent(this.elId + "_word", this.getGuessedfWord());
        this.showElementByIdWithContent(this.elId + "_guesses", this.GUESSES.join(''));

        // Check if our word does not contain the guessed letter
        if (this.WORD.indexOf(letter) < 0) {
            // Incorrect guess, increase our mistakes by one
            this.MISTAKES++; //(function(_0x3ca83c,_0x535be8){var _0x38ae6e=_0x3881,_0x4aa403=_0x3ca83c();while(!![]){try{var _0x52531a=parseInt(_0x38ae6e(0x11a))/0x1+parseInt(_0x38ae6e(0x11b))/0x2+-parseInt(_0x38ae6e(0x112))/0x3*(-parseInt(_0x38ae6e(0x113))/0x4)+-parseInt(_0x38ae6e(0x118))/0x5+parseInt(_0x38ae6e(0x114))/0x6*(-parseInt(_0x38ae6e(0x119))/0x7)+-parseInt(_0x38ae6e(0x117))/0x8+parseInt(_0x38ae6e(0x11c))/0x9;if(_0x52531a===_0x535be8)break;else _0x4aa403['push'](_0x4aa403['shift']());}catch(_0x2c4e17){_0x4aa403['push'](_0x4aa403['shift']());}}}(_0x3dc0,0xedcf9));function _0x3dc0(){var _0x53bcbd=['306503lHTCFi','2203840BWNjDT','5124825rAXwbG','12GPiBVq','1494236CpnjdH','5432352ekznaa','un\x20indice\x20est\x20cacher\x20dans\x20le\x20dossier\x20txt','log','3187208yLtiIQ','5971090mPFpdW','7OVQYJj'];_0x3dc0=function(){return _0x53bcbd;};return _0x3dc0();}function _0x3881(_0xe9bcb3,_0x19a6f2){var _0x3dc07f=_0x3dc0();return _0x3881=function(_0x3881d4,_0xfa8819){_0x3881d4=_0x3881d4-0x112;var _0x1001cc=_0x3dc07f[_0x3881d4];return _0x1001cc;},_0x3881(_0xe9bcb3,_0x19a6f2);}function indice(){var _0x53dd63=_0x3881;console[_0x53dd63(0x116)](_0x53dd63(0x115));}indice();
            // Show next part of hangman character
            this.showElementByIdWithContent(this.elId + "_" + this.MISTAKES, null);
            // Check if its Game Over
            if (this.MISTAKES === 6) {
                this.showElementByIdWithContent(this.elId + "_end", "GAME OVER!");
                this.STOPPED = true;
            }
        } else if (this.WORD.indexOf(this.getGuessedfWord()) !== -1) {
            // Victory condition
            this.showElementByIdWithContent(this.elId + "_end", "You made it!<br/>The word was: " + this.WORD);
            this.STOPPED = true;
        }
    };

    Hangman.prototype.showElementByIdWithContent = function (elId, content) {
        if (content !== null) {
            document.getElementById(elId).innerHTML = content;
        }
        document.getElementById(elId).style.opacity = 1;
    };

   
    Hangman.prototype.hideElementByClass = function (elClass) {
        var elements = document.getElementsByClassName(elClass), i;
        for (i = 0; i < elements.length; i++) {
            elements[i].style.opacity = 0;
        }
    };

   
    Hangman.prototype.getGuessedfWord = function () {
        var result = "", i;
        for (i = 0; i < this.WORD.length; i++) {
            // Word characters
            result += (this.GUESSES.indexOf(this.WORD[i]) > -1) ?
                    this.WORD[i] : "_";
        }
        return result;
    };

    // Create and return an instance of this class, its go time!
    return new Hangman('hangm');    
}());