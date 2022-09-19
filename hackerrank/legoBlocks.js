// function legoblks(n, m) {

//

function legoBlocks(n, m) {
    var MOD = 1000000007;
    var a = 1;
    var b = 1;
    var c = 1;
    for (var i = 0; i < n; i++) {
        var na = (a + b + c) % MOD;
        var nb = (a + c) % MOD;
        var nc = (a + b) % MOD;
        a = na;
        b = nb;
        c = nc;
    }
    var d = 1;
    for (var i = 0; i < m; i++) {
        d = (d * 2) % MOD;
    }
    return (a * d) % MOD;
}