import TextBlock from "../components/TextBlock/TextBlock";

export function converter(text: string, level: string): any {

    const letters = {
        a: /[aA]/g,
        b: /[bB]/g,
        c: /[cC]/g,
        d: /[dD]/g,
        e: /[eE]/g,
        f: /[fF]/g,
        g: /[gG]/g,
        h: /[hH]/g,
        i: /[iI]/g,
        j: /[jJ]/g,
        k: /[kK]/g,
        l: /[lL]/g,
        m: /[mM]/g,
        n: /[nN]/g,
        o: /[oO]/g,
        p: /[pP]/g,
        q: /[qQ]/g,
        r: /[rR]/g,
        s: /[sS]/g,
        t: /[tT]/g,
        u: /[uU]/g,
        v: /[vV]/g,
        w: /[wW]/g,
        x: /[xX]/g,
        y: /[yY]/g,
        z: /[zZ]/g,
    }
    switch (level) {
        case 'sl':
            let convertedText = text
                .replace(letters.a, '4')
                .replace(letters.b, '8')
                //.replace(c, '(')
                // .replace(d, '|)')
                .replace(letters.e, '3')
                //.replace(f, '|=')
                .replace(letters.g, '9')
                //.replace(h, '|-|')
                .replace(letters.i, '!')
                // .replace(j, ',_7')
                // .replace(k, '|<')
                .replace(letters.l, '1')
                // .replace(m, '^^')
                //.replace(n, '/\\/')
                .replace(letters.o, '0')
                //.replace(p, '|o')
                //.replace(q, 'o|')
                .replace(letters.r, '2')
                .replace(letters.s, '5')
                .replace(letters.t, '7')
                //.replace(u, '|_|')
                //.replace(v, `\\/`)
                //.replace(w, '(/\\)')
                // .replace(x, '}{')
                //.replace(y, '`/')
                .replace(letters.z, '2')
            break;
        case 'ml':
            convertedText = text
                .replace(letters.a, '4')
                .replace(letters.b, '8')
                .replace(letters.c, '(')
                .replace(letters.d, '|)')
                .replace(letters.e, '3')
                .replace(letters.f, '|=')
                .replace(letters.g, '9')
                .replace(letters.h, '|-|')
                .replace(letters.l, '1')
                .replace(letters.m, '^^')
                .replace(letters.n, '/\\/')
                .replace(letters.o, '0')
                .replace(letters.p, '|o')
                .replace(letters.q, 'o|')
                .replace(letters.r, '2')
                .replace(letters.s, '5')
                .replace(letters.t, '7')
                .replace(letters.u, '|_|')
                .replace(letters.v, `\\/`)
                .replace(letters.w, '(/\\)')
                .replace(letters.x, '}{')
                .replace(letters.y, '`/')
                .replace(letters.z, '2')
            break;
        case 'hl':
            convertedText = text
                .replace(letters.a, '/-\\')
                .replace(letters.b, '|3')
                .replace(letters.c, '(')
                .replace(letters.d, '|)')
                .replace(letters.e, '|-')
                .replace(letters.f, '|=')
                .replace(letters.g, '(_+')
                .replace(letters.h, '#')
                .replace(letters.i, '!')
                .replace(letters.j, '_|')
                .replace(letters.k, '|<')
                .replace(letters.l, '|_')
                .replace(letters.m, '/\\/\\')
                .replace(letters.n, '/\\/')
                .replace(letters.o, '[]')
                .replace(letters.p, '|>')
                .replace(letters.q, '(_,)')
                .replace(letters.r, '/2')
                .replace(letters.s, '$')
                .replace(letters.t, "'|'")
                .replace(letters.u, '|_|')
                .replace(letters.v, `|/`)
                .replace(letters.w, '\\|/')
                .replace(letters.x, ')(')
                .replace(letters.y, '`/')
                .replace(letters.z, '7_')
    }
}