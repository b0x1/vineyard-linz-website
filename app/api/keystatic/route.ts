import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../keystatic.config';

export const { GET, POST } = process.env.NODE_ENV === 'development'
  ? makeRouteHandler({ config })
  : {
      GET: () => new Response('Not found', { status: 404 }),
      POST: () => new Response('Not found', { status: 404 })
    };
