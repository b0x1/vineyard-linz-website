import { makePage } from '@keystatic/next/ui/app';
import config from '../../../keystatic.config';

export default makePage(config);

export async function generateStaticParams() {
  return [{ params: [] }];
}

export const dynamicParams = false;
