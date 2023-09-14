import { createServer } from "http";
import {readFile, readFileSync, rename} from 'fs';

const options = {
    key: readFileSync('.')
}