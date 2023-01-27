## svelte-grid-sync

Tiny demo app to show peer-to-peer (via WebRTC) CRDT multiplayer capabilties.
Click in the grid to color it, choose which color down below.  
Uses Yjs's WebRTC connector and signaling server to connect users, so no backend is involved after the discovery step.  
The grid will clear when noone's around anymore.

Uses convenience library [syncedstore](https://syncedstore.org/docs/) on top of [Yjs](https://docs.yjs.dev).  
Those makes this super simple.

Interactive demo: https://lavish-number.surge.sh/
