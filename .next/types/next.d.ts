// types/next.d.ts
import * as multer from 'multer';
import { NextApiRequest } from 'next';

declare module 'next' {
  interface NextApiRequest {
    file?: multer.File;
  }
}
