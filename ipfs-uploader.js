import { create } from 'kubo-rpc-client';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config("./.env");

const ipfs = create(new URL(process.env.IPFS_URL))

export async function addJSONToIPFS(json) {
  try {
      const result = await ipfs.add(JSON.stringify(json));
      return result;
  } catch (error) {
      console.error('Failed to add JSON to IPFS:', error);
  }
}

export async function addFileToIPFS(filePath) {
  try {
      const file = fs.readFileSync(filePath);
      const result = await ipfs.add({ path: filePath, content: file });
      return result;
  } catch (error) {
      console.error('Failed to add file to IPFS:', error);
  }
}