var K_PCPrompt = function (a) {
    var b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q;
    if (function () {
            function a(a) {
                var b, c, e, f;
                for (this.mode = d.MODE_8BIT_BYTE, this.data = a, this.parsedData = [], b = 0, c = this.data.length; c > b; b++)e = [], f = this.data.charCodeAt(b), f > 65536 ? (e[0] = 240 | (1835008 & f) >>> 18, e[1] = 128 | (258048 & f) >>> 12, e[2] = 128 | (4032 & f) >>> 6, e[3] = 128 | 63 & f) : f > 2048 ? (e[0] = 224 | (61440 & f) >>> 12, e[1] = 128 | (4032 & f) >>> 6, e[2] = 128 | 63 & f) : f > 128 ? (e[0] = 192 | (1984 & f) >>> 6, e[1] = 128 | 63 & f) : e[0] = f, this.parsedData.push(e);
                this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
            }

            function c(a, b) {
                this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }

            function j(a, b) {
                var c, d;
                if (void 0 == a.length)throw new Error(a.length + "/" + b);
                for (c = 0; c < a.length && 0 == a[c];)c++;
                for (this.num = new Array(a.length - c + b), d = 0; d < a.length - c; d++)this.num[d] = a[d + c]
            }

            function k(a, b) {
                this.totalCount = a, this.dataCount = b
            }

            function l() {
                this.buffer = [], this.length = 0
            }

            function n() {
                return "undefined" != typeof CanvasRenderingContext2D
            }

            function o() {
                var c, a = !1, b = navigator.userAgent;
                return /android/i.test(b) && (a = !0, c = b.toString().match(/android ([0-9]\.[0-9])/i), c && c[1] && (a = parseFloat(c[1]))), a
            }

            function s(a, b) {
                var f, g, h, c = 1, d = t(a);
                for (f = 0, g = m.length; g >= f; f++) {
                    switch (h = 0, b) {
                        case e.L:
                            h = m[f][0];
                            break;
                        case e.M:
                            h = m[f][1];
                            break;
                        case e.Q:
                            h = m[f][2];
                            break;
                        case e.H:
                            h = m[f][3]
                    }
                    if (h >= d)break;
                    c++
                }
                if (c > m.length)throw new Error("Too long data");
                return c
            }

            function t(a) {
                var b = encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
                return b.length + (b.length != a ? 3 : 0)
            }

            var d, e, f, g, h, i, m, p, q, r;
            for (a.prototype = {
                getLength: function () {
                    return this.parsedData.length
                }, write: function (a) {
                    for (var b = 0, c = this.parsedData.length; c > b; b++)a.put(this.parsedData[b], 8)
                }
            }, c.prototype = {
                addData: function (b) {
                    var c = new a(b);
                    this.dataList.push(c), this.dataCache = null
                }, isDark: function (a, b) {
                    if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b)throw new Error(a + "," + b);
                    return this.modules[a][b]
                }, getModuleCount: function () {
                    return this.moduleCount
                }, make: function () {
                    this.makeImpl(!1, this.getBestMaskPattern())
                }, makeImpl: function (a, b) {
                    var d, e;
                    for (this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount), d = 0; d < this.moduleCount; d++)for (this.modules[d] = new Array(this.moduleCount), e = 0; e < this.moduleCount; e++)this.modules[d][e] = null;
                    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, b), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = c.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, b)
                }, setupPositionProbePattern: function (a, b) {
                    var c, d;
                    for (c = -1; 7 >= c; c++)if (!(-1 >= a + c || this.moduleCount <= a + c))for (d = -1; 7 >= d; d++)-1 >= b + d || this.moduleCount <= b + d || (this.modules[a + c][b + d] = c >= 0 && 6 >= c && (0 == d || 6 == d) || d >= 0 && 6 >= d && (0 == c || 6 == c) || c >= 2 && 4 >= c && d >= 2 && 4 >= d ? !0 : !1)
                }, getBestMaskPattern: function () {
                    var c, d, a = 0, b = 0;
                    for (c = 0; 8 > c; c++)this.makeImpl(!0, c), d = g.getLostPoint(this), (0 == c || a > d) && (a = d, b = c);
                    return b
                }, createMovieClip: function (a, b, c) {
                    var f, g, h, i, j, d = a.createEmptyMovieClip(b, c), e = 1;
                    for (this.make(), f = 0; f < this.modules.length; f++)for (g = f * e, h = 0; h < this.modules[f].length; h++)i = h * e, j = this.modules[f][h], j && (d.beginFill(0, 100), d.moveTo(i, g), d.lineTo(i + e, g), d.lineTo(i + e, g + e), d.lineTo(i, g + e), d.endFill());
                    return d
                }, setupTimingPattern: function () {
                    var a, b;
                    for (a = 8; a < this.moduleCount - 8; a++)null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
                    for (b = 8; b < this.moduleCount - 8; b++)null == this.modules[6][b] && (this.modules[6][b] = 0 == b % 2)
                }, setupPositionAdjustPattern: function () {
                    var b, c, d, e, f, h, a = g.getPatternPosition(this.typeNumber);
                    for (b = 0; b < a.length; b++)for (c = 0; c < a.length; c++)if (d = a[b], e = a[c], null == this.modules[d][e])for (f = -2; 2 >= f; f++)for (h = -2; 2 >= h; h++)this.modules[d + f][e + h] = -2 == f || 2 == f || -2 == h || 2 == h || 0 == f && 0 == h ? !0 : !1
                }, setupTypeNumber: function (a) {
                    var c, d, b = g.getBCHTypeNumber(this.typeNumber);
                    for (c = 0; 18 > c; c++)d = !a && 1 == (1 & b >> c), this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = d;
                    for (c = 0; 18 > c; c++)d = !a && 1 == (1 & b >> c), this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = d
                }, setupTypeInfo: function (a, b) {
                    var e, f, c = this.errorCorrectLevel << 3 | b, d = g.getBCHTypeInfo(c);
                    for (e = 0; 15 > e; e++)f = !a && 1 == (1 & d >> e), 6 > e ? this.modules[e][8] = f : 8 > e ? this.modules[e + 1][8] = f : this.modules[this.moduleCount - 15 + e][8] = f;
                    for (e = 0; 15 > e; e++)f = !a && 1 == (1 & d >> e), 8 > e ? this.modules[8][this.moduleCount - e - 1] = f : 9 > e ? this.modules[8][15 - e - 1 + 1] = f : this.modules[8][15 - e - 1] = f;
                    this.modules[this.moduleCount - 8][8] = !a
                }, mapData: function (a, b) {
                    var h, i, j, k, c = -1, d = this.moduleCount - 1, e = 7, f = 0;
                    for (h = this.moduleCount - 1; h > 0; h -= 2)for (6 == h && h--; ;) {
                        for (i = 0; 2 > i; i++)null == this.modules[d][h - i] && (j = !1, f < a.length && (j = 1 == (1 & a[f] >>> e)), k = g.getMask(b, d, h - i), k && (j = !j), this.modules[d][h - i] = j, e--, -1 == e && (f++, e = 7));
                        if (d += c, 0 > d || this.moduleCount <= d) {
                            d -= c, c = -c;
                            break
                        }
                    }
                }
            }, c.PAD0 = 236, c.PAD1 = 17, c.createData = function (a, b, d) {
                var h, i, j, e = k.getRSBlocks(a, b), f = new l;
                for (h = 0; h < d.length; h++)i = d[h], f.put(i.mode, 4), f.put(i.getLength(), g.getLengthInBits(i.mode, a)), i.write(f);
                for (j = 0, h = 0; h < e.length; h++)j += e[h].dataCount;
                if (f.getLengthInBits() > 8 * j)throw new Error("code length overflow. (" + f.getLengthInBits() + ">" + 8 * j + ")");
                for (f.getLengthInBits() + 4 <= 8 * j && f.put(0, 4); 0 != f.getLengthInBits() % 8;)f.putBit(!1);
                for (; ;) {
                    if (f.getLengthInBits() >= 8 * j)break;
                    if (f.put(c.PAD0, 8), f.getLengthInBits() >= 8 * j)break;
                    f.put(c.PAD1, 8)
                }
                return c.createBytes(f, e)
            }, c.createBytes = function (a, b) {
                var i, k, l, m, n, o, p, q, r, s, t, c = 0, d = 0, e = 0, f = new Array(b.length), h = new Array(b.length);
                for (i = 0; i < b.length; i++) {
                    for (k = b[i].dataCount, l = b[i].totalCount - k, d = Math.max(d, k), e = Math.max(e, l), f[i] = new Array(k), m = 0; m < f[i].length; m++)f[i][m] = 255 & a.buffer[m + c];
                    for (c += k, n = g.getErrorCorrectPolynomial(l), o = new j(f[i], n.getLength() - 1), p = o.mod(n), h[i] = new Array(n.getLength() - 1), m = 0; m < h[i].length; m++)q = m + p.getLength() - h[i].length, h[i][m] = q >= 0 ? p.get(q) : 0
                }
                for (r = 0, m = 0; m < b.length; m++)r += b[m].totalCount;
                for (s = new Array(r), t = 0, m = 0; d > m; m++)for (i = 0; i < b.length; i++)m < f[i].length && (s[t++] = f[i][m]);
                for (m = 0; e > m; m++)for (i = 0; i < b.length; i++)m < h[i].length && (s[t++] = h[i][m]);
                return s
            }, d = {MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8}, e = {
                L: 1,
                M: 0,
                Q: 3,
                H: 2
            }, f = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            }, g = {
                PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                G15: 1335,
                G18: 7973,
                G15_MASK: 21522,
                getBCHTypeInfo: function (a) {
                    for (var b = a << 10; g.getBCHDigit(b) - g.getBCHDigit(g.G15) >= 0;)b ^= g.G15 << g.getBCHDigit(b) - g.getBCHDigit(g.G15);
                    return (a << 10 | b) ^ g.G15_MASK
                },
                getBCHTypeNumber: function (a) {
                    for (var b = a << 12; g.getBCHDigit(b) - g.getBCHDigit(g.G18) >= 0;)b ^= g.G18 << g.getBCHDigit(b) - g.getBCHDigit(g.G18);
                    return a << 12 | b
                },
                getBCHDigit: function (a) {
                    for (var b = 0; 0 != a;)b++, a >>>= 1;
                    return b
                },
                getPatternPosition: function (a) {
                    return g.PATTERN_POSITION_TABLE[a - 1]
                },
                getMask: function (a, b, c) {
                    switch (a) {
                        case f.PATTERN000:
                            return 0 == (b + c) % 2;
                        case f.PATTERN001:
                            return 0 == b % 2;
                        case f.PATTERN010:
                            return 0 == c % 3;
                        case f.PATTERN011:
                            return 0 == (b + c) % 3;
                        case f.PATTERN100:
                            return 0 == (Math.floor(b / 2) + Math.floor(c / 3)) % 2;
                        case f.PATTERN101:
                            return 0 == b * c % 2 + b * c % 3;
                        case f.PATTERN110:
                            return 0 == (b * c % 2 + b * c % 3) % 2;
                        case f.PATTERN111:
                            return 0 == (b * c % 3 + (b + c) % 2) % 2;
                        default:
                            throw new Error("bad maskPattern:" + a)
                    }
                },
                getErrorCorrectPolynomial: function (a) {
                    var c, b = new j([1], 0);
                    for (c = 0; a > c; c++)b = b.multiply(new j([1, h.gexp(c)], 0));
                    return b
                },
                getLengthInBits: function (a, b) {
                    if (b >= 1 && 10 > b)switch (a) {
                        case d.MODE_NUMBER:
                            return 10;
                        case d.MODE_ALPHA_NUM:
                            return 9;
                        case d.MODE_8BIT_BYTE:
                            return 8;
                        case d.MODE_KANJI:
                            return 8;
                        default:
                            throw new Error("mode:" + a)
                    } else if (27 > b)switch (a) {
                        case d.MODE_NUMBER:
                            return 12;
                        case d.MODE_ALPHA_NUM:
                            return 11;
                        case d.MODE_8BIT_BYTE:
                            return 16;
                        case d.MODE_KANJI:
                            return 10;
                        default:
                            throw new Error("mode:" + a)
                    } else {
                        if (!(41 > b))throw new Error("type:" + b);
                        switch (a) {
                            case d.MODE_NUMBER:
                                return 14;
                            case d.MODE_ALPHA_NUM:
                                return 13;
                            case d.MODE_8BIT_BYTE:
                                return 16;
                            case d.MODE_KANJI:
                                return 12;
                            default:
                                throw new Error("mode:" + a)
                        }
                    }
                },
                getLostPoint: function (a) {
                    var d, e, f, g, h, i, j, k, l, b = a.getModuleCount(), c = 0;
                    for (d = 0; b > d; d++)for (e = 0; b > e; e++) {
                        for (f = 0, g = a.isDark(d, e), h = -1; 1 >= h; h++)if (!(0 > d + h || d + h >= b))for (i = -1; 1 >= i; i++)0 > e + i || e + i >= b || (0 != h || 0 != i) && g == a.isDark(d + h, e + i) && f++;
                        f > 5 && (c += 3 + f - 5)
                    }
                    for (d = 0; b - 1 > d; d++)for (e = 0; b - 1 > e; e++)j = 0, a.isDark(d, e) && j++, a.isDark(d + 1, e) && j++, a.isDark(d, e + 1) && j++, a.isDark(d + 1, e + 1) && j++, (0 == j || 4 == j) && (c += 3);
                    for (d = 0; b > d; d++)for (e = 0; b - 6 > e; e++)a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
                    for (e = 0; b > e; e++)for (d = 0; b - 6 > d; d++)a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
                    for (k = 0, e = 0; b > e; e++)for (d = 0; b > d; d++)a.isDark(d, e) && k++;
                    return l = Math.abs(100 * k / b / b - 50) / 5, c += 10 * l
                }
            }, h = {
                glog: function (a) {
                    if (1 > a)throw new Error("glog(" + a + ")");
                    return h.LOG_TABLE[a]
                }, gexp: function (a) {
                    for (; 0 > a;)a += 255;
                    for (; a >= 256;)a -= 255;
                    return h.EXP_TABLE[a]
                }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256)
            }, i = 0; 8 > i; i++)h.EXP_TABLE[i] = 1 << i;
            for (i = 8; 256 > i; i++)h.EXP_TABLE[i] = h.EXP_TABLE[i - 4] ^ h.EXP_TABLE[i - 5] ^ h.EXP_TABLE[i - 6] ^ h.EXP_TABLE[i - 8];
            for (i = 0; 255 > i; i++)h.LOG_TABLE[h.EXP_TABLE[i]] = i;
            j.prototype = {
                get: function (a) {
                    return this.num[a]
                }, getLength: function () {
                    return this.num.length
                }, multiply: function (a) {
                    var c, d, b = new Array(this.getLength() + a.getLength() - 1);
                    for (c = 0; c < this.getLength(); c++)for (d = 0; d < a.getLength(); d++)b[c + d] ^= h.gexp(h.glog(this.get(c)) + h.glog(a.get(d)));
                    return new j(b, 0)
                }, mod: function (a) {
                    var b, c, d;
                    if (this.getLength() - a.getLength() < 0)return this;
                    for (b = h.glog(this.get(0)) - h.glog(a.get(0)), c = new Array(this.getLength()), d = 0; d < this.getLength(); d++)c[d] = this.get(d);
                    for (d = 0; d < a.getLength(); d++)c[d] ^= h.gexp(h.glog(a.get(d)) + b);
                    return new j(c, 0).mod(a)
                }
            }, k.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], k.getRSBlocks = function (a, b) {
                var d, e, f, g, h, i, j, c = k.getRsBlockTable(a, b);
                if (void 0 == c)throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
                for (d = c.length / 3, e = [], f = 0; d > f; f++)for (g = c[3 * f + 0], h = c[3 * f + 1], i = c[3 * f + 2], j = 0; g > j; j++)e.push(new k(h, i));
                return e
            }, k.getRsBlockTable = function (a, b) {
                switch (b) {
                    case e.L:
                        return k.RS_BLOCK_TABLE[4 * (a - 1) + 0];
                    case e.M:
                        return k.RS_BLOCK_TABLE[4 * (a - 1) + 1];
                    case e.Q:
                        return k.RS_BLOCK_TABLE[4 * (a - 1) + 2];
                    case e.H:
                        return k.RS_BLOCK_TABLE[4 * (a - 1) + 3];
                    default:
                        return void 0
                }
            }, l.prototype = {
                get: function (a) {
                    var b = Math.floor(a / 8);
                    return 1 == (1 & this.buffer[b] >>> 7 - a % 8)
                }, put: function (a, b) {
                    for (var c = 0; b > c; c++)this.putBit(1 == (1 & a >>> b - c - 1))
                }, getLengthInBits: function () {
                    return this.length
                }, putBit: function (a) {
                    var b = Math.floor(this.length / 8);
                    this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++
                }
            }, m = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]], p = function () {
                var a = function (a, b) {
                    this._el = a, this._htOption = b
                };
                return a.prototype.draw = function (a) {
                    function g(a, b) {
                        var d, c = document.createElementNS("http://www.w3.org/2000/svg", a);
                        for (d in b)b.hasOwnProperty(d) && c.setAttribute(d, b[d]);
                        return c
                    }

                    var h, i, j, k, b = this._htOption, c = this._el, d = a.getModuleCount();
                    for (Math.floor(b.width / d), Math.floor(b.height / d), this.clear(), h = g("svg", {
                        viewBox: "0 0 " + String(d) + " " + String(d),
                        width: "100%",
                        height: "100%",
                        fill: b.colorLight
                    }), h.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), c.appendChild(h), h.appendChild(g("rect", {
                        fill: b.colorLight,
                        width: "100%",
                        height: "100%"
                    })), h.appendChild(g("rect", {
                        fill: b.colorDark,
                        width: "1",
                        height: "1",
                        id: "template"
                    })), i = 0; d > i; i++)for (j = 0; d > j; j++)a.isDark(i, j) && (k = g("use", {
                        x: String(i),
                        y: String(j)
                    }), k.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), h.appendChild(k))
                }, a.prototype.clear = function () {
                    for (; this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)
                }, a
            }(), q = "svg" === document.documentElement.tagName.toLowerCase(), r = q ? p : n() ? function () {
                function a() {
                    this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
                }

                function d(a, b) {
                    var d, e, f, c = this;
                    return c._fFail = b, c._fSuccess = a, null === c._bSupportDataURI ? (d = document.createElement("img"), e = function () {
                        c._bSupportDataURI = !1, c._fFail && c._fFail.call(c)
                    }, f = function () {
                        c._bSupportDataURI = !0, c._fSuccess && c._fSuccess.call(c)
                    }, d.onabort = e, d.onerror = e, d.onload = f, d.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==", void 0) : (c._bSupportDataURI === !0 && c._fSuccess ? c._fSuccess.call(c) : c._bSupportDataURI === !1 && c._fFail && c._fFail.call(c), void 0)
                }

                var b, c, e;
                return this._android && this._android <= 2.1 && (b = 1 / window.devicePixelRatio, c = CanvasRenderingContext2D.prototype.drawImage, CanvasRenderingContext2D.prototype.drawImage = function (a, d, e, f, g, h, i, j) {
                    if ("nodeName" in a && /img/i.test(a.nodeName))for (var l = arguments.length - 1; l >= 1; l--)arguments[l] = arguments[l] * b; else"undefined" == typeof j && (arguments[1] *= b, arguments[2] *= b, arguments[3] *= b, arguments[4] *= b);
                    c.apply(this, arguments)
                }), e = function (a, b) {
                    this._bIsPainted = !1, this._android = o(), this._htOption = b, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = b.width, this._elCanvas.height = b.height, a.appendChild(this._elCanvas), this._el = a, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "扫描我！", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
                }, e.prototype.draw = function (a) {
                    var j, k, l, m, n, b = this._elImage, c = this._oContext, d = this._htOption, e = a.getModuleCount(), f = d.width / e, g = d.height / e, h = Math.round(f), i = Math.round(g);
                    for (b.style.display = "none", this.clear(), j = 0; e > j; j++)for (k = 0; e > k; k++)l = a.isDark(j, k), m = k * f, n = j * g, c.strokeStyle = l ? d.colorDark : d.colorLight, c.lineWidth = 1, c.fillStyle = l ? d.colorDark : d.colorLight, c.fillRect(m, n, f, g), c.strokeRect(Math.floor(m) + .5, Math.floor(n) + .5, h, i), c.strokeRect(Math.ceil(m) - .5, Math.ceil(n) - .5, h, i);
                    this._bIsPainted = !0
                }, e.prototype.makeImage = function () {
                    this._bIsPainted && d.call(this, a)
                }, e.prototype.isPainted = function () {
                    return this._bIsPainted
                }, e.prototype.clear = function () {
                    this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
                }, e.prototype.round = function (a) {
                    return a ? Math.floor(1e3 * a) / 1e3 : a
                }, e
            }() : function () {
                var a = function (a, b) {
                    this._el = a, this._htOption = b
                };
                return a.prototype.draw = function (a) {
                    var h, i, j, k, l, b = this._htOption, c = this._el, d = a.getModuleCount(), e = Math.floor(b.width / d), f = Math.floor(b.height / d), g = ['<table style="border:0;border-collapse:collapse;">'];
                    for (h = 0; d > h; h++) {
                        for (g.push("<tr>"), i = 0; d > i; i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + "px;background-color:" + (a.isDark(h, i) ? b.colorDark : b.colorLight) + ';"></td>');
                        g.push("</tr>")
                    }
                    g.push("</table>"), c.innerHTML = g.join(""), j = c.childNodes[0], k = (b.width - j.offsetWidth) / 2, l = (b.height - j.offsetHeight) / 2, k > 0 && l > 0 && (j.style.margin = l + "px " + k + "px")
                }, a.prototype.clear = function () {
                    this._el.innerHTML = ""
                }, a
            }(), b = function (a, b) {
                if (this._htOption = {
                        width: 256,
                        height: 256,
                        typeNumber: 4,
                        colorDark: "#000000",
                        colorLight: "#ffffff",
                        correctLevel: e.H
                    }, "string" == typeof b && (b = {text: b}), b)for (var c in b)this._htOption[c] = b[c];
                "string" == typeof a && (a = document.getElementById(a)), this._htOption.useSVG && (r = p), this._android = o(), this._el = a, this._oQRCode = null, this._oDrawing = new r(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
            }, b.prototype.makeCode = function (a) {
                this._oQRCode = new c(s(a, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(a), this._oQRCode.make(), this._el.title = a, this._oDrawing.draw(this._oQRCode), this.makeImage()
            }, b.prototype.makeImage = function () {
                "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
            }, b.prototype.clear = function () {
                this._oDrawing.clear()
            }, b.CorrectLevel = e
        }(), c = {
            g: function (a) {
                return document.getElementById(a)
            }, addEvent: function (a, b, c) {
                a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, function (a) {
                    a = a || window.event, a.preventDefault = a.preventDefault || function () {
                            a.returnValue = !1
                        }, c()
                })
            }
        }, d = navigator.appVersion.toLowerCase(), e = navigator.platform.toLowerCase(), -1 == d.indexOf("android") && -1 == d.indexOf("iphone") && -1 == d.indexOf("ipod") && -1 == d.indexOf("ipad") && -1 == d.indexOf("windows phone") && -1 == d.indexOf("touch") && -1 == e.indexOf("arm") && -1 == e.indexOf("linux armv7l")) {
        if (f = "", g = a.title || (document.getElementsByTagName("title")[0] ? document.getElementsByTagName("title")[0].innerHTML : ""), h = a.description || "", i = a.prefix || "K_PCPrompt", j = document.createElement("div"), k = a.prefix || "K_PCPrompt", !a.description)for (l = document.getElementsByTagName("meta"), n = l.length, m = 0; n > m; m++)"Description" == l[m].name && (h = l[m].content);
        j.id = i, j.setAttribute("class", k), j.style.cssText = "position:fixed;_position:absolute;top:0;left:0;width:100%;height:100%;background:#3d4045;text-align:center;color:#fff;z-index:99999;", f = '<div id="' + i + '_mask" style="#display:none;transition:opacity linear 500ms;position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:0;filter:alpha(opacity=0);z-index:2;"></div>' + '<h1 id="' + i + '_h1" style="color:#fff;font-size:30px;margin:80px 0 10px;">' + g + "</h1>" + '<div style="margin:0 auto 50px;position:relative;">' + '<div id="' + i + '_QRCodeBox" style="position:relative;display:block;margin:20px auto;width:250px;height:250px;padding:25px;background:#fff;border-radius:5%;"></div>' + '<p style="background:#333\0;#background:#333;display:inline-block;#display:inline;#zoom:1;height:40px;line-height:40px;background:rgba(0,0,0,0.05);box-shadow:0 0 0 #555,0 1px 1px #555,0 0 0 #555,0 -1px 1px #282828;color:#b4b7bc;font-size:12px;border-radius:30px;padding:0 50px;">请使用 手机/平板 扫描二维码</p>', a.preview && (f += '<div id="' + i + '_i6" style="transition:all ease-out 500ms;position:absolute;left:50%;top:50%;margin:-270px 0 0 -140px;opacity:0;filter:alpha(opacity=0);z-index:-1;">' + '<img src="http://ossweb-img.qq.com/images/js/PCPrompt/iphone6.png" style="position:absolute;z-index:10;">' + '<div style="background:#333 url(' + a.preview + ') center center no-repeat;width:212px;height:377px;overflow:hidden;position:absolute;z-index:5;left:33px;top:57px;"></div>' + "</div>"), o = function (a) {
            var c, b = 0;
            for (c = 0; c < a.length; c++)b += null != a[c].match(/[^x00-xff]/gi) ? 2 : 1;
            return b
        }, p = "text-align:left;", o(h) < 120 && (p = "text-align:center;"), f += '<div id="' + i + '_hover" style="width:300px;height:100%;position:absolute;top:0;left:50%;margin:0 0 0 -150px;z-index:999;"></div>' + "</div>" + '<p style="' + p + 'color:#999;font-size:12px;width:800px;margin:0 auto;line-height:2em;">' + h.slice(0, 240) + (h.length > 240 ? "……" : "") + "</p>", a.jump && (f += '<a id="' + i + '_jump" href="#" style="z-index:999;display:block;position:absolute;right:20px;top:20px;text-align:center;color:#999;font-size:14px;font-weight:bold;">直接进入 &gt;&gt;</a>'), j.innerHTML = f, document.getElementsByTagName("body")[0].appendChild(j), j.offsetHeight > 700 ? q = new b(i + "_QRCodeBox", {
            text: a.url,
            width: 250,
            height: 250,
            colorDark: "#000000"
        }) : (c.g(i + "_h1").style.marginTop = "80px", c.g(i + "_QRCodeBox").style.width = "170px", c.g(i + "_QRCodeBox").style.height = "170px", c.g(i + "_QRCodeBox").style.padding = "15px", q = new b(i + "_QRCodeBox", {
            text: a.url,
            width: 170,
            height: 170,
            colorDark: "#000000"
        })), a.preview && (c.addEvent(c.g(i + "_hover"), "mouseover", function () {
            c.g(i + "_i6").style.cssText = "transition:all ease-out 500ms;position:absolute;left:50%;top:50%;margin:-270px 0 0 180px;opacity:1;filter:alpha(opacity=100);z-index:20;", c.g(i + "_mask").style.opacity = "0.3", a.mouseover ? a.mouseover() : null
        }), c.addEvent(c.g(i + "_hover"), "mouseout", function () {
            c.g(i + "_i6").style.cssText = "transition:all ease-out 500ms;position:absolute;left:50%;top:50%;margin:-270px 0 0 -140px;opacity:0;filter:alpha(opacity=0);z-index:-1;", c.g(i + "_mask").style.opacity = "0", a.mouseout ? a.mouseout() : null
        })), a.jump && c.addEvent(c.g(i + "_jump"), "click", function (b) {
            a.jump(), b.preventDefault()
        })
    } else a.init && a.init()
};
/*  |xGv00|1b1e7b4909c233f0536200dab9faed67 */