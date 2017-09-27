export declare class Notifier {
    static broadcasters: Map<any, any>;
    registerHandle(handle: any): any;
    deregisterHandle(handle: any): void;
    send(handle: any, data: any): void;
}
