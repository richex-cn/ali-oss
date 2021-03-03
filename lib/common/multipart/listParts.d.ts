import { Client } from '../../setConfig';
import { ObjectListPartsReturnType } from '../../types/object';
import { RequestOptions } from '../../types/params';
interface ListPartsQuery {
    'max-parts'?: number;
    'part-number-marker'?: number;
    'encoding-type'?: 'url';
}
/**
 * List the done uploadPart parts
 * @param {String} name object name
 * @param {String} uploadId multipart upload id
 * @param {Object} query
 * {Number} query.max-parts The maximum part number in the response of the OSS. Default value: 1000
 * {Number} query.part-number-marker Starting position of a specific list.
 * {String} query.encoding-type Specify the encoding of the returned content and the encoding type.
 * @param {Object} options
 * @return {Object} result
 */
export declare function listParts(this: Client, name: string, uploadId: string, query?: ListPartsQuery, options?: RequestOptions): Promise<ObjectListPartsReturnType>;
export {};