import { TextEncoder, TextDecoder } from 'util';

// Atribuindo o polyfill ao global para o Jest reconhecer
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
