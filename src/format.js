const round = (n, p) => Math.round(n * Math.pow(10, p)) / Math.pow(10, p)

export const fromDMSToDD = ([n, h]) => {
	const f = ([d, m, s]) => d + m / 60 + s / 3600

	return [f(n), f(h)]
}

export const fromDDToDMS = ([dn, de], p = 3) => {
	const f = c => {
		const degrees = Math.floor(c)
		const minutes = Math.floor((c - degrees) * 60)
		const seconds = round((c - degrees - minutes / 60) * 3600, p)
		return [degrees, minutes, seconds]
	}

	return [f(dn), f(de)]
}

const DMSR = /(\d{1,3})°(?:\s)?(\d{1,3})'(?:\s)?(\d{1,3})(?:\.(\d{1,10}))?"(?:\s)?[a-zA-Z]{0,1}(?:\s)?(?:.|,)?(?:\s)?(\d{1,3})°(?:\s)?(\d{1,3})'(?:\s)?(\d{1,3})(?:\.(\d{1,10}))?"(?:\s)?[a-zA-Z]{0,1}/
const DDR = /(\d+)(?:.|,)(\d+)(?:\s)?,?(?:\s)?(\d+)(?:.|,)(\d+)/

export const testString = string => (DMSR.test(string) ? 'dms' : DDR.test(string) ? 'dd' : false)

export const testC = c => (Array.isArray(c[0]) && Array.isArray(c[1]) ? 'dms' : 'dd')

export const parseString = (string, format) => {
	const p = parseInt
	const pOst = string => p(string) / 10 ** string.length

	if (DMSR.test(string)) {
		const [_, dn, mn, sn, sdn, de, me, se, sde] = string.match(DMSR)
		const c = [
			[p(dn), p(mn), p(sn) + (sdn ? pOst(sdn) : 0)],
			[p(de), p(me), p(se) + (sde ? pOst(sde) : 0)]
		]
		if (format === 'dd') return fromDMSToDD(c)
		else return c
	} else if (DDR.test(string)) {
		const [_, dn, ddn, de, dde] = string.match(DDR)
		const c = [p(dn) + pOst(ddn), p(de) + pOst(dde)]
		if (format === 'dms') return fromDDToDMS(c)
		else return c
	}
}

export const DMSToString = ([[dn, mn, sn], [de, me, se]], p = 2) => `${dn}°${mn}'${round(sn, p)}", ${de}°${me}'${round(se, p)}"`

export const DDToString = ([dn, de], p = 6) => `${round(dn, p)}, ${round(de, p)}`

export const toString = (c, p) => (testC(c) === 'dms' ? DMSToString(c, p) : DDToString(c, p))

export const formatToString = (c, f, p) =>
	testC(c) == f ? toString(c, p) : f == 'dms' ? toString(fromDDToDMS(c, p), p) : toString(fromDMSToDD(c, p), p)
