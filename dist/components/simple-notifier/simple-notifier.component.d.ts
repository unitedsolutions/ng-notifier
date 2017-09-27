import { Notifier } from '../../services/notifier.service';
export declare class SimpleNotifierComponent {
    private notifier;
    visible: any;
    message: any;
    timeout: any;
    classes: any;
    activeTime: number;
    address: any;
    constructor(notifier: Notifier);
    ngOnInit(): void;
    close(): void;
    ngOnDestroy(): void;
}
