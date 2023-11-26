import path from 'node:path'
import { Decoder, Stream } from '@garmin/fitsdk'
const TypedDecoder = Decoder as any

const j = path.join("abc", "def")
console.log(j)

const bytes = [0x0E, 0x10, 0xD9, 0x07, 0x00, 0x00, 0x00, 0x00, 0x2E, 0x46, 0x49, 0x54, 0x91, 0x33, 0x00, 0x00];
const stream = Stream.fromByteArray(bytes);
console.log("isFIT (static method): " + TypedDecoder.isFIT(stream));