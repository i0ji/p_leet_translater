export function converter(text:string):string {

let a = /[aA]/g;
let b = /[bB]/g;
let c = /[cC]/g;
let d = /[dD]/g;
let e = /[eE]/g;
let f = /[fF]/g;
let g = /[gG]/g;
let h = /[hH]/g;
let i = /[iI]/g;
let j = /[jJ]/g;
let k = /[kK]/g;
let l = /[lL]/g;
let m = /[mM]/g;
let n = /[nN]/g;
let o = /[oO]/g;
let p = /[pP]/g;
let q = /[qQ]/g;
let r = /[rR]/g;
let s = /[sS]/g;
let t = /[tT]/g;
let u = /[uU]/g;
let v = /[vV]/g;
let w = /[wW]/g;
let x = /[xX]/g;
let y = /[yY]/g;
let z = /[zZ]/g;
let rSlash = '/';
let lSlash = 0x5C;

let convertedText = text.replace(a, '4')
                        .replace(b, '8')
                        .replace(c, '(')
                        .replace(d, '|)')
                        .replace(e, '3')
                        .replace(f, '|=')
                        .replace(g, '6')
                        .replace(h, '|-|')
                        .replace(i, '!')
                        .replace(j, ',_7')
                        .replace(k, '|<')
                        .replace(l, '1')
                        .replace(m, '^^')
                        .replace(n, '/\\/')
                        .replace(o, '0')
                        .replace(p, '|o')
                        .replace(q, 'o|')
                        .replace(r, '|2')
                        .replace(s, '5')
                        .replace(t, '7')
                        .replace(u, '|_|')
                        .replace(v, `\\/`)
                        .replace(w, '(/\\)')
                        .replace(x, '}{')
                        .replace(y, '`/')
                        .replace(z, '7_')

    return convertedText;

}