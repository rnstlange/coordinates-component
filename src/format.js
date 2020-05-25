import proj from 'proj4'
import { DMSR, DDR } from './regexps'

proj.defs(
	'MB:6331964',
	'+title=МСК-1964 Санкт-Петербург +proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=95942.17 +y_0=-6552810.0 +ellps=krass +towgs84=23.57,-140.95,-79.8,0,0.35,0.79,-0.22 +units=m +no_defs'
)
// '+proj=tmerc +ellps=krass +towgs84=23.57,-140.95,-79.8,0,0.35,0.79,-0.22 +units=m +lon_0=30 +lat_0=0 +k_0=1 +x_0=95942.17 +y_0=-6552810'
// '+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=95942.17 +y_0=-6552810 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs'
// '+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=95942.17 +y_0=-6552810 +ellps=krass'

const round = (n, p) => Math.round(n * Math.pow(10, p)) / Math.pow(10, p)
const normalize = (x, num) => x.toString().padStart(num, 0)
const normalizeRounded = (x, num, p) => {
	const xr = round(x, p)
	const n = Math.floor(xr)
	const ost = Math.floor((xr - n) * Math.pow(10, p))
	return `${normalize(n, num)}${ost != 0 ? `.${ost}` : ''}`
}

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

export const testString = string => (DMSR.test(string) ? 'dms' : DDR.test(string) ? 'dd' : false)

export const testC = c => (Array.isArray(c[0]) && Array.isArray(c[1]) ? 'dms' : 'dd')

export const parseString = (string, format) => {
	const p = parseInt
	const pOst = string => p(string) / 10 ** string.length

	if (DDR.test(string)) {
		const [_, dn, ddn, de, dde] = string.match(DDR)
		console.log(dn, ddn, de, dde)
		const c = [p(dn) + pOst(ddn), p(de) + pOst(dde)]
		console.log(c)
		if (format === 'dms') return fromDDToDMS(c)
		else return c
	} else if (DMSR.test(string)) {
		const [_, dn, mn, sn, sdn, de, me, se, sde] = string.match(DMSR)
		const c = [
			[p(dn), p(mn), p(sn) + (sdn ? pOst(sdn) : 0)],
			[p(de), p(me), p(se) + (sde ? pOst(sde) : 0)]
		]
		if (format === 'dd') return fromDMSToDD(c)
		else return c
	}
}

export const DMSToString = ([[dn, mn, sn], [de, me, se]], p = 2) => {
	const n = x => normalize(x, 2)
	const nr = x => normalizeRounded(x, 2, p)
	return `${n(dn)}°${n(mn)}'${nr(sn)}", ${n(de)}°${n(me)}'${nr(se)}"`
}

export const DDToString = ([dn, de], p = 6) => `${round(dn, p)}, ${round(de, p)}`

export const toString = (c, p) => (testC(c) === 'dms' ? DMSToString(c, p) : DDToString(c, p))

export const formatToString = (c, f, p) =>
	testC(c) == f ? toString(c, p) : f == 'dms' ? toString(fromDDToDMS(c, p), p) : toString(fromDMSToDD(c, p), p)

const swap = ([a, b]) => [b, a]

export const fromMSK64ToWGS84 = coordinates => swap(proj('MB:6331964', 'WGS84', coordinates))
export const fromMSK64ToEPSG3857 = coordinates => swap(proj('MB:6331964', 'EPSG:3857', coordinates))

export const fromWGS84ToEPSG3857 = coordinates => proj('WGS84', 'EPSG:3857', coordinates)
export const fromWGS84ToMSK64 = coordinates => proj('WGS84', 'MB:6331964', swap(coordinates))

export const fromEPSG3857ToWGS84 = coordinates => proj('EPSG:3857', 'WGS84', coordinates)
export const fromEPSG3857ToMSK64 = coordinates => proj('EPSG:3857', 'MB:6331964', swap(coordinates))
