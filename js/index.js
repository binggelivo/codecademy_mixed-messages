console.log("Wettergott");

const wetterArten = ["sonnig", "bewölkt", "regnerisch", "schnee", "wechselhaft"];

const wetterTag = (art, wind, regen, mintemp, maxtemp) => {
    return {
        _art: art,
        _wind: wind,
        _regen: regen,
        _mintemp: mintemp,
        _maxtemp: maxtemp,
        new() {
            console.log(wetterArten[Math.floor(Math.random() * wetterArten.length)]);
            this._art = wetterArten[Math.floor(Math.random() * wetterArten.length)];
            this._wind = Math.floor(Math.random() * 200);
            this._regen = Math.floor(Math.random() * 200);
            this._mintemp = Math.floor((Math.random() * 60) -20);
            this._maxtemp = Math.floor((Math.random() * 60) -10);
        }
    }
}

let montag = wetterTag("Regen", 12, 15, -2, 12);

montag.new();
console.log(montag);


