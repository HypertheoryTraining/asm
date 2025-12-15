import { HttpHandler } from 'msw';
import { bffHandlers } from './bff/handlers';
export const handlers: HttpHandler[] = [...bffHandlers];
