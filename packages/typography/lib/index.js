!(function(e, t) {
	typeof exports === 'object' && typeof module === 'object'
		? (module.exports = t())
		: typeof define === 'function' && define.amd
			? define([], t)
			: typeof exports === 'object'
				? (exports.ty = t())
				: (e.ty = t())
})(window, () =>
	(function(e) {
		const t = {}
		function n(r) {
			if (t[r]) return t[r].exports
			const o = (t[r] = { i: r, l: !1, exports: {} })
			return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
		}
		return (
			(n.m = e),
			(n.c = t),
			(n.d = function(e, t, r) {
				n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
			}),
			(n.r = function(e) {
				typeof Symbol !== 'undefined' &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
					Object.defineProperty(e, '__esModule', { value: !0 })
			}),
			(n.t = function(e, t) {
				if ((1 & t && (e = n(e)), 8 & t)) return e
				if (4 & t && typeof e === 'object' && e && e.__esModule) return e
				const r = Object.create(null)
				if (
					(n.r(r),
					Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
					2 & t && typeof e !== 'string')
				) {
					for (const o in e) {
						n.d(
							r,
							o,
							(t => {
								return e[t]
							}).bind(null, o)
						)
					}
				}
				return r
			}),
			(n.n = function(e) {
				const t =
					e && e.__esModule
						? function() {
								return e.default
						  }
						: function() {
								return e
						  }
				return n.d(t, 'a', t), t
			}),
			(n.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}),
			(n.p = ''),
			n((n.s = 8))
		)
	})([
		function(e, t, n) {
			e.exports = n(2)
		},
		function(e, t, n) {
			let r = n(4)
			typeof r === 'string' && (r = [[e.i, r, '']])
			const o = { hmr: !0, transform: void 0, insertInto: void 0 }
			n(6)(r, o)
			r.locals && (e.exports = r.locals)
		},
		function(e, t, n) {
			/** @license React v16.5.2
			 * react.production.min.js
			 *
			 * Copyright (c) Facebook, Inc. and its affiliates.
			 *
			 * This source code is licensed under the MIT license found in the
			 * LICENSE file in the root directory of this source tree.
			 */ const r = n(3)

			const o = typeof Symbol === 'function' && Symbol.for

			const i = o ? Symbol.for('react.element') : 60103

			const u = o ? Symbol.for('react.portal') : 60106

			const f = o ? Symbol.for('react.fragment') : 60107

			const c = o ? Symbol.for('react.strict_mode') : 60108

			const a = o ? Symbol.for('react.profiler') : 60114

			const l = o ? Symbol.for('react.provider') : 60109

			const s = o ? Symbol.for('react.context') : 60110

			const p = o ? Symbol.for('react.async_mode') : 60111

			const d = o ? Symbol.for('react.forward_ref') : 60112
			o && Symbol.for('react.placeholder')
			const y = typeof Symbol === 'function' && Symbol.iterator
			function v(e) {
				for (
					var t = arguments.length - 1,
						n = `https://reactjs.org/docs/error-decoder.html?invariant=${e}`,
						r = 0;
					r < t;
					r++
				)
					n += `&args[]=${encodeURIComponent(arguments[r + 1])}`
				!(function(e, t, n, r, o, i, u, f) {
					if (!e) {
						if (((e = void 0), void 0 === t)) {
							e = Error(
								'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
							)
						} else {
							const c = [n, r, o, i, u, f]

							let a = 0
							;(e = Error(t.replace(/%s/g, () => c[a++]))).name =
								'Invariant Violation'
						}
						throw ((e.framesToPop = 1), e)
					}
				})(
					!1,
					`Minified React error #${e}; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. `,
					n
				)
			}
			const b = {
				isMounted() {
					return !1
				},
				enqueueForceUpdate() {},
				enqueueReplaceState() {},
				enqueueSetState() {},
			}

			const h = {}
			function m(e, t, n) {
				;(this.props = e),
					(this.context = t),
					(this.refs = h),
					(this.updater = n || b)
			}
			function g() {}
			function j(e, t, n) {
				;(this.props = e),
					(this.context = t),
					(this.refs = h),
					(this.updater = n || b)
			}
			;(m.prototype.isReactComponent = {}),
				(m.prototype.setState = function(e, t) {
					typeof e !== 'object' &&
						typeof e !== 'function' &&
						e != null &&
						v('85'),
						this.updater.enqueueSetState(this, e, t, 'setState')
				}),
				(m.prototype.forceUpdate = function(e) {
					this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
				}),
				(g.prototype = m.prototype)
			const w = (j.prototype = new g())
			;(w.constructor = j), r(w, m.prototype), (w.isPureReactComponent = !0)
			const O = { current: null, currentDispatcher: null }

			const S = Object.prototype.hasOwnProperty

			const x = {
				key: !0,
				ref: !0,
				__self: !0,
				__source: !0,
			}
			function _(e, t, n) {
				let r = void 0

				const o = {}

				let u = null

				let f = null
				if (t != null) {
					for (r in (void 0 !== t.ref && (f = t.ref),
					void 0 !== t.key && (u = `${t.key}`),
					t))
						S.call(t, r) && !x.hasOwnProperty(r) && (o[r] = t[r])
				}
				let c = arguments.length - 2
				if (c === 1) o.children = n
				else if (c > 1) {
					for (var a = Array(c), l = 0; l < c; l++) a[l] = arguments[l + 2]
					o.children = a
				}
				if (e && e.defaultProps)
					for (r in (c = e.defaultProps)) void 0 === o[r] && (o[r] = c[r])
				return {
					$$typeof: i,
					type: e,
					key: u,
					ref: f,
					props: o,
					_owner: O.current,
				}
			}
			function k(e) {
				return typeof e === 'object' && e !== null && e.$$typeof === i
			}
			const E = /\/+/g

			const P = []
			function C(e, t, n, r) {
				if (P.length) {
					const o = P.pop()
					return (
						(o.result = e),
						(o.keyPrefix = t),
						(o.func = n),
						(o.context = r),
						(o.count = 0),
						o
					)
				}
				return {
					result: e,
					keyPrefix: t,
					func: n,
					context: r,
					count: 0,
				}
			}
			function R(e) {
				;(e.result = null),
					(e.keyPrefix = null),
					(e.func = null),
					(e.context = null),
					(e.count = 0),
					P.length < 10 && P.push(e)
			}
			function U(e, t, n) {
				return e == null
					? 0
					: (function e(t, n, r, o) {
							let f = typeof t
							;(f !== 'undefined' && f !== 'boolean') || (t = null)
							let c = !1
							if (t === null) c = !0
							else {
								switch (f) {
									case 'string':
									case 'number':
										c = !0
										break
									case 'object':
										switch (t.$$typeof) {
											case i:
											case u:
												c = !0
										}
								}
							}
							if (c) return r(o, t, n === '' ? `.${$(t, 0)}` : n), 1
							if (((c = 0), (n = n === '' ? '.' : `${n}:`), Array.isArray(t))) {
								for (var a = 0; a < t.length; a++) {
									var l = n + $((f = t[a]), a)
									c += e(f, l, r, o)
								}
							} else if (
								((l =
									t === null || typeof t !== 'object'
										? null
										: typeof (l = (y && t[y]) || t['@@iterator']) === 'function'
											? l
											: null),
								typeof l === 'function')
							)
								for (t = l.call(t), a = 0; !(f = t.next()).done; )
									c += e((f = f.value), (l = n + $(f, a++)), r, o)
							else {
								f === 'object' &&
									v(
										'31',
										(r = `${t}`) == '[object Object]'
											? `object with keys {${Object.keys(t).join(', ')}}`
											: r,
										''
									)
							}
							return c
					  })(e, '', t, n)
			}
			function $(e, t) {
				return typeof e === 'object' && e !== null && e.key != null
					? (function(e) {
							const t = { '=': '=0', ':': '=2' }
							return `$${`${e}`.replace(/[=:]/g, e => t[e])}`
					  })(e.key)
					: t.toString(36)
			}
			function A(e, t) {
				e.func.call(e.context, t, e.count++)
			}
			function L(e, t, n) {
				const r = e.result

				const o = e.keyPrefix
				;(e = e.func.call(e.context, t, e.count++)),
					Array.isArray(e)
						? M(e, r, n, e => e)
						: e != null &&
						  (k(e) &&
								(e = (function(e, t) {
									return {
										$$typeof: i,
										type: e.type,
										key: t,
										ref: e.ref,
										props: e.props,
										_owner: e._owner,
									}
								})(
									e,
									o +
										(!e.key || (t && t.key === e.key)
											? ''
											: `${`${e.key}`.replace(E, '$&/')}/`) +
										n
								)),
						  r.push(e))
			}
			function M(e, t, n, r, o) {
				let i = ''
				n != null && (i = `${`${n}`.replace(E, '$&/')}/`),
					U(e, L, (t = C(t, i, r, o))),
					R(t)
			}
			const T = {
				Children: {
					map(e, t, n) {
						if (e == null) return e
						const r = []
						return M(e, r, null, t, n), r
					},
					forEach(e, t, n) {
						if (e == null) return e
						U(e, A, (t = C(null, null, t, n))), R(t)
					},
					count(e) {
						return U(e, () => null, null)
					},
					toArray(e) {
						const t = []
						return M(e, t, null, e => e), t
					},
					only(e) {
						return k(e) || v('143'), e
					},
				},
				createRef() {
					return { current: null }
				},
				Component: m,
				PureComponent: j,
				createContext(e, t) {
					return (
						void 0 === t && (t = null),
						((e = {
							$$typeof: s,
							_calculateChangedBits: t,
							_currentValue: e,
							_currentValue2: e,
							Provider: null,
							Consumer: null,
							unstable_read: null,
						}).Provider = { $$typeof: l, _context: e }),
						(e.Consumer = e),
						(e.unstable_read = function(e, t) {
							const n = O.currentDispatcher
							return n === null && v('277'), n.readContext(e, t)
						}.bind(null, e)),
						e
					)
				},
				forwardRef(e) {
					return { $$typeof: d, render: e }
				},
				Fragment: f,
				StrictMode: c,
				unstable_AsyncMode: p,
				unstable_Profiler: a,
				createElement: _,
				cloneElement(e, t, n) {
					;(e === null || void 0 === e) && v('267', e)
					let o = void 0

					const u = r({}, e.props)

					let f = e.key

					let c = e.ref

					let a = e._owner
					if (t != null) {
						void 0 !== t.ref && ((c = t.ref), (a = O.current)),
							void 0 !== t.key && (f = `${t.key}`)
						var l = void 0
						for (o in (e.type &&
							e.type.defaultProps &&
							(l = e.type.defaultProps),
						t)) {
							S.call(t, o) &&
								!x.hasOwnProperty(o) &&
								(u[o] = void 0 === t[o] && void 0 !== l ? l[o] : t[o])
						}
					}
					if ((o = arguments.length - 2) === 1) u.children = n
					else if (o > 1) {
						l = Array(o)
						for (let s = 0; s < o; s++) l[s] = arguments[s + 2]
						u.children = l
					}
					return {
						$$typeof: i,
						type: e.type,
						key: f,
						ref: c,
						props: u,
						_owner: a,
					}
				},
				createFactory(e) {
					const t = _.bind(null, e)
					return (t.type = e), t
				},
				isValidElement: k,
				version: '16.5.2',
				__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
					ReactCurrentOwner: O,
					assign: r,
				},
			}

			const I = { default: T }

			const N = (I && T) || I
			e.exports = N.default || N
		},
		function(e, t, n) {
			/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ const r =
				Object.getOwnPropertySymbols

			const o = Object.prototype.hasOwnProperty

			const i = Object.prototype.propertyIsEnumerable
			e.exports = (function() {
				try {
					if (!Object.assign) return !1
					const e = new String('abc')
					if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5'))
						return !1
					for (var t = {}, n = 0; n < 10; n++)
						t[`_${String.fromCharCode(n)}`] = n
					if (
						Object.getOwnPropertyNames(t)
							.map(e => t[e])
							.join('') !== '0123456789'
					)
						return !1
					const r = {}
					return (
						'abcdefghijklmnopqrst'.split('').forEach(e => {
							r[e] = e
						}),
						Object.keys(Object.assign({}, r)).join('') ===
							'abcdefghijklmnopqrst'
					)
				} catch (e) {
					return !1
				}
			})()
				? Object.assign
				: function(e, t) {
						for (
							var n,
								u,
								f = (function(e) {
									if (e === null || void 0 === e) {
										throw new TypeError(
											'Object.assign cannot be called with null or undefined'
										)
									}
									return Object(e)
								})(e),
								c = 1;
							c < arguments.length;
							c++
						) {
							for (const a in (n = Object(arguments[c])))
								o.call(n, a) && (f[a] = n[a])
							if (r) {
								u = r(n)
								for (let l = 0; l < u.length; l++)
									i.call(n, u[l]) && (f[u[l]] = n[u[l]])
							}
						}
						return f
				  }
		},
		function(e, t, n) {
			;(e.exports = n(5)(!1)).push([e.i, '.test {\n  color: red; }\n', ''])
		},
		function(e, t) {
			e.exports = function(e) {
				const t = []
				return (
					(t.toString = function() {
						return this.map(t => {
							const n = (function(e, t) {
								const n = e[1] || ''

								const r = e[3]
								if (!r) return n
								if (t && typeof btoa === 'function') {
									const o = (function(e) {
										return `/*# sourceMappingURL=data:application/json;charset=utf-8;base64,${btoa(
											unescape(encodeURIComponent(JSON.stringify(e)))
										)} */`
									})(r)

									const i = r.sources.map(
										e => `/*# sourceURL=${r.sourceRoot}${e} */`
									)
									return [n]
										.concat(i)
										.concat([o])
										.join('\n')
								}
								return [n].join('\n')
							})(t, e)
							return t[2] ? `@media ${t[2]}{${n}}` : n
						}).join('')
					}),
					(t.i = function(e, n) {
						typeof e === 'string' && (e = [[null, e, '']])
						for (var r = {}, o = 0; o < this.length; o++) {
							const i = this[o][0]
							typeof i === 'number' && (r[i] = !0)
						}
						for (o = 0; o < e.length; o++) {
							const u = e[o]
							;(typeof u[0] === 'number' && r[u[0]]) ||
								(n && !u[2] ? (u[2] = n) : n && (u[2] = `(${u[2]}) and (${n})`),
								t.push(u))
						}
					}),
					t
				)
			}
		},
		function(e, t, n) {
			const r = {}

			const o = (function(e) {
				let t
				return function() {
					return void 0 === t && (t = e.apply(this, arguments)), t
				}
			})(() => window && document && document.all && !window.atob)

			const i = (function(e) {
				const t = {}
				return function(e, n) {
					if (typeof e === 'function') return e()
					if (void 0 === t[e]) {
						let r = function(e, t) {
							return t ? t.querySelector(e) : document.querySelector(e)
						}.call(this, e, n)
						if (
							window.HTMLIFrameElement &&
							r instanceof window.HTMLIFrameElement
						) {
							try {
								r = r.contentDocument.head
							} catch (e) {
								r = null
							}
						}
						t[e] = r
					}
					return t[e]
				}
			})()

			let u = null

			let f = 0

			const c = []

			const a = n(7)
			function l(e, t) {
				for (let n = 0; n < e.length; n++) {
					const o = e[n]

					const i = r[o.id]
					if (i) {
						i.refs++
						for (var u = 0; u < i.parts.length; u++) i.parts[u](o.parts[u])
						for (; u < o.parts.length; u++) i.parts.push(b(o.parts[u], t))
					} else {
						const f = []
						for (u = 0; u < o.parts.length; u++) f.push(b(o.parts[u], t))
						r[o.id] = { id: o.id, refs: 1, parts: f }
					}
				}
			}
			function s(e, t) {
				for (var n = [], r = {}, o = 0; o < e.length; o++) {
					const i = e[o]

					const u = t.base ? i[0] + t.base : i[0]

					const f = { css: i[1], media: i[2], sourceMap: i[3] }
					r[u] ? r[u].parts.push(f) : n.push((r[u] = { id: u, parts: [f] }))
				}
				return n
			}
			function p(e, t) {
				const n = i(e.insertInto)
				if (!n) {
					throw new Error(
						"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
					)
				}
				const r = c[c.length - 1]
				if (e.insertAt === 'top') {
					r
						? r.nextSibling
							? n.insertBefore(t, r.nextSibling)
							: n.appendChild(t)
						: n.insertBefore(t, n.firstChild),
						c.push(t)
				} else if (e.insertAt === 'bottom') n.appendChild(t)
				else {
					if (typeof e.insertAt !== 'object' || !e.insertAt.before) {
						throw new Error(
							"[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
						)
					}
					const o = i(e.insertAt.before, n)
					n.insertBefore(t, o)
				}
			}
			function d(e) {
				if (e.parentNode === null) return !1
				e.parentNode.removeChild(e)
				const t = c.indexOf(e)
				t >= 0 && c.splice(t, 1)
			}
			function y(e) {
				const t = document.createElement('style')
				if (
					(void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
					void 0 === e.attrs.nonce)
				) {
					const r = (function() {
						0

						return n.nc
					})()
					r && (e.attrs.nonce = r)
				}
				return v(t, e.attrs), p(e, t), t
			}
			function v(e, t) {
				Object.keys(t).forEach(n => {
					e.setAttribute(n, t[n])
				})
			}
			function b(e, t) {
				let n
				let r
				let o
				let i
				if (t.transform && e.css) {
					if (
						!(i =
							typeof t.transform === 'function'
								? t.transform(e.css)
								: t.transform.default(e.css))
					)
						return function() {}
					e.css = i
				}
				if (t.singleton) {
					const c = f++
					;(n = u || (u = y(t))),
						(r = m.bind(null, n, c, !1)),
						(o = m.bind(null, n, c, !0))
				} else {
					e.sourceMap &&
					typeof URL === 'function' &&
					typeof URL.createObjectURL === 'function' &&
					typeof URL.revokeObjectURL === 'function' &&
					typeof Blob === 'function' &&
					typeof btoa === 'function'
						? ((n = (function(e) {
								const t = document.createElement('link')
								return (
									void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
									(e.attrs.rel = 'stylesheet'),
									v(t, e.attrs),
									p(e, t),
									t
								)
						  })(t)),
						  (r = function(e, t, n) {
								let r = n.css

								const o = n.sourceMap

								const i = void 0 === t.convertToAbsoluteUrls && o
								;(t.convertToAbsoluteUrls || i) && (r = a(r))
								o &&
									(r += `\n/*# sourceMappingURL=data:application/json;base64,${btoa(
										unescape(encodeURIComponent(JSON.stringify(o)))
									)} */`)
								const u = new Blob([r], { type: 'text/css' })

								const f = e.href
								;(e.href = URL.createObjectURL(u)), f && URL.revokeObjectURL(f)
						  }.bind(null, n, t)),
						  (o = function() {
								d(n), n.href && URL.revokeObjectURL(n.href)
						  }))
						: ((n = y(t)),
						  (r = function(e, t) {
								const n = t.css

								const r = t.media
								r && e.setAttribute('media', r)
								if (e.styleSheet) e.styleSheet.cssText = n
								else {
									for (; e.firstChild; ) e.removeChild(e.firstChild)
									e.appendChild(document.createTextNode(n))
								}
						  }.bind(null, n)),
						  (o = function() {
								d(n)
						  }))
				}
				return (
					r(e),
					function(t) {
						if (t) {
							if (
								t.css === e.css &&
								t.media === e.media &&
								t.sourceMap === e.sourceMap
							)
								return
							r((e = t))
						} else o()
					}
				)
			}
			e.exports = function(e, t) {
				if (
					typeof DEBUG !== 'undefined' &&
					DEBUG &&
					typeof document !== 'object'
				) {
					throw new Error(
						'The style-loader cannot be used in a non-browser environment'
					)
				}
				;((t = t || {}).attrs = typeof t.attrs === 'object' ? t.attrs : {}),
					t.singleton ||
						typeof t.singleton === 'boolean' ||
						(t.singleton = o()),
					t.insertInto || (t.insertInto = 'head'),
					t.insertAt || (t.insertAt = 'bottom')
				const n = s(e, t)
				return (
					l(n, t),
					function(e) {
						for (var o = [], i = 0; i < n.length; i++) {
							const u = n[i]
							;(f = r[u.id]).refs--, o.push(f)
						}
						e && l(s(e, t), t)
						for (i = 0; i < o.length; i++) {
							var f
							if ((f = o[i]).refs === 0) {
								for (let c = 0; c < f.parts.length; c++) f.parts[c]()
								delete r[f.id]
							}
						}
					}
				)
			}
			const h = (function() {
				const e = []
				return function(t, n) {
					return (e[t] = n), e.filter(Boolean).join('\n')
				}
			})()
			function m(e, t, n, r) {
				const o = n ? '' : r.css
				if (e.styleSheet) e.styleSheet.cssText = h(t, o)
				else {
					const i = document.createTextNode(o)

					const u = e.childNodes
					u[t] && e.removeChild(u[t]),
						u.length ? e.insertBefore(i, u[t]) : e.appendChild(i)
				}
			}
		},
		function(e, t) {
			e.exports = function(e) {
				const t = typeof window !== 'undefined' && window.location
				if (!t) throw new Error('fixUrls requires window.location')
				if (!e || typeof e !== 'string') return e
				const n = `${t.protocol}//${t.host}`

				const r = n + t.pathname.replace(/\/[^\/]*$/, '/')
				return e.replace(
					/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
					(e, t) => {
						let o

						const i = t
							.trim()
							.replace(/^"(.*)"$/, (e, t) => t)
							.replace(/^'(.*)'$/, (e, t) => t)
						return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
							? e
							: ((o =
									i.indexOf('//') === 0
										? i
										: i.indexOf('/') === 0
											? n + i
											: r + i.replace(/^\.\//, '')),
							  `url(${JSON.stringify(o)})`)
					}
				)
			}
		},
		function(e, t, n) {
			n.r(t)
			const r = n(0)

			const o = n.n(r)

			const i = n(1)

			const u = n.n(i)
			function f(e) {
				return (f =
					typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
						? function(e) {
								return typeof e
						  }
						: function(e) {
								return e &&
									typeof Symbol === 'function' &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? 'symbol'
									: typeof e
						  })(e)
			}
			function c(e, t) {
				for (let n = 0; n < t.length; n++) {
					const r = t[n]
					;(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r)
				}
			}
			function a(e, t) {
				return !t || (f(t) !== 'object' && typeof t !== 'function')
					? (function(e) {
							if (void 0 === e) {
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								)
							}
							return e
					  })(e)
					: t
			}
			function l(e) {
				return (l = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function(e) {
							return e.__proto__ || Object.getPrototypeOf(e)
					  })(e)
			}
			function s(e, t) {
				return (s =
					Object.setPrototypeOf ||
					function(e, t) {
						return (e.__proto__ = t), e
					})(e, t)
			}
			const p = (function(e) {
				function t() {
					return (
						(function(e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function')
						})(this, t),
						a(this, l(t).apply(this, arguments))
					)
				}
				return (
					(function(e, t) {
						if (typeof t !== 'function' && t !== null) {
							throw new TypeError(
								'Super expression must either be null or a function'
							)
						}
						;(e.prototype = Object.create(t && t.prototype, {
							constructor: { value: e, writable: !0, configurable: !0 },
						})),
							t && s(e, t)
					})(t, o.a.Component),
					(function(e, t, n) {
						t && c(e.prototype, t), n && c(e, n)
					})(t, [
						{
							key: 'render',
							value() {
								return o.a.createElement(
									'div',
									null,
									o.a.createElement(
										'a',
										{ href: '/', className: u.a.test },
										'test4！'
									)
								)
							},
						},
					]),
					t
				)
			})()
			t.default = p
		},
	])
)
