import { syncedStore, getYjsDoc } from '@syncedstore/core';
import { WebrtcProvider } from 'y-webrtc';
import { svelteSyncedStore } from '@syncedstore/svelte';

export const GRID = {
	COLS: 40,
	ROWS: 40
};

/**
 * @typedef {Object} GridCell
 * @property {string} color
 */

const store = syncedStore(
	/** @type {import('@syncedstore/core/types/doc').MappedTypeDescription<{grid: {[key:string]: GridCell}}>} */ ({
		grid: {}
	})
);
export const svelteStore = svelteSyncedStore(store);

const doc = getYjsDoc(store);
export const webrtcProvider = new WebrtcProvider('synced-grid-tmpd2', doc);

export const disconnectStoreSync = webrtcProvider.disconnect.bind(webrtcProvider);
export const connectStoreSync = webrtcProvider.connect.bind(webrtcProvider);

/**
 * @param {number} row
 * @param {number} col
 * @returns {string}
 */
export function makeKey(row, col) {
	return `${row}:${col}`;
}
