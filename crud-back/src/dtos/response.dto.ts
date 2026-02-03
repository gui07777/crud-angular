export class ResponseDto<T> {
    constructor(
        public success: boolean,
        public data: T | any,
        public errors: any
    ) { }
}